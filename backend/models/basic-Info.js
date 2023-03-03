const mongoose = require('mongoose');

const basicInfoSchema = new mongoose.Schema({
    property: {
        type: String,
        enum: ["plot", "house", "flat"],
        required: true
    },
    negotable: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },
    price: {
        type: Number,
    },
    ownership: {
        type: String,
        enum: ["dealer", "self"],
        default: "self"
    },
    propertyAge: {
        type: Number,
    },
    propertyApproved: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },
    propertyDesc: {
        type: String,
    },
    bankLoan: {
        type: String,
        enum: ["yes", "no"],
        default: "no"
    }
},{ timestamps: true })

const bInfo = mongoose.model("basicinfos", basicInfoSchema);
module.exports = bInfo;

