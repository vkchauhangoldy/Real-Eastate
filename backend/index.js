const express = require('express');
// const dotenv = require("dotenv").config();


const cors =require('cors');
//Database Connection
const connect = require('./connection/connection')

const propRouter = require('./routes/route');
const userRouter = require('./routes/user');

const bodyparser = require('body-parser')

const app = express()
const port = 2023 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// All routers 
app.use('/', propRouter)
// app.use('/', userRouter)


app.get('/', function (req, res) {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});