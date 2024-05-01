

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({

    name: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String,
    }
    ,
    password: {
        type: String,
    },



    timezone: {
        type: String,
    },
    ptype: {
        type: String,


    },
    payrate: {
        type: String
    },
    billrate: {
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

