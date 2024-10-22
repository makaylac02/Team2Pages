let loginForm = document.getElementById('userForm');

loginForm.addEventListener("submit", (e) => {
<<<<<<< HEAD
    e.preventDefault();
    let email = document.getElementById("email");
    let password = document.getElementById("passw");
    
  
    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
      
      alert("Correct, a verification code has been sent to your email.");
      
      
      location=("otherpage.html");
    } else {
      alert("Wrong");
      password.value = "";
      email.value = "";
    }
=======
	    e.preventDefault();
	    let email = document.getElementById("email");
	    let password = document.getElementById("passw");
	    
	  
	    if (email.value == "wrightteam2.137@gmail.com" && password.value == "team2" ) {
		          
		          alert("Correct, a verification code has been sent to your email.");
		          
		          
		          location=("otherpage.html");
		        } else {
				      alert("Wrong");
				      password.value = "";
				      email.value = "";
				    }
>>>>>>> 6254f17f698ea8bfe149c188ffa43823e7b2dbb5

	  });
