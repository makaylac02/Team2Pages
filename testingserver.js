/*
TODO: The ability to redirect to other pages needs to be coded through routing. Currently will not move to the next page. 
Emails send with a hardcoded code -> Need to find out how to do a random number through nodejs.
*/
const express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");


// routing
//const userValidation = require('./userValidation');

const app = express();

app.use(express.static('public'));

app.use(express.json())

// routes
//app.use('/userValidation', userValidation)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.post('/', (req, res) =>{
  console.log(req.body)

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
    text: " Code: 12345" //req.body.verificationCode
};

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
         console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
            }
});

})


app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});

