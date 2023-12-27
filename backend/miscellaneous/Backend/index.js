const express = require('express');
const app = express();

const port = 3300;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get('/register',(req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard get response welcome to ${user}`);
})

app.post('/register',(req,res)=>{

    let {user,password} = req.body;
    res.send(`Standard get response welcome to ${user}`);
})

app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})