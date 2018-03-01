var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

//require('../node_modules/dotenv').config();
var USER_NAME = process.env.USER_NAME;
var PASS_WORD = process.env.PASS_WORD;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Harshit Kamboj' });
});

router.post('/send', function (req,res,next) {
   var transporter = nodemailer.createTransport({
       service: 'Gmail',
       host: 'smtp.gmail.com',
       port: 587,
       secure: false,
       auth: {
         user: USER_NAME,
         pass: PASS_WORD
       }
   });

   var mailOptions = {
     from: USER_NAME,
     to: 'harshitkamboj2110@gmail.com',
     subject: 'Contact from Portfolio',
     text: 'Got new request with the following details...Name: '+req.body.name+ ' Email: '+req.body.email+ ' Message: '+req.body.message,
     html: '<p>Got new request with the following details..</p><ul><li>Name: '+req.body.name+ '</li><li>Email: '+req.body.email+ '</li><li>Message: '+req.body.message+ '</li></ul>'
   };

   transporter.sendMail(mailOptions, function (error, info) {
       if(error)
       {
           console.log(error);
       } else {
           console.log('Message sent: ' + info.response);
       }
       res.redirect('/');
   });
});

module.exports = router;
