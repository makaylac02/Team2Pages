let loginForm = document.getElementById('userForm');
var nodemailer = require('nodemailer');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("passw");
    
  
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      alert("Correct, a verification code has been sent to your email.");
      location=("otherpage.html");
        /*test*/

   var transporter = nodemailer.createTransport({
   service: 'gmail',
   auth: {
     user: "wrightteam2.137@gmail.com",
     pass: 'Team2!@Wright'
   }
 });
 
 var mailOptions = {
   from: "wrightteam2.137@gmail.com",
   to: 'makaylacarr74@gmail.com',
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

     /*test*/
    } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }

 

  });