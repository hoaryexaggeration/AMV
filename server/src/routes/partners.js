const express = require('express')
const router = express.Router()
const auth = require('../utils/auth')
const VisaRequest = require('../models/VisaRequest')
const createCsvWriter = require('csv-writer').createObjectCsvStringifier

// partner-only: get commission report
router.get('/commissions', auth, async (req,res)=>{
  // only partner role allowed
  if(req.user.role!=='partner' && req.user.role!=='admin') return res.status(403).json({error:'forbidden'})
  // sample: aggregate visa requests grouped by partnerId and count
  const agg = await VisaRequest.aggregate([
    {$match: {partnerId: {$exists:true}}},
    {$group: {_id:'$partnerId', total: {$sum:1}}}
  ])
  res.json(agg)
})

// export CSV for a partner's cases
router.get('/export', auth, async (req,res)=>{
  if(req.user.role!=='partner' && req.user.role!=='admin') return res.status(403).json({error:'forbidden'})
  const partnerId = req.user.id
  const cases = await VisaRequest.find({partnerId}).lean()
  const csvStringifier = createCsvWriter({
    header: [
      {id:'ref', title:'REF'},
      {id:'applicantName', title:'Applicant'},
      {id:'status', title:'Status'},
      {id:'createdAt', title:'CreatedAt'}
    ]
  })
  const header = csvStringifier.getHeaderString()
  const body = csvStringifier.stringifyRecords(cases.map(c=>({ref:c.ref, applicantName:c.applicantName, status:c.status, createdAt:c.createdAt})))
  res.setHeader('Content-disposition', 'attachment; filename=cases.csv')
  res.setHeader('Content-Type', 'text/csv')
  res.send(header + body)
})

module.exports = router


// Payments: create Stripe PaymentIntent (server-side)
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_xxx')
router.post('/create-payment', auth, async (req,res)=>{
  const {amount, currency='usd'} = req.body
  const intent = await stripe.paymentIntents.create({amount, currency})
  res.json({clientSecret: intent.client_secret})
})


// List partner files (keys stored in VisaRequest.documents)
router.get('/files', auth, async (req,res)=>{
  if(req.user.role!=='partner' && req.user.role!=='admin') return res.status(403).json({error:'forbidden'})
  const partnerId = req.user.id
  const cases = await VisaRequest.find({partnerId}).lean()
  const files = []
  cases.forEach(c=>{ if(c.documents && c.documents.length) c.documents.forEach(k=>files.push({key:k, caseRef:c.ref})) })
  // Create presigned URL for each key (if AWS configured)
  const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3')
  const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
  const client = new S3Client({region:process.env.AWS_REGION})
  const prom = files.map(async f=>{
    try{
      const cmd = new GetObjectCommand({Bucket:process.env.S3_BUCKET, Key:f.key})
      const url = await getSignedUrl(client, cmd, {expiresIn: 300})
      return {key:f.key, url, caseRef:f.caseRef}
    }catch(err){ return {key:f.key, url:null, caseRef:f.caseRef} }
  })
  const result = await Promise.all(prom)
  res.json(result)
})

// CSV import (multer)
const multer = require('multer')
const upload = multer({storage: multer.memoryStorage()})
const { parse } = require('csv-parse/sync')
router.post('/import-csv', auth, upload.single('file'), async (req,res)=>{
  if(req.user.role!=='partner' && req.user.role!=='admin') return res.status(403).json({error:'forbidden'})
  if(!req.file) return res.status(400).json({error:'no file'})
  const text = req.file.buffer.toString('utf8')
  const records = parse(text, {columns:true, skip_empty_lines:true})
  // expected columns: ref, applicantName
  let count = 0
  for(const r of records){
    const ref = r.ref || (`P-${Date.now()}-${Math.floor(Math.random()*1000)}`)
    await VisaRequest.create({ref, applicantName: r.applicantName||r.name||'Unknown', partnerId: req.user.id})
    count++
  }
  res.json({ok:true, count})
})
