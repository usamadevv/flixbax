

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({

    title: {
        type: String
    },
    status: {
        type: String
    },
    start: {
        type: String,
    }
    ,
    end: {
        type: String,
    },


Task:[
    {
        task: {
            type: String,
        },
        manager: {
            type: String,
        },
        description: {
            type: String,
        },
        end: {
            type: String,
        },  start: {
            type: String,
        },
        status: {
            type: String,
        },
    users: [{
        userid: {
            type: String,
        },
        username: {
            type: String,
        },   
         
    }],
    }
],
    priority: {
        type: String,


    },

});






const Projectx = mongoose.model('Project', Project);
module.exports = Projectx

