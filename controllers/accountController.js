

//get user sign in form
module.exports.getSigninForm = function(req,res,next){
  return res.render('account/signin');
}

//post user signin form
module.exports.postSigninForm = function(req,res,next){
   return res.send({username:req.body.username,password:req.body.password});
}
