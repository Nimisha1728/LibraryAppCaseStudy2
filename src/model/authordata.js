const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true });
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
   
    author: String,
    genre: String,
    image1: String
});

var Authordata=mongoose.model('authordata',AuthorSchema);

module.exports=Authordata;