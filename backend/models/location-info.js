const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationInfoSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        enum: ["Lucknow", "Chennai", "Bangalore", "Delhi"],
        required: true
    },
    area: {
        type: String,
    },
    pincode: {
        type: Number,
    },
    address: {
        type: String,
    },
    landmark: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    generalInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "generals",
    }
})


const LInfo = mongoose.model("locations", locationInfoSchema)
module.exports = LInfo;