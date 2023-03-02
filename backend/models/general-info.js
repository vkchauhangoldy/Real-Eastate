const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genInfo = new Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    saleType: { type: String, required: true },
    featuredPackage: { type: String, required: true },
    ppdPackage: { type: String, required: true }
    // image: { type: String, required: true }
}, { timestamps: true })

const gInfo = mongoose.model("generalInfo", genInfo)
module.exports = gInfo;