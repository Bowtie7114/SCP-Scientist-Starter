/**
 * Fade in animation for index.html
 */

let loginLogo = document.getElementById('login-logo');
let loginForm = document.getElementById('login-form');
let disclaimer = document.getElementById('disclaimer');
let opacity = 0;
let username = '';

function fadeAnimation(element) {
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        element.style.opacity = opacity;
        opacity += 0.01;
    }, 10);
}

document.addEventListener("DOMContentLoaded", function() {
    fadeAnimation(loginLogo);
    fadeAnimation(loginForm);
});

document.addEventListener("click", function() {
    fadeAnimation(disclaimer);
})

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