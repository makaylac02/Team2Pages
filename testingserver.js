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



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/otherpage', (req, res) => {
  res.sendFile(path.join(__dirname, 'otherpage.html'));
});

app.get('/index2', (req, res) => {
  res.sendFile(path.join(__dirname, 'index2.html'));
});

// moving to otherpage
app.post('/submit', (req, res) => {
  const { email, password } = req.body;
  console.log('Email:', email);
  console.log('password:', password);
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
  res.redirect('/otherpage');
  next();
});

// moving to index2
app.post('/submit2', (req, res) => {
  //const { code } = req.body;
 // console.log('Code:', code);
  res.redirect('/index2');
});


app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});




