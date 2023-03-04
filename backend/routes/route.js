const express = require('express');
const router = express.Router();
const path = require('path');
const upload = require('../middelwares/multer')

const AddProps = require('../models/addproperties')
// Imported all models
const BasicInfo = require('../models/basic-Info')
const PropDetails = require('../models/property-details')
const GenInfo = require('../models/general-info')
const LocateInfo = require('../models/location-info')
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));




// post api for basic details main-api

router.post('/api/basic', async (req, res) => {
    try {
        let basicdetails = await BasicInfo.create(req.body)
        return res.status(200).json({
            status: "basic details added sucessfully",
            basicdetails
        });
    }
    catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
});


// post api for property details
router.post('/api/property', async (req, res) => {
    try {
        let propertydetails = await PropDetails.create(req.body)
        return res.status(200).json({
            status: "property details added sucessfully",
            propertydetails
        });
    }
    catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
});

// post for general information
router.post('/api/general', async (req, res) => {
    try {
        let generaldetails = await GenInfo.create(req.body)
        return res.status(200).json({
            status: "general info added sucessfully",
            generaldetails
        });
    }
    catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
});


// post for location information
router.post('/api/location', async (req, res) => {
    try {
        let locationdetails = await LocateInfo.create(req.body)
        return res.status(200).json({
            status: "Location details added sucessfully",
            locationdetails
        });
    }
    catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
});

//postb\ api for required field

router.post('/api/require', async (req, res) => {
    try {
        const { image } = req.file
        const requireInfodetails = await requireInfo.create({
            ...req.body,
            image: req.file.filename,
        })
        return res.status(200).json({
            status: "required field added sucessfully",
            requireInfodetails
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

// to post addproperty data --->extra part
router.post('/addprops', async (req, res) => {
    try {
        const addPropsData = await AddProps.create(req.body);
        return res.status(200).json({
            message: "all require data is added",
            addPropsData
        })
    } catch (e) {
        return res.status(400).json({
            status: "Failure",
            message: e.message
        });
    }
});


//to get requred field data
router.get('/requireinfo', async (req, res) => {
    try {
        const requiredData = await requireInfo.find()
        return res.status(200).json({
            status: "require data fetched sucessfully",
            requiredData
        });
    }
    catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});


// to get all the data of added property

router.get('/api/alldata', async (req, res) => {
    try {
        const locationdata = await LocateInfo.find().populate({
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
            locationdata
        })
    } catch (e) {
        return res.status(404).json({
            status: "Failure",
            message: e.message
        });
    }
});

//to fetch the images
router.get("/api/images/:fileName", (req, res) => {
    return res.sendFile(path.join(__dirname, `../uploads/${req.params.fileName}`))
})

module.exports = router;