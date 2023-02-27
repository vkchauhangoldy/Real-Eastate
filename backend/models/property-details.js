const mongoose = require('mongoose')
const Schema =mongoose.Schema

const proprtyDeatils = new Schema({
    length: { type: Number, required: true},
    width: { type: Number, required: true},
    totalArea: { type: Number, required: true},
    areaUnit: { type: String, required: true },
    noOfBHK: { type: Number, required: true},
    noOfFloor: { type: Number, required: true},
    attached: { type: Number, required: true },
    westernToilet: { type: String, required: true },
    furnished:{ type: String, required: true },
    carParking:{ type: String, required: true },
    lift:{ type: String, required: true },
    electrcity:{ type: String, required: true },
    facing:{ type: String, required: true } 
})

const pDetails = mongoose.model("sequenceData", proprtyDeatils)
module.exports = pDetails;