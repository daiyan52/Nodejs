const express = require('express');
const { url } = require('inspector');

const app = express();

let port = 3300;

const path = require('path');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set(express.static(path.join(__dirname,'public')));

let posts = [
    {
        username : "daiyan52",
        content : "I love coding",
    },
    {
        username : "raju52",
        content : "I am NCC boy",
    },
    {
        username : "anis62",
        content : "I am an Engineer",
    },
    {
        username : "rizwan401",
        content : "I am shayar",
    }
]



app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})