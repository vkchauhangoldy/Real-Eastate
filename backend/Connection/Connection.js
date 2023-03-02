const mongoose = require('mongoose');


const url = 'mongodb+srv://vkchauhangoldy:vkchauhangoldy@realeastate.t9ei3ec.mongodb.net/Real-Eastate?retryWrites=true&w=majority';
mongoose.set('strictQuery', true)
function connectDB() {
    mongoose.connect(url, (err) => {
        if (err) {
            console.log('connection to database is failed');
        } else {
            console.log('connected to database successfully');
        }
    });
}
module.exports = connectDB;