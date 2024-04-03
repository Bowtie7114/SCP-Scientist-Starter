let username = '';

/** 
 * Function completely hides the 'Login' button until the Username is entered and the passwords match
 */

function passCheck() {
    var password = document.getElementById('password');
    var vpassword = document.getElementById('password2');
  
    if (password.value === vpassword.value && password.value.length > 0) {
      document.getElementById("login-button").disabled = false;
      ;
    }
    else {
      document.getElementById("login-button").disabled = true;
    }
  }

  document.addEventListener('input', function() {
    passCheck();
  })

  /**
   * The Username is stored within the function and then added to other parts of the site
   */

function submit() {
    username = document.getElementById('name').value;
}

/**
 *  Function links index.html to welcome.html via the sign in button once it is active.
 */

function redirect() {
    window.location.href = 'welcome.html';
}

document.getElementById('login-button').addEventListener("click", submit);

/**
 * 
 *

document.onreadystatechange = () => {
    let title = document.getElementById('welcome-title');
    title.value = 'Welcome, ' + username + '!';
} 

*/