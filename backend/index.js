const express=require('express')
const app=express()

const mongoose=require('mongoose')

const Conn=require('./Connection/conn')
Conn()
// const User=require('./app/User')
// const Search1=require('./app/Search')
const User1=require('./Router/Property')

 const cors=require('cors')


const bodyParser=require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:false}))
app.use(express.json())
app.use(express.urlencoded())
 app.use(cors())

app.get('/',(req,res)=>{
    res.send('hi')
})

// app.use('/',User)
app.use('/h1',User1)
// app.use('/h2',Search1)
// // app.post('/basic',(req,res) => {
    
//    res.send(req.body)
//     console.log(req.body);
// })
// app.post('/general',(req,res) => {
    
//     res.send(req.body)
//      console.log(req.body);
//  })
//  app.post('/location',(req,res) => {
    
//     res.send(req.body)
//      console.log(req.body);
//  })
//  app.post('/property',(req,res) => {
    
//      res.send(req.body)
//       console.log(req.body);
//  })

// const app=express()



app.listen(8080,console.log("server is up at 8080"))

