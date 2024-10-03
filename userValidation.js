let loginForm = document.getElementById('userForm');

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let username = document.getElementById("userName");
    let password = document.getElementById("passw");
  
    if (username.value == "team2" && password.value == "team2") {
      
      alert("Correct");
    } else {
      alert("Wrong");
        
      
  
      username.value = "";
      password.value = "";
    }
  });