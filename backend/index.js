const express = require('express')
const coonectDB= require("./Connection/connection");
coonectDB();
const Login= require("./models/Login")
const app = express();
app.use(express.json())
app.post("/login",async(req,res)=>{
  let user= new Login(req.body) //this login is above linenumber 4
  let result= await user.save();
  res.send(result);
})

app.listen(3000)