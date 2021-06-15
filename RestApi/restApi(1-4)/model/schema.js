const mongoose= require('mongoose');
const invSChema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    }
})

const Inv = new mongoose.model('Inv',invSChema);

module.exports = Inv;