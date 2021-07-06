const express = require('express');

const app = express();

app.use('/',(req,res,next)=> {
    console.log(req.url,req.method);
    next();
})

app.get('/',(req,res) => {
    res.send("Welcome");
})

app.listen(4000,()=> console.log("listening on 4k"));