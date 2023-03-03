const express = require("express")
const router = express.Router()
// const bcrypt = require("bcrypt")
// const dotenv = require("dotenv")
const userdata= require('../models/user-model')

router.post('/userdata',async(req,res)=>{
    try {
        const userdetails = await userdata.create(req.body)
        return res.status(200).json({
            status: "user  details added sucessfully",
            userdetails
        });
    }
    catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
})