const express = require('express');
const router = express.Router();
const AddProps = require('../models/addproperties')
const BasicInfo = require('../models/basic-Info')
const PropDetails = require('../models/property-details')
const GenInfo = require('../models/general-info')
const LocateInfo = require('../models/location-info')
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//to add new properties

router.post('/addprops', async (req, res) => {
    try {
        let data = await AddProps.create(req.body)
        return res.status(200).json({
            status: "properties added sucessfully",
            data: data
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});


// for basic details

router.post('/basicinfo', async (req, res) => {
    try {
        let data = await BasicInfo.create(req.body)
        return res.status(200).json({
            status: "properties added sucessfully",
            data: data
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

// for property details
router.post('/propdetails', async (req, res) => {
    try {
        let data = await PropDetails.create(req.body)
        return res.status(200).json({
            status: "properties added sucessfully",
            data: data
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

// for general information
router.post('/geninfo', async (req, res) => {
    try {
        let data = await GenInfo.create(req.body)
        return res.status(200).json({
            status: "properties added sucessfully",
            data: data
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

//for location information
router.post('/locateinfo', async (req, res) => {
    try {
        let data = await LocateInfo.create(req.body)
        return res.status(200).json({
            status: "properties added sucessfully",
            data: data
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});


// to get addproperty data 
router.get('/addprops', async (req, res) => {
    try {
        const addPropsData = await AddProps.find();
        return res.status(200).json({
            message: "received data",
            addPropsData
        })
    } catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});


// to get all the data of added property

router.get('/alldata', async (req, res) => {
    try {
        const locationData = await LocateInfo.find().populate({
            path: 'generalInfo',
            populate: {
                path: 'proprtyDetail',
                populate: {
                    path: 'basicdetail'
                }
            }
        })
        return res.status(200).json({
            message: "fetched all data of property",
            locationData
        })
    } catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

module.exports = router;