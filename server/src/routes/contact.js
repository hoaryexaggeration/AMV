const express = require('express')
const router = express.Router()
router.post('/', async (req,res)=>{
  // In production: queue email sending, save to DB, or integrate with transactional email provider
  console.log('Contact message:', req.body)
  res.json({ok:true})
})
module.exports = router
