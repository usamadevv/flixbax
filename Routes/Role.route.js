// Importing important packages
const express = require('express');
const app = express();
const RoleRoute = express.Router();
let Role = require('../Models/Role');
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'itsoxama@gmail.com',
        pass: 'jskplmughhwbcxxi'
    }
});
RoleRoute.route('/add').post(function(req, res) {

    let Users = new Role(req.body);
    Users.save()
        .then(User => {
            res.status(200).json({'User': 'User added successfully'});
        })
        .catch(err => {
          console.log(err)
        });
});
RoleRoute.route('/find').post(function(req, res) {
    Role.findOne(
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
RoleRoute.route('/getallusers').get(function(req, res) {

        Role.find({}, function(err, rolexs) {
         
            if (err) {
                res.send("sad")
             } else {
                if(!rolexs){

                    res.send(err)
                }
                else{
                    res.status(200).json({rolexs})
                }   
                
             }  
        });
     




    

    
});
RoleRoute.route('/auth').post(function(req, res) {
    Role.findOne(
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

RoleRoute.route('/delete').post( async function (req, res) {
    const { ids } = req.body;
  console.log(ids+'fg')
    try {
      // Delete documents using the array of IDs
      const result = await Role.deleteMany({ _id: { $in: ids } });
      console.log('deleted')
      res.status(200).json({ message: `${result.deletedCount} documents deleted` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error deleting documents' });
    }
  });

  RoleRoute.route('/updatedata').post(async function(req, res)  {
    const  users  = req.body;
  
    console.log(users)

    try {
      for (const user of users) {
        await Role.findByIdAndUpdate(user._id, { 
            view: user.view,
            edit: user.edit,
            add: user.add,
            delete: user.delete,
            detail: user.detail,
            role: user.role,
            status: user.status,
        
        });
      }
      res.json({ message: 'Users updated successfully' });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Error updating users' });
    }
  });

  



module.exports = RoleRoute;
