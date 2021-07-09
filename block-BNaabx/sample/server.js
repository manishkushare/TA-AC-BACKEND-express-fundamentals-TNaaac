const express = require('express');

const app = express();

app.use((req,res,next)=> {
    console.log(req.method,req.url,new Date());
    next();
});
app.use((req,res,next)=>{

});

app.get('/',(req,res)=>{
    res.send("Welcome");
});
app.post('/about',(req,res)=> {
    
});
app.listen(4000, ()=>{
    console.log("listening on port 4k");
});