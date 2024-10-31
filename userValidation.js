let loginForm = document.getElementById('userForm');
let email = document.getElementById("email");
let password = document.getElementById("password");

// verification code not working for random nubmer 
var verificationCode = Math.floor(1000 + Math.random() * 9000);


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    
// not actually checking email ? 
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      let verificationData = {
        verificationCode: verificationCode
      }

      console.log(verificationData);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', '/');
      xhr.setRequestHeader('content-type', 'application/json');
      xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success') {
          alert('Email sent');
        } else {
          alert('something went wrong!')
        }
      }

      xhr.send(JSON.stringify(verificationCode));
      alert("Correct, a verification code has been sent to your email.");
      
      location=("otherpage.html");
   
    } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }

 

  });