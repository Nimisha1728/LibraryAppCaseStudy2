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
   
    loginRouter.post('/check',(req,res)=>{
        
        let {email, password} = req.body;
        Userdata.findOne({email: email}, {password: password}, (err, userData) => {
            if(!userData){
                return res.status(404).redirect('/login');
                //res.redirect('/login');
            }
            else if (!err) {
                
                return res.status(200).redirect('/');
            }
              if(!userData){
                  return res.status(404).redirect('/login');
                  //res.redirect('/login');
              }
              else{
                  res.status(401).send("invalid credentials");
              }

          })
    });

    


 return loginRouter;
}

module.exports=router;