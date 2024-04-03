/**
 * Fade in animation for index.html
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
    fadeAnimation(loginLogo);
    fadeAnimation(loginForm);
});

document.addEventListener("click", function() {
    fadeAnimation(disclaimer);
})