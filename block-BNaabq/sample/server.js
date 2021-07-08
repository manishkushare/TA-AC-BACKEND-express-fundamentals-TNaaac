const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(cookieParser())
app.use(logger('dev'));
app.use('/about',(req,res,next)=>{
    res.cookie('username','suraj');
    next();
})
app.use('/about',(req,res,next)=>{
    // res.cookies('username','suraj');
    console.log(req.cookies);
    next();
})


app.get('/',(req,res)=>{
    res.send("Welcome");
})
app.get('/about',(req,res)=>{
    res.send("Welcome to about");
})
app.listen(3000);