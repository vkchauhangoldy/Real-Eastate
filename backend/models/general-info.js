const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genInfo = new Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    saleType: { type: String, required: true },
    featuredPackage: { type: String, required: true },
    ppdPackage: { type: String, required: true },
    image: { type: String, required: true }
})

const gInfo = mongoose.model("sequenceData", genInfo)
module.exports = gInfo;