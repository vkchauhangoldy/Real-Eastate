const express = require('express')
const coonectDB= require("./Connection/connection");
coonectDB();
const app = express();
const routes_signup=require("./Routes/signup")

//const routes_login=require("./Routes/login");
const cors= require("cors");
app.use(express.json());
app.use(cors());
 app.use("/reg", routes_signup)
//  app.use("/log", routes_login)

app.listen(4000,()=>{console.log("server running at port 4000")});






