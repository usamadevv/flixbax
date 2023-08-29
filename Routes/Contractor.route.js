// Importing important packages
const express = require('express');
const app = express();
const Contractorroute = express.Router();
let Contractor = require('../Models/Contractor');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'itsoxama@gmail.com',
        pass: 'jskplmughhwbcxxi'
    }
});
Contractorroute.route('/add').post(function(req, res) {

    let Users = new Contractor(req.body);
    Users.save()
        .then(User => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
          console.log(err)
        });
});
Contractorroute.route('/find').post(function(req, res) {
    Contractor.findOne(
        { _id:req.body.id }, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});
Contractorroute.route('/getallusers').get(function(req, res) {

        Contractor.find({}, function(err, Contractorxs) {
         
            if (err) {
                res.send("sad")
             } else {
                if(!Contractorxs){

                    res.send(err)
                }
                else{
                    res.status(200).json({Contractorxs})
                }   
                
             }  
        });
     




    

    
});
Contractorroute.route('/auth').post(function(req, res) {
    Contractor.findOne(
        { email:req.body.email ,
        password:req.body.pass
        }, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'User':success});
                }
                
             }
         }
    
      
    )
    

    
});

Contractorroute.route('/delete').post( async function (req, res) {
    const { ids } = req.body;
  console.log(ids+'fg')
    try {
      // Delete documents using the array of IDs
      const result = await Contractor.deleteMany({ _id: { $in: ids } });
      console.log('deleted')
      res.status(200).json({ message: `${result.deletedCount} documents deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting documents' });
    }
  });

  



module.exports = Contractorroute;
