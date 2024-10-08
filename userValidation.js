let loginForm = document.getElementById('userForm');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("userName");
    let password = document.getElementById("passw");
    let email = document.getElementById("email");
  
    if (username.value == "team2" && password.value == "team2" && email.value == "wrightteam2.137@gmail.com") {
      
      alert("Correct, a verification code has been sent to your email.");
      location=("otherpage.html");
        /*test*/
   var nodemailer = require('nodemailer');

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
        
      
  
      username.value = "";
      password.value = "";
      email.value = "";
    }

 

  });