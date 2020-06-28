const express=require('express');
const app=express();

const nav=[
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/admin',name:'Add Books'
    }
    
];

const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);


const signupRouter=require('./src/routes/signupRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);

app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);


app.get('/',(req,res)=>{
    res.render("index",
    {
        nav,
        title:'Library'
    });
});

app.listen(5000);