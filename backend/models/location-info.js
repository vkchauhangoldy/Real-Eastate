const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locateInfo = new Schema({
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    area: {
        type: String
    },
    pincode: {
        type: Number,
        required: true
    },
    address: {
        type: String
    },
    landMark: {
        type: String
    },
    lattitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    generalInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'generalInfo'
    }
})

const LInfo = mongoose.model("locationDetail", locateInfo)
module.exports = LInfo;