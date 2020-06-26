const express=require("express");
const loginRouter=express.Router();
const Userdata=require('../model/userdata');


function router(nav){

    loginRouter.get('/',(req,res)=>{
        res.render('login',{
            nav,
            title:'Library'
        });
    });

    loginRouter.post('/',(req,res)=>{
          var item={
              email: req.body.email,
              password: req.body.password
          }
          Userdata.findOne({
              email: email,
              password: password
          },(err,user)=>{
              if(err){
                  console.log(err);
                  return res.status(500).send();
                  
              }
              if(!user){
                  //return res.status(404).send();
                  res.redirect('/login');
              }
              else{
                  res.redirect('/');
              }

          })
    });

    


 return loginRouter;
}

module.exports=router;