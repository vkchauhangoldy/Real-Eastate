const express=require('express')
const app=express()
const Conn=require('./connection/connection')
Conn()
const Router=require('./Router/user')

app.get("/",(req,res)=>{
    res.send("Hi")
})

app.use(express.json())

app.listen(3000,console.log("server is up at 3000"))