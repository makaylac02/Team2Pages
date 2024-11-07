/*
TODO: The ability to redirect to other pages needs to be coded through routing. Currently will not move to the next page. 
Emails send with a hardcoded code -> Need to find out how to do a random number through nodejs.
Just not reading userValidation.js
*/
const express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");
const app = express();

// middle
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 


// gets original homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
// gets verification page for code verification
app.get('/otherpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'otherpage.html'));
});

// gets and sends to second homepage that shows full verification
app.get('/index2', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});



// nodemailer code, obtains form from /submit in index.html
app.post('/submit', (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('password:', password);
// rough if statement for email and password verification - cannot get uservalidation to work, needs proper username/password storage.
  if(email =="wrightteam2.137@gmail.com" && password =="team2") {
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
    text: " Code: 12345" //req.body.verificationCode -> needs randomized
};

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
         console.log(error);
          } else {
              console.log('Email sent: ' + info.response);
            }
          });
// redirects to verification when email successfully sent
  res.redirect('/otherpage');

} else {

  console.log(error);
}
  
});

// moving to index2 reading from /submit2 form
app.post('/submit2', (req, res) => {
  const { code } = req.body;
  console.log('Verification Code: ', code);
if (code == "12345") {
  res.redirect('/index2');
} else {
  res.redirect('/');
  console.log(error);
}
});


app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});




