

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rolex = new Schema({

    role: {
        type: String
    },
    status: {
        type: String
    },
    view: {
        type: String
    },
    add: {
        type: String
    },
    edit: {
        type: String
    },
    detail: {
        type: String
    },
    delete: {
        type: String
    },
    


});






const Role = mongoose.model('Rolex', Rolex);
module.exports = Role

