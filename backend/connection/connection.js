const mongoose=require('mongoose')
async function getConnection(){
    await mongoose.connect('mongodb://localhost/realestate')
    console.log('mongoose is connected')
}

module.exports=getConnection