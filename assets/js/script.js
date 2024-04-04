/**
 * Stores the current page name for use in if statements that prevent functions firing on pages they should not
 */
var path = window.location.pathname;
var page = path.split("/").pop();


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
    if (page === 'index.html' || page === '') {
        fadeAnimation(loginLogo);
        fadeAnimation(loginForm);
    }
});

document.addEventListener("click", function() {
    if (page === 'index.html' || page === '') {
        fadeAnimation(disclaimer);
    }
})


/** 
 * Function disables the 'Login' button until the Username is entered and the passwords match
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
    if (page = 'index.html' || page === '') {
        passCheck();
    }
  })

  /**
   * The Username is stored within the function and should be written to user.txt
   */

function submit() {
    username = document.getElementById('name').value;
}

if (page === 'index.html' || page === '') {
    document.getElementById('login-button').addEventListener("click", submit);
};




/**
 *  Function links index.html to welcome.html via the sign in button once it is active.
 */

function redirect() {
    window.location.href = 'welcome.html';
}

/**
 * Username will be applied to the h1 element on welcome.html and the downloadable ID pass on congrats.html with this function
 */ 
if (page === 'welcome.html') {
    let welcomeTitle = document.getElementById('welcome-title');
    welcomeTitle.innerHTML = `Welcome, ${username}`;
}