/*
TODO:not hardcoding usernames and passwords
SERVING IMAGES
OPENCV install
Installation list
Script for auto putting images into table ?
*/
const express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");
const app = express();

// middle
app.use(express.static('public'));
//app.use('/images', express.static('/ImageCollection'));
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

// page for image table
app.get('/imageCollection', function(req, res){
  res.sendFile(path.join(__dirname, 'imageCollection.html'));
});

app.use('/ImageCollection', express.static(path.join(__dirname, 'ImageCollection')));

// 4 digit random number for verification code
var verificationCode = Math.floor(1000 + Math.random() * 9000);


// nodemailer code, obtains form from /submit in index.html
app.post('/submit', (req, res) => {
  console.log('test');
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
    text: " Code: " + verificationCode 
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
  // if login doesn't match, post error ->> how to reset login info instead of moving to error page? 
  console.log(error);
  
}
  
});

// moving to index2 reading from /submit2 form, read code entered
app.post('/submit2', (req, res) => {
  const { code } = req.body;
  console.log('Verification Code: ', code);
// verify if code works, if yes, moves to verified homepage, if not, redirects back to unverified login page and posts error.
if (code == verificationCode) {
  res.redirect('/index2');
} else {
  res.redirect('/');
  console.log(error);
}
});

app.listen(3030, () => {
  console.log('Server is listening on port 8080');
});




