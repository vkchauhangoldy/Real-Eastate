const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LogoInfo = new Schema({
    ppid: { type: Number, required: true },
    image: { contentType:String, required: true },
    property: { type: String, required: true },
    contact: { type: Number, required: true },
    area: { type: String, required: true },
    views: { type: String, required: true },
    status: { type: Number, required: true },
    DaysLeft: { type: Number, required: true },
    Action:{type: Number, required: true}
})

const LgInfo = mongoose.model('logo',LogoInfo)
module.exports=LgInfo