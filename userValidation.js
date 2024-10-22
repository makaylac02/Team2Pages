let loginForm = document.getElementById('userForm');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("passw");
    
  
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      alert("Correct, a verification code has been sent to your email.");
      <script src="nodetest-gmail/sendemail.js"></script>
      location=("otherpage.html");
    } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }

  });