const express = require('express');
const path = require('path');
const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname,"public")));


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/hello',(req,res)=>{
    res.send('hello')
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

app.get('/dice',(req,res)=>{
    let diceValue  = Math.floor(Math.random()*6)+1
    res.render('dice.ejs',{diceValue});
})

app.get('/ig/:username',(req,res)=>{
    const instaData = require('./data.json');
    let {username} = req.params;
    let data = instaData[username];
    // console.log(data);
    if(data){
        res.render('instragram.ejs',{data});
    }
    else{
        res.render('error.ejs');
    }
})