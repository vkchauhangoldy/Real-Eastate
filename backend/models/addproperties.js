const mongoose = require('mongoose');

const addproperties = new mongoose.Schema({
    ppdid: {
        type: String,
        default: function () {
            // const year = new Date().setFullYear().toString().substring(-1);
            // const randomNum = Math.floor(Math.random() * 9000) + 1000;
            // return `PPD${year}${randomNum}`;
            const ppd_id = "PPD" + Math.floor(Math.random() * 9000 + 1000);
            return ppd_id
        }
    },
    image: {
        type: String
    },
    property: {
        type: String,
        enum: ["plot", "house", "flat"],
        default: "flat"
    },
    contact: {
        type: String
    },
    area: {
        type: String
    },
    views: {
        type: String,
        default: function () {
            const views = parseInt(Math.random() * 30);
            return views
        }
    },
    status: {
        type: String
    },
    daysleft: {
        type: String,
        default: function () {
            const daysleft = parseInt(Math.random() * 20);
            return daysleft
        }
    },
    action:{
        type: String,
        default:"action"
    }
});

const addprops = mongoose.model("RealEastate", addproperties)
module.exports = addprops;
