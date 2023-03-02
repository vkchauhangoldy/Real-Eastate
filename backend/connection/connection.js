
const mongoose = require('mongoose')

// const uri = 'mongodb://localhost/Real-Eastate'
const uri = 'mongodb+srv://vkchauhangoldy:vkchauhangoldy@realeastate.t9ei3ec.mongodb.net/Real-Eastate?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)

function getConection() {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log('connection to database is failed');
        } else {
            console.log('connected to database successfully');
        }
    });
}
module.exports = getConection();