const express=require('express')
const router=express.Router()


const Basic=require('../module/basic')
const bodyParser=require('body-parser')

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))
router.use(express.json())
router.use(express.urlencoded({extended:false}))



module.exports=router