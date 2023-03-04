const mongoose = require('mongoose');

const generalInfoScehma = new mongoose.Schema({
    username: {
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
    saletype: {
        type: String
    },
    feature: {
        type: String,
        enum: ["gym", "pool", "garden"],
        default: "gym"
    },
    PPDpackage: {
        type: String
    },
   
    propertyInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties"
    }

})
const gInfo = mongoose.model("generals", generalInfoScehma)
module.exports = gInfo;