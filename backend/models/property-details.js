const mongoose = require('mongoose')
const Schema = mongoose.Schema

const proprtyDeatils = new Schema({
    length: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    totalArea: {
        type: Number,
        required: true
    },
    areaUnit: {
        type: String
    },
    noOfBHK: {
        type: Number
    },
    noOfFloor: {
        type: Number
    },
    attached: {
        type: Number
    },
    westernToilet: {
        type: String
    },
    furnished: {
        type: String
    },
    carParking: {
        type: String
    },
    lift: {
        type: String
    },
    electrcity: {
        type: String
    },
    facing: {
        type: String,
        enum: ["east", "west", "north", "south"],
        default: "north"
    },
    basicInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'basicdetails'
    }   
})

const pDetails = mongoose.model("proprtyDetail", proprtyDeatils)
module.exports = pDetails;