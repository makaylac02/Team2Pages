// potentially useless file
let loginForm = document.getElementById('userForm');
let email = document.getElementById("email");
let password = document.getElementById("password");

// verification code not working for random nubmer 
// var verificationCode = Math.floor(1000 + Math.random() * 9000);


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    

    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      let verificationData = {
        verificationCode: verificationCode
      }
// go through this code for random number - figure out why script not working for node
      console.log(verificationData);
      
          alert('Email sent');
        } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }

 

  });