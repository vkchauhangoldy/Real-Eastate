const express = require('express')
const route = require('./routes/route')
 const connect = require('./connection/connection')

// const B_Details=  require('./models/basic-Info')

const bodyparser= require('body-parser')

const app = express()
const port = 2023 

app.use(express.json());
app.use('/',route)

app.get('/', function (req, res) {
    res.send('Hello World')
})


// app.post('/basicinfo', async(req, res) => {
//     let data = new B_Details(req.body)
//     let result = await data.save();
//     console.log(req.body);
//     res.send(result)
// })

// app.post('/pdetails', (req, res) => {
//     console.log(req.body);
//     res.send('completed property details')
// })

// app.post('/geninfo', (req, res) => {
//     console.log(req.body);
//     res.send('completed general info')
// })
// app.post('/locateinfo', (req, res) => {
//     console.log(req.body);
//     res.send('completed location  info')
// })

app.listen(port, () => {
    console.log(`server is running at ${port}`);
});