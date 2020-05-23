//Check xem cookie co duoc gui len khong
var db=require('../db');
module.exports.requireAuth=(req,res,next)=>{
    if(!req.signedCookies.userId){
        res.redirect('/auth/login');
        return;
    }
    var user=db.get("users").find({id: req.signedCookies.userId}).value();
    if(!user){
        res.redirect('/auth/login');
        return;
    }
    res.locals.user=user;
    next(); //de chay sang middleware tiep theo
}