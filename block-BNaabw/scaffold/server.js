const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use(cookieParser());

app.use((req,res,next)=>{
    console.log(req.cookies);
    res.cookie("username","xyz");
    next();
})

app.get('/',(req,res)=>{
    res.send("Welcome to home page");
})
app.get('/users',(req,res)=>{
    res.send("Welcome to about page");
})
app.use((req,res)=>{
    res.send("Page not found");
    // next();
})
app.use((err,req,res,next)=> {
    res.send(err);
})

app.listen(4000, ()=> console.log("listening on port 4 k"));


