const mongoose=require('mongoose')
const Schema=mongoose.Schema

const GenrealSchema=new Schema({
    name:{type:String,required:true},
   mobile:{type:Number,required:true},
    postedby:{type:String,required:true},
    saletype:{type:String,required:true},
   featurepackage:{type:String,required:true},
    ppdpackage:{type:String,required:true}
},{timestamps:true})

const GenrealInfo=mongoose.model('general',GenrealSchema)
module.exports=GenrealInfo
