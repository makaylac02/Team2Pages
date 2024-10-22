let loginForm = document.getElementById('userForm');
const nodemailer = require('nodemailer');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("passw");
    
  
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      alert("Correct, a verification code has been sent to your email.");
      location=("otherpage.html");
      <script src="nodetest-gmail/sendemail.js"></script>
    } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }

 

  });