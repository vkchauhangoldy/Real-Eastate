const mongoose=require('mongoose')
const uri='mongodb+srv://vkchauhangoldy:vkchauhangoldy@realeastate.t9ei3ec.mongodb.net/Real-Eastate?retryWrites=true&w=majority'
// const uri='mongodb+srv://sanchithakp123:sanchithakp123@cluster0.uuhngmg.mongodb.net/?retryWrites=true&w=majority'
const getConnection=async()=>{
  await mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log("Connected to mongoDB successfully")
        }
    }
    )
}
module.exports=getConnection