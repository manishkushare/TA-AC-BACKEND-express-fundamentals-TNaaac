const express = require('express');

const app = express();

app.use('/admin',(req,res,next)=>{
    next('Unauthorize');
})
app.get('/',(req,res)=>{
    res.send("welcome");
})
app.get('/about', (req,res)=>{
    res.send("about page");
})

app.use((req,res,next)=>{
    res.send('Page not found');
})

app.use((err,req,res,next)=> {
    res.send(err);
})



app.listen(3000);