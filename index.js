var express = require('express')

const SERVER_PORT = 8089
var app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/hello',(req,res)=>{
    res.send("Hello Express JS")
})

app.get('/user',(req,res)=>{
    let data = req.query
    res.send(data)
})
app.post("/user/:firstname/:lastname",(req,res)=>{
    const data = req.params
    res.send(data)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})