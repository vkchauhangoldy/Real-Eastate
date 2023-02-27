const mongoose=require("mongoose")
const Schema=mongoose.Schema

const BlogSchema=new Schema({
   propertyType:{type:String,required:true},
   negotable:{type:String,required:true},
   price:{type:String,required:true},
   propertyAge:{type:Number,required:true},
   propertyApproved:{type:String,required:true},
   propertyDesc:{type:String,required:true},
   bankLoan:{type:String,required:true}
},{timestamps:true})

const BasicInfo=mongoose.model('Basic',BlogSchema)
module.exports=BasicInfo
