const express = require('express')
const router = express.Router()
const VisaRequest = require('../models/VisaRequest')
const auth = require('../utils/auth')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

// simple track endpoint
router.get('/track', async (req,res)=>{
  const {ref} = req.query
  const v = await VisaRequest.findOne({ref})
  if(!v) return res.status(404).json({error:'not found'})
  res.json(v)
})

// create presigned upload URL for document upload
router.post('/upload-url', auth, async (req,res)=>{
  const {filename, contentType} = req.body
  const Key = `${Date.now()}_${filename}`
  const client = new S3Client({region:process.env.AWS_REGION})
  const cmd = new PutObjectCommand({Bucket:process.env.S3_BUCKET, Key, ContentType:contentType})
  const url = await getSignedUrl(client, cmd, {expiresIn: 900})
  res.json({url, key:Key})
})

module.exports = router
