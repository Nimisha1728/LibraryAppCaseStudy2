const express=require("express");
const signupRouter=express.Router();
const Userdata=require('../model/userdata');


function router(nav){

    signupRouter.get('/',(req,res)=>{
        res.render('signup',{
            nav,
            title:'Library'
        });
    });
signupRouter.post('/register',(req,res)=>{
    var item={
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      password2: req.body.password2,
      
    }
  var user=Userdata(item);
  // Userdata.findOne(function(user){
  //     if(user.id===req.body.id){
  //       res.render('signup', {
  //         message: "User Already Exists! Login or choose another user id"});
  //        }
     
  // });
  user.save();
  res.redirect('/login');

});
 return signupRouter;
}

module.exports=router;