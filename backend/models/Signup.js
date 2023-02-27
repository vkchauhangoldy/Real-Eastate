const mongoose= require("mongoose");
const Schema = mongoose.Schema;

const signupschema= new Schema({
    email: { type: String, required:true },
    password:{type:String, required:true},
    confirm_passowrd:{type:String}
   
  },{timestamps: true});

  module.exports=mongoose.model("LoginCollection",signupschema);