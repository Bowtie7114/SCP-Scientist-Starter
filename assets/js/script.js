/**
 * Stores the current page name for use in if statements that prevent functions firing on pages they should not
 * 
 */
var path = window.location.pathname;
var page = path.split("/").pop();


/**
 * Fade in animation for index.html. DOMContentLoaded listener also triggers on the breaches.html page if the User has three points saved, triggering correctCaptchs().
 * Initial code structure written by Diksha Patro, link in README.
 */

function fadeAnimation(element, opacity) {
    let fadeIn = setInterval(() => {
  
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        element.style.opacity = opacity;
        opacity += 0.01;
    }, 10);
};

document.addEventListener("DOMContentLoaded", function() {
    if (page === 'index.html' || page === '') {
        var loginLogo = document.getElementById('login-logo');
        var loginForm = document.getElementById('login-form');
        fadeAnimation(loginLogo, 0);
        fadeAnimation(loginForm, 0);
    }
    var points = parseInt(sessionStorage.getItem("points"));
    if (points === 3 && page == 'breaches.html'){
        correctCaptcha();
    }
});

var clicks = 0;
document.addEventListener("click", function() {
    if (page === 'index.html' || page === '') {
        if (clicks === 0) {        
            var disclaimer = document.getElementById('disclaimer');
            fadeAnimation(disclaimer, 0);
            clicks = 1;
        }   
    }
});

/**
 * Fade in animation for secret.html. Only the Berryman-Langford kill agent and message will appear. Once the User clicks the button, the remaining information
 * will fade in and the button will dissappear.
 */
if (page === 'secret.html') {
    document.getElementById("alive").addEventListener("click", function() {
            var killswitchText = document.getElementById('killswitch-text2');
            var scpInfoSecret = document.getElementById('SCP-info-secret');
            var declaration = document.getElementById('declaration');
            var alive = document.getElementById('alive');
            fadeAnimation(killswitchText, 0);
            fadeAnimation(scpInfoSecret, 0);
            fadeAnimation(declaration, 0);
            alive.style.display = 'none';
    });
};


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
  };

  document.addEventListener('input', function() {
    if (page = 'index.html' || page === '') {
        passCheck();
    }
  });

  /**
   * The Username is stored within the function and should be written to user.txt
   * Some code used from Stack Overflow user mustafa abdelbadea, link in README.
   */

function submit() {
     var username = document.getElementById('name').value;
     sessionStorage.setItem('name', username);
     sessionStorage.setItem('points', 0);
};

if (page === 'index.html' || page === '') {
    document.getElementById('login-button').addEventListener("click", submit);   
};

/**
 *  Function links index.html to welcome.html via the sign in button once it is active.
 *  Code used found in Geeks for Geeks article, linked in README.
 */

function redirect() {
    window.location.href = 'welcome.html';
};

/**
 * Username will be applied to the h1 element on welcome.html and the downloadable ID pass on congrats.html with this function
 * Some code used from Stack Overflow user mustafa abdelbadea, link in README.
 */ 

if (page === 'welcome.html') {
    let welcomeTitle = document.getElementById('welcome-title');
    let username = sessionStorage.getItem("name");
    welcomeTitle.innerHTML = `Welcome, ${username}`;
};

/**
 * Image of MalO on welcome.html should change, along with the caption, to an SCP Scientist and appropriate text,
 * upon clicking the image. Also contains the beginning of the code that counts the interactions on the navable pages.
 * Some code used came from an article on Basedash.com, link in README.
 */

function correctImage() {
    var image = document.getElementById('MalO');
    var caption = document.getElementById('MalO-text');
    image.src =  'assets/images/Scientist.webp';
    image.style.height = '476px';
    image.style.width = '150px';
    image.alt = 'An average, generic SCP Scientist that can be used as a placeholder or approximation of the User themselves.';
    caption.innerHTML = "Figure 1: A rough approximation of you, an SCP Scientist.";
    var points = parseInt(sessionStorage.getItem("points"));
    if (points === 0) {
        alert('1 out of 4 found.');
        sessionStorage.setItem('points', 1);      
    }; 
};

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
            sessionStorage.setItem('points', 2);     
        }
    } else if (answer === 'answer4') {
        alert("Issue not detected, closing help menu. Your next of kin shall be notified.")
    } else {
        alert("Issue not detected, closing help menu.");
    }
    document.getElementById("help-toggle").style.display = "none";
    document.getElementById("help-form").style.display = "none";
    document.getElementById("help-toggle-label").style.display = "none";
};

/**
 * One letter within the Meetings paragraph in responsibilities.html will change once the User clicks on it. It will also tick the stored number to three.
 */

function correctLetter() {
    var letter = document.getElementById('wrong-letter');
        letter.innerHTML = "e";
        letter.style.fontStyle = "initial";
    var points = parseInt(sessionStorage.getItem("points"));
    if (points === 2) {
        alert('3 out of 4 found.');
        sessionStorage.setItem('points', 3);     
    }    
};

/**
 * Captcha images should appear randomly out of 4 once function is called (event listener at top of scriptsheet).
 */

var captchaValue = '';

function correctCaptcha() {
    images = ['assets/images/captcha1.webp', 'assets/images/captcha2.webp', 'assets/images/captcha3.webp', 'assets/images/captcha4.webp'];
    alts = ['Foxtrot Oscar Romeo Kilo Lima Indigo Foxtrot Tango', 'Sierra Echo Charlie Uniform Romeo Echo', 'Papa Romeo Oscar Tango Echo Charlie Tango', 'Charlie Oscar November Tango Alpha Indigo November'];
    answers = ['forklift', 'secure', 'protect', 'contain'];
    var index = Math.floor(Math.random() * 4);
    var image = document.getElementById('captcha-image');
    
    document.getElementById("captcha-text").style.display = "initial";
    document.getElementById("captcha-submit").style.display = "initial";

    image.src = images[index];
    image.alt = alts[index];
    image.ariaLabel = alts[index];
    captchaValue = answers[index];
};

/**
 * Final counting upwards function, once the Captcha has been noted as correct. To prevent User from making innocent mistakes, entered text is set to lowercase in
 * the backend before being compared.
 */

function captchaCheck() {
    var attempt = document.getElementById('captcha-text').value.toLowerCase();
    if (captchaValue === attempt) {
        var points = parseInt(sessionStorage.getItem("points"));
        if (points === 3) {
            alert('4 out of 4 found. Please go to the next page.');
            sessionStorage.setItem('points', 4);
            var link = document.getElementById('breach-button');
            link.href = "secret.html";     
        }        
        document.getElementById("captcha-image").style.display = "none";
        document.getElementById("captcha-text").style.display = "none";
        document.getElementById("captcha-submit").style.display = "none";
    };
};

/**
 * This function resets the entire run - pressing F5 should refresh the session by loading index.html and
 * clearing any and all cached information - kept commented as full functionality was never achieved
 *
document.addEventListener('keydown', (e) => {
    if (e.key === 'F5') {
        sessionStorage.clear();        
    }
});

*/