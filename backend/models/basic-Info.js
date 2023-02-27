
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const basicInfo = new Schema({
    propertyType: { type: String, required: true },
    negotable: { type: String, required: true },
    price: { type: Number, required: true },
    ownership: { type: String, required: true },
    propertyAge: { type: Number, required: true },
    propertyApproved: { type: String, required: true },
    propertyDesc: { type: String, required: true },
}, { timestamps: true })

const bInfo = mongoose.model("sequenceData", basicInfo);
module.exports = bInfo;


// "propertyType":"house",
// "negotable": "personal",
// "price": 2354125,
// "ownership":"abcd",
// "propertyAge":10,
// "propertyApproved":"xyz",
// "propertyDesc":"good"