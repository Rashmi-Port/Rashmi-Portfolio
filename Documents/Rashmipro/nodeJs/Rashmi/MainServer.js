var express = require('express');
var path = require('path');
const bodyParser = require("body-parser");
var nodemailer = require('nodemailer');

var app=express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/',function(req, res){

	res.render('Rashmi')
});
app.post('/sendMail', function(req, res){
	var name = req.body.name;
	var Subject = req.body.Subject;
	var replyto = req.body.replyto;
	var message = req.body.message;

	var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	    user: 'askrashmi6@gmail.com',
	    pass: '11March2017!@#'
	  }
	});

	var mailOptions = {
	  from: 'askrashmi6@gmail.com',
	  to: 'askrashmi6@gmail.com',
	  subject: 'Sending Email using Node.js',
	  text: 'That was easy!'
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
});
app.listen(1000,function(){
	console.log("Server is running at 1000");
});