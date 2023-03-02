const mongoose= require("mongoose");
const bcrypt= require("bcrypt");//for hashing to password for security purpose
const jwt= require("jsonwebtoken")// for token

const keysecure= "mirdebahadorarbaziamthebestandallarebest";
const Schema = mongoose.Schema;

const loginschema= new Schema({
    email: { type:String, required:true, unique:true },
    password:{type:String, required:true },
    cpassword:{type:String, required:true},
    tokens:[{
      type:String, required:true
    }]
   
  });

  


//hashing of password
loginschema.pre("save", async function(next){
   
  this.password= await bcrypt.hash(this.password, 10);
  this.cpassword= await bcrypt.hash(this.cpassword, 10);

  next();
})

//generate token here
loginschema.methods.token_genrate= async function(){
  try{
    // id.this took from data once genrated ok and another is secrete key 
     let token12=jwt.sign({_id:this._id},keysecure,{
      expiresIn:"26d"
     });
     //this.tokens is come from schema tokens
     this.tokens=this.tokens.concat({token:token12});
     await this.save();
     return token12; 

  }catch(err){
resizeBy.status(422).json(err);
  }
}

//we keep userschema below bcz we do hashing after saving data 
const userschema= mongoose.model("LoginCollections",loginschema);
  module.exports=userschema;