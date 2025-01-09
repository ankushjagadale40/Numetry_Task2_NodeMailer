require("dotenv").config(); 
const nodejsmailer = require('nodemailer');

var transporter = nodejsmailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
});

var mailOptions ={
    from:'jagadaleankush10@gmail.com',
    to:'jagadaleankush140@gmail.com',
    subject:"Sending Email to Ankush",
    text:"Welcome to NodeMailer, It's Working",
}  

transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }else{
        console.log('Email Send ' + info.response);
    }
});