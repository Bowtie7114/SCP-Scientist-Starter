/**
 * Stores the current page name for use in if statements that prevent functions firing on pages they should not
 * 
 */
var path = window.location.pathname;
var page = path.split("/").pop();


/**
 * Fade in animation for index.html
 * Some code written by Diksha Patro, link in README.
 */

let loginLogo = document.getElementById('login-logo');
let loginForm = document.getElementById('login-form');
let disclaimer = document.getElementById('disclaimer');
let opacity = 0;

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
   * Some code used from Stack Overflow user mustafa abdelbadea, link in README.
   */

function submit() {
     var username = document.getElementById('name').value;
     sessionStorage.setItem('name', username);
     sessionStorage.setItem('points', 0);
}

if (page === 'index.html' || page === '') {
    document.getElementById('login-button').addEventListener("click", submit);
};

/**
 *  Function links index.html to welcome.html via the sign in button once it is active.
 *  Code used found in Geeks for Geeks article, linked in README.
 */

function redirect() {
    window.location.href = 'welcome.html';
}

/**
 * Username will be applied to the h1 element on welcome.html and the downloadable ID pass on congrats.html with this function
 * Some code used from Stack Overflow user mustafa abdelbadea, link in README.
 */ 

if (page === 'welcome.html') {
    let welcomeTitle = document.getElementById('welcome-title');
    let username = sessionStorage.getItem("name");
    welcomeTitle.innerHTML = `Welcome, ${username}`;
}

/**
 * Image of MalO on welcome.html should change, along with the caption, to an SCP Scientist and appropriate text,
 * upon clicking the image. Also contains the beginning of the code that counts the interactions on the navable pages.
 * Some code used came from an article on Basedash.com, link in README.
 */

function correctImage() {
    var image = document.getElementById('MalO');
    var caption = document.getElementById('MalO-text');
    image.src =  'assets/images/Scientist.webp';
    image.alt = 'An average, generic SCP Scientist that can be used as a placeholder or approximation of the User themselves.';
    caption.innerHTML = "Figure 1: A rough approximation of you, an SCP Scientist.";
    var points = parseInt(sessionStorage.getItem("points"));
    if (points === 0) {
        alert('1 out of 4 found.');
        sessionStorage.setItem('points', 1)      
    } 
}

/**
 * Description of SCP-106 will be changed once the correct description on the help menu is selected, and the couunter will continue. If an incorrect one is selected,
 * the description does not change, User is alerted, and they are locked out from the remaining interactions.
 */

function correctDescription(answer) {
    if (answer === 'answer2') {
        var caption = document.getElementById('106-text');
        caption.innerHTML = "Image of SCP-106, mid-emerging from his pocket dimension<sup>[4]</sup>"; 
        var points = parseInt(sessionStorage.getItem("points"));
        if (points === 1) {
            alert('2 out of 4 found.');
            sessionStorage.setItem('points', 2)     
        }
    } else {
        alert("Issue not detected, closing help menu.")
    }
    document.getElementById("help-toggle").style.display = "none";
    document.getElementById("help-form").style.display = "none";
    document.getElementById("help-toggle-label").style.display = "none";
}

/**
 * This function resets the entire run - pressing F5 should refresh the session by loading index.html and
 * clearing any and all cached information
 * 
 * function startOver() {
 *  sessionStorage.clear();
 * }
 * 
 * 
 */