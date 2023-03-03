const mongoose = require('mongoose');

const genInfo = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    postedby: {
        type: String,
        enum: ["dealer", "owner"],
        default: "owner"
    },
    saleType: {
        type: String
    },
    featuredPackage: {
        type: String,
        enum: ["pool", "gym", "playground"],
        default: "pool"
    },
    ppdPackage: {
        type: String,
    },
    propertyDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'proprtyDetails'
    }
})

const gInfo = mongoose.model("generalInfo", genInfo)
module.exports = gInfo;