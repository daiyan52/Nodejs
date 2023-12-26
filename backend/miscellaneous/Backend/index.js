const express = require('express');
const app = express();

const port = 3300;

app.get('/register',(req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard get response welcome to ${password}`);
})

app.post('/register',(req,res)=>{
    res.send("Standard post response");
})

app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})