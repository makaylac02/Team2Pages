let loginForm = document.getElementById('userForm');
const nodemailer = require('nodemailer');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("passw");
    
  
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      alert("Correct, a verification code has been sent to your email.");
      location=("otherpage.html");
        /*test*/

   const transporter = nodemailer.createTransport({
   service: 'Gmail',
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     /*user: "wrightteam2.137@gmail.com",
     pass: 'Team2!@Wright'*/
     user: "makaylacarr74@gmail.com",
     pass: "tylc sdni utee vcyl",
   }
 });
 
 const mailOptions = {
   from: "makaylacarr74@gmail.com",
   to: 'makayla_carr9@yahoo.com',
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