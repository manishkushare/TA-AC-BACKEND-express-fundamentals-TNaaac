const express = require('express');

const app = express();
app.use(express.urlencoded({extended:false}))
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

app.get('/new',(req,res)=>{
    res.sendFile(__dirname + "/new.html")
})

app.post('/new',(req,res)=>{

    console.log(req.body);
    res.json(req.body);
})

app.get('/users/:1234',(req,res)=>{
    let username = req.params[1234];
    res.send(username);
})

app.listen(3000)