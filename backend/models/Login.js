const mongoose= require("mongoose");
const bcrypt= require("bcryptjs");//for hashing to password for security purpose
const jwt= require("jsonwebtoken")// for token
const SECRET_KEY="mynameismirdebahadorarbaz10xprojectok"

const keysecure= "mirdebahadorarbaziamthebestandallarebest";
const Schema = mongoose.Schema;

const loginschema= new Schema({
    email: { type:String, required:true, unique:true },
    password:{type:String, required:true },
    cpassword:{type:String, required:true},
    tokens:[{ //its in array bcz token generate many times
      token:{type:String, required:true}
     
    }]
   
  });

//hashing of password
loginschema.pre("save", async function(next){
   if(this.isModified("password")){
    this.password= await bcrypt.hash(this.password, 10);
    this.cpassword= await bcrypt.hash(this.cpassword, 10);
   }
   next();
})


//generate token here
loginschema.methods.genrateAuthtoken= async function(){
  try{
 let token12= jwt.sign({_id:this._id},SECRET_KEY);
 this.tokens= this.tokens.concat({token:token12});
 await this.save();
 return token12;
  } catch(err){
    console.log(err)
  }
}


//we keep userschema below bcz we do hashing after saving data 
const userschema= mongoose.model("loginCollections",loginschema);
  module.exports=userschema;