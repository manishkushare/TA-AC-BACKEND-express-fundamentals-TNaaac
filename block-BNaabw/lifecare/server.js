const express = require('express');
const logger = require('morgan');
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));

app.get('/index.html',(req,res)=> {
    res.sendFile(__dirname + "/index.html");
});
app.get('/about.html',(req,res) => {
    console.log(req.url);
    res.sendFile(__dirname + "/about.html");
});
app.get('/cardio-pulmonary.html',(req,res)=>{
    res.sendFile(__dirname + "/cardio-pulmonary.html")
});
app.get('/community.html',(req,res)=>{
    res.sendFile(__dirname + "/community.html")
});
app.get('/contact_us.html',(req,res)=>{
    res.sendFile(__dirname + "/contact_us.html")
});
app.get('/neurological.html',(req,res)=>{
    res.sendFile(__dirname + "/neurological.html")
});
app.get('/testimonials.html',(req,res)=>{
    res.sendFile(__dirname + "/testimonials.html")
});
app.get('/musculoskeleton.html',(req,res)=>{
    res.sendFile(__dirname + "/musculoskeleton.html")
});


app.listen(5000,()=>{
    console.log("listen on port 5k");
});

