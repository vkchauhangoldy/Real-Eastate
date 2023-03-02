const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addproperties = new Schema({
    property: { type: String, required: true },
    contact: { type: String, required: true },
    area: { type: String, required: true },
    views: { type: String, required: true },
    daysleft: { type: String, required: true },
    status: { type: String, required: true }
}, { timestamps: true })

const addprops = mongoose.model("RealEastate", addproperties)
module.exports = addprops;