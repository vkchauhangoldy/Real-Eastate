const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addproperties = new Schema({
    property: {type: String, required: true },
    contact: { type: String,required: true},
    area: { type: String},
    views: { type: String},
    daysleft: { type: String},
    status: {type: String}
}, { timestamps: true })

const addprops = mongoose.model("RealEastate", addproperties)
module.exports = addprops;