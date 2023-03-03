const mongoose = require('mongoose');

const basicInfo = new mongoose.Schema({
    propertyType: {
        type: String,
        required: true
    },
    negotable: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    ownership: {
        type: String
    },
    propertyAge: {
        type: Number
    },
    propertyApproved: {
        type: String
    },
    propertyDesc: {
        type: String
    },
    bankLoan: {
        type: String,
        required: true
    }
})

const bInfo = mongoose.model("basicdetail", basicInfo);
module.exports = bInfo;

