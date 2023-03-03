const mongoose = require('mongoose');

const generalInfoScehma = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 12,
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
        enum: ["gym", "pool", "garden", "auditorium"],
        default: "gym"
    },
    PPDpackage: {
        type: String,
    },
    image: {
        type: String,
        required: true
    },
    propertyInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "properties",
    }

})
const gInfo = mongoose.model("generals", generalInfoScehma)
module.exports = gInfo;