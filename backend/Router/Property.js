const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')//imported because have to upload files

// const User= require('../models/user')
const PropertyDetails = require('../model/property')
const { body, validationResult } = require('express-validator');
const Router = express.Router();
Router.use(bodyParser.urlencoded({ extended: false }))
Router.use(bodyParser.json())

Router.use(express.json());
Router.use(fileUpload());
// views  dayLeft
Router.post("/home", async (req, res) => {
    console.log(req.body);
    const { property, contact, area, views, daysleft,status} = req.body;
    console.log(property);
    try {
        const propertyDetails = await PropertyDetails.create({ property: property, contact: contact, area: area, views: views, daysleft: daysleft ,status:status});
        res.status(200).json({
            status: "successfully created propertyDetails",
            propertyDetails
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            status: "error while creating propertyDetails",
            message: e.message
        })
    }
})
Router.get('/:key', async (req, res) => {
    let result = await PropertyDetails.find(
        {
            "$or": [
                {contact: {$regex:req.params.key } },
                {property: {$regex:req.params.key } },
                {area: {$regex:req.params.key } }
            ]
        }
    )
    res.send(result)
    // console.log(result)
    console.log(req.params.search)
})

module.exports=Router;