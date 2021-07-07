const express = require('express');

const app = express();
//logger
app.use("/",(req,res,next)=> {
    console.log(req.method,req.url);
    next();
});
//in-built
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(__dirname + "/public"));

app.get('/',(req,res)=> {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000,()=> console.log("listening on port 3k"));