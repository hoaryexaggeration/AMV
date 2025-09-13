const mongoose = require('mongoose')
const VisaSchema = new mongoose.Schema({
  ref:String,
  applicantName:String,
  status:{type:String,default:'Received'},
  history:[{status:String, note:String, date:Date}],
  partnerId:String,
  documents:[String], // S3 keys
},{timestamps:true})
module.exports = mongoose.model('VisaRequest', VisaSchema)
