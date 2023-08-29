

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contractors = new Schema({

   
    fname: {
        type: String
    },
    types: {
        type: String
    },
    lname: {
        type: String,
    }
    ,
    trade: {
        type: String,
    },



    experience: {
        type: String,
    },
    email: {
        type: String,


    },
    phone: {
        type: String
    },
    ssn: {
        type: String,
    },



    address: {
        type: String,
    },
    city: {
        type: String,


    },
    state: {
        type: String
    }, zip: {
        type: String,
    },



    birth: {
        type: String,
    },
    schoolname: {
        type: String,


    },
    schoolnoy: {
        type: String
    },


    schoolpos: {
        type: String,
    },
    schooldip: {
        type: String,


    },
    collegename: {
        type: String,


    },
    collegenoy: {
        type: String
    }, trade: {
        type: String,
    },



    collegepos: {
        type: String,
    },
    collegedip: {
        type: String,


    },
    tradeschoolname: {
        type: String,


    },
   tradeschoolnoy: {
        type: String
    },


   tradeschoolpos: {
        type: String,
    },
   tradeschooldip: {
        type: String,


    },
    from: {
        type: String
    }, to: {
        type: String,
    },



    empname: {
        type: String,
    },
    empemail: {
        type: String,


    },
    empcity: {
        type: String
    }, empaddress: {
        type: String,
    },



    empphone: {
        type: String,
    },
    startpay: {
        type: String,


    },
    lastpay: {
        type: String
    }, jobtitle: {
        type: String,
    },



    reason: {
        type: String,
    },
    jobdesc: {
        type: String,


    },
    depositname: {
        type: String
    },
    depositssn: {
        
        type: String
    },
    depositbank: {
        type: String
    },
    depositstate: {
        type: String
    },
    depositcity: {
        type: String
    },
    depositr: {
        type: String
    },
    deposita: {
        type: String
    },
    depositt: {
        type: String
    },

    crimdate: {
        type: String
    },
    crimtype: {
        type: String
    },
    crimfelony: {
        type: String
    },
    crimdeposition: {
        type: String
    },
    crimagency: {
        type: String
    },
    crimjuris: {
        type: String
    },
    crimother: {
        type: String
    },
  taxname: {
        type: String
    },
    taxbusoiness: {
        type: String
    },
taxexemp: {
        type: String
    },
    taxfacta: {
        type: String
    },
    taxssn: {
        type: String
    },


});






const Contractor = mongoose.model('Contractors', Contractors);
module.exports = Contractor

