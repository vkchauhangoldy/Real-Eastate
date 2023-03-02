const express = require('express')
const route = require('./routes/route')
 const connect = require('./connection/connection')

const bodyparser= require('body-parser')

const app = express()
const port = 2023 

app.use(express.json());
app.use('/',route)


app.get('/', function (req, res) {
    res.send('Hello World')
})


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});