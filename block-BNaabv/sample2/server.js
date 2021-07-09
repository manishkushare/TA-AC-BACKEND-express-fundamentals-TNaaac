const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(logger('dev'));

app.use((req,res,next)=> {
    console.log(req.cookies);
    res.cookie('username',`${req.body.name}`)
    next();
})

app.get('/',(req,res)=>{
    res.send(`<h2>Welcome to express</h2>`)
})
app.get('/about',(req,res)=>{
    res.send('My name is qwerty');
})
app.post('/form',(req,res)=> {
    res.json(req.body);
})
app.get('/users/:username',(req,res)=>{
    let username = req.params.username;
    res.send(`<h2>${username}</h2>`);
})
app.post('/json',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send(req.body);
})
app.use((req,res,next)=>{
    res.send('Page not found');
    next();
})
app.use((err,req,res,next)=>{
    res.send(err);
    
})
app.listen(3000,()=>console.log("listening on port 3k"))
