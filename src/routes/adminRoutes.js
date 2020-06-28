const express=require("express");
const adminRouter=express.Router();
const Bookdata=require('../model/bookdata');
const Authordata=require('../model/authordata');



function router(nav){

    adminRouter.get('/',(req,res)=>{
        res.render('addBooks',{
            nav,
            title:'Library'
        });
    });
adminRouter.post('/add',(req,res)=>{
    let item={
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      image: req.body.image,
    //image:req.file.filename
      
    }
  var book=Bookdata(item);
  book.save();
  res.redirect('/books');

  var itemAuth={
    author: req.body.author,
    genre: req.body.genre,
    image1: req.body.image1
  }
 var author=Authordata(itemAuth);
 author.save();
 

});

adminRouter.get('/edit/:id',(req, res)=> {
  const id = req.params.id;
  Bookdata.findOne({ _id: id })
      .then(function(book) {
          res.render('book_edit', {
              nav,
              title: 'Library App',
              book
          });
      });
});



adminRouter.post('/update/:id',(req,res)=>{
  const id = req.params.id;
  var item={
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
    
    
  }
  
  Bookdata.findByIdAndUpdate({_id:id},item,function(req,res){

  });
  res.redirect('/books')
});
  



adminRouter.get('/delete/:id',(req, res)=> {
  const id = req.params.id;
  Bookdata.deleteOne({ _id: id })
      .then(function(book) {
         
          res.redirect('/books');
      });
});

adminRouter.get('/editauthor/:id',(req, res)=> {
  const id = req.params.id;
  Authordata.findOne({ _id: id })
      .then(function(author) {
          res.render('author_edit', {
              nav,
              title: 'Library App',
              author
          });
      });
});



adminRouter.get('/deleteauthor/:id',(req, res)=> {
  const id = req.params.id;
  Authordata.deleteOne({ _id: id })
      .then(function(author) {
         
          res.redirect('/authors');
      });
});

adminRouter.post('/updateAuthor/:id',(req,res)=>{
  const id = req.params.id;
  var item={
    
    author: req.body.author,
    genre: req.body.genre,
    image1: req.body.image1
    
  };
  Authordata.findByIdAndUpdate({_id:id},item,function(req,res){

  });
  res.redirect('/authors');

});



 return adminRouter;
}

module.exports=router;