// this is no longer used, combined with test server. Keeping for now for note purposes. 
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	  service: "Gmail",
	  host: "smtp.gmail.com",
	  port: 465,
	  secure: true,
	  auth: {
		      user: "makaylacarr74@gmail.com",
		      pass: "tylc sdni utee vcyl",
		    },
});
const mailOptions = {
	   from: "makaylacarr74@gmail.com",
	   to: 'makayla_carr9@yahoo.com',
	   subject: 'Verification Code',
	   text: 'Code: ' 
	 };
 
 transporter.sendMail(mailOptions, function(error, info){
	    if (error) {
		         console.log(error);
		       } else {
			            console.log('Email sent: ' + info.response);
			          }
	  });

