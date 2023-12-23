const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello i am root")
})
let port = 8080;

app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
});

app.get('/name',(req,res)=>{
    res.send("<h1>Daiyan Alam</h1>")
})

app.get('/roll',(req,res)=>{
     res.send("<h2>430420010052</h2>")
})
/*
app.get("*",(req,res)=>{
     res.send(" <h3>Please chose right path</h3>");
})
*/

/*
app.get('/:username',(req,res)=>{
    console.log(req.params)
})

app.get('/:username/:roll',(req,res)=>{
    let {username,roll} = req.params;
    res.send(`${username}<br> ${roll}`)
})
*/

app.get('/search',(req,res)=>{
    console.log(req.query);
    let {q} = req.query;
    if(!q){
        res.send(`<h1>nothing searched</h1>`)
    }
    res.send(`<h1>search result for : ${q}</h1>`)
})