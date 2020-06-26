const express=require('express');
const authorsRouter=express.Router();
const Authordata=require('../model/authordata');

function authrouter(nav){
   
    authorsRouter.get('/',(req,res)=>{
        Authordata.find()
        .then((authors)=>{
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        });
        
    });

    authorsRouter.get('/:id',(req,res)=>{
        const id=req.params.id;
        Authordata.findOne({_id: id})
        .then((author)=>{
            res.render('author',{
                nav,
                title:'Library',
                author
            });
        })
       
    });
    return authorsRouter;
}

module.exports=authrouter;