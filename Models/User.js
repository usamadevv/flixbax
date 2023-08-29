

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({

    name: {
        type: String
    },
    fname: {
        type: String
    },
    lname: {
        type: String,
    }
    ,
    email: {
        type: String,
    },



    phone: {
        type: String,
    },
    role: {
        type: String,


    },
    status: {
        type: String
    },


});






const Userx = mongoose.model('user', user);
module.exports = Userx

