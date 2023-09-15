// Importing important packages
const express = require('express');
const app = express();
const Projectroute = express.Router();
let Project = require('../Models/Project');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'itsoxama@gmail.com',
        pass: 'jskplmughhwbcxxi'
    }
});
Projectroute.route('/add').post(function(req, res) {

    let Projects = new Project(req.body);
    Projects.save()
        .then(Project => {
            res.status(200).json({'Project': 'Project added successfully'});
        })
        .catch(err => {
          console.log(err)
        });
});
Projectroute.route('/find').post(function(req, res) {
    Project.findOne(
        { _id:req.body.id }, 
    
       function (error, success) {
             if (error) {
                res.send('error')
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Project':success});
                }
                
             }
         }
    
      
    )
    

    
});
Projectroute.route('/getallusers').get(function(req, res) {

        Project.find({}, function(err, Projects) {
         
            if (err) {
                res.send("sad")
             } else {
                if(!Projects){

                    res.send(err)
                }
                else{
                    res.status(200).json({Projects})
                }   
                
             }  
        });
     




    

    
});
Projectroute.route('/auth').post(function(req, res) {
    Project.findOne(
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

                    res.status(200).json({'Project':success});
                }
                
             }
         }
    
      
    )
    

    
});

Projectroute.route('/delete').post( async function (req, res) {
    const { ids } = req.body;
  console.log(ids)
    try {
      // Delete documents using the array of IDs
      const result = await Project.deleteMany({ _id: { $in: ids } });
      console.log('deleted')
      res.status(200).json({ message: `${result.deletedCount} documents deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting documents' });
    }
  });

  

  Projectroute.route('/updatetask').post(function(req, res) {
    console.log(req.body)
    Project.findByIdAndUpdate(
        { _id:req.body.id }, 
        { $push: { Task: req.body.task } }, // Use $push to add a new value to the array
  
    
       function (error, success) {
             if (error) {
                res.send('error')
                console.log(error)
             } else {
                if(!success){

                    res.send('invalid')
                }
                else{

                    res.status(200).json({'Project':success});
                }
                
             }
         }
    
      
    )
    

    
});
  



module.exports = Projectroute;
