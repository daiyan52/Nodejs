const express = require("express");
const app = express();
app.get("/", (req, res)=>{
    res.send("Hello world!!!");
})

app.get("/api/courses", (req, res)=>{
    res.send(JSON.stringify([1,2,3,4]));
})

app.get("/api/courses/:id",(req, res)=>{
    res.send(req.params.id)
})

app.get("/api/courses/:year/:month",(req, res)=>{
    res.send(req.params)
})

const port = process.env.PORT || 3300;
app.listen(port, ()=>{
    console.log(`server is listening on... ${port}`);
})