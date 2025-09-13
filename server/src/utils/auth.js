const jwt = require('jsonwebtoken')
module.exports = function(req,res,next){
  const auth = req.headers.authorization
  if(!auth) return res.status(401).json({error:'Missing token'})
  const token = auth.split(' ')[1]
  try{
    const data = jwt.verify(token, process.env.JWT_SECRET)
    req.user = data
    next()
  }catch(err){
    res.status(401).json({error:'Invalid token'})
  }
}
