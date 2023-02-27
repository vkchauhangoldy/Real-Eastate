
const mongoose = require('mongoose')

const uri = 'mongodb://localhost/Real-Eastate'
mongoose.set('strictQuery', true)

function getConection() {
    mongoose.connect(uri, (err) => {
        if (err) {
            console.log('connection to database is failed');
        } else {
            console.log('connected to database successfully');
        }
    })
}
module.exports = getConection();