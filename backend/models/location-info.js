const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locateInfo = new Schema({
    email: { type: String, required: true },
    city: { type: String, required: true },
    area: { type: String, required: true },
    pincode: { type: Number, required: true },
    address: { type: String, required: true },
    landMark: { type: String, required: true },
    lattitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
})

const LInfo = mongoose.model("sequenceData", locateInfo)
module.exports = LInfo;