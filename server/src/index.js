require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const corsOptions = { origin: process.env.FRONTEND_URL || '*' };
app.use(cors(corsOptions))
app.use(express.json())

const authRoutes = require('./routes/auth')
const visaRoutes = require('./routes/visas')
const partnerRoutes = require('./routes/partners')
const contactRoutes = require('./routes/contact')

app.use('/api/auth', authRoutes)
app.use('/api/visas', visaRoutes)
app.use('/api/partners', partnerRoutes)
app.use('/api/contact', contactRoutes)

const PORT = process.env.PORT || 4000
mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log('Mongo connected')
  app.listen(PORT, ()=> console.log('Server listening on', PORT))
}).catch(err=>{
  console.error(err)
  app.listen(PORT, ()=> console.log('Server listening on', PORT, ' (no DB)'))
})
