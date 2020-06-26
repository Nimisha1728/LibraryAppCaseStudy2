const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../model/bookdata');


function router(nav){
    
    booksRouter.get('/',(req,res)=>{
        Bookdata.find()
        .then((books)=>{
            res.render("books",{
                nav,
                title:'Library',
                 books
            });
        });
       
    });

    booksRouter.get('/:id',(req,res)=>{
        const id=req.params.id
        Bookdata.findOne({_id: id})
        .then((book)=>{
            res.render('book',{
                nav,
                title:'Library',
                book
    
            });
        })
        
    });

 

    
    return booksRouter;
}

    module.exports=router;