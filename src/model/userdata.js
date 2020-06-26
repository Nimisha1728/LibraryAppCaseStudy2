const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/library',{ useNewUrlParser: true });
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
        },
    password: String,
    password2: String
});

var Userdata=mongoose.model('userdata',UserSchema);

module.exports=Userdata;