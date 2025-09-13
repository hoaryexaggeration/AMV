const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req,res)=>{
  const {name,email,password,role} = req.body
  const existing = await User.findOne({email})
  if(existing) return res.status(400).json({error:'Email exists'})
  const hash = await bcrypt.hash(password,10)
  const u = await User.create({name,email,passwordHash:hash,role:role||'user'})
  const token = jwt.sign({id:u._id, email:u.email, role:u.role}, process.env.JWT_SECRET, {expiresIn:'7d'})
  res.json({token})
})

router.post('/login', async (req,res)=>{
  const {email,password} = req.body
  const u = await User.findOne({email})
  if(!u) return res.status(400).json({error:'Invalid'})
  const ok = await bcrypt.compare(password, u.passwordHash)
  if(!ok) return res.status(400).json({error:'Invalid'})
  const token = jwt.sign({id:u._id, email:u.email, role:u.role}, process.env.JWT_SECRET, {expiresIn:'7d'})
  res.json({token})
})

module.exports = router
