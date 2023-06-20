setTimeout(function(){
    document.body.className="";
},500);


var opacity = 0;

function fadeIn() {
    opacity += 0.1
    document.getElementById("div-buttons").style.opacity = opacity

    setTimeout(() => {
        if (opacity < 1) fadeIn();
    }, 20);
}

function blink() {
    document.querySelector('.text').innerHTML = str + "&nbsp&nbsp"

    setInterval(() => {
        document.querySelector('.text').innerHTML = str + "_"

        setTimeout(() => {
            document.querySelector('.text').innerHTML = str + "&nbsp&nbsp" 
        }, 750);
    }, 1250);
}


function randomChar() {
    return chars[Math.floor(Math.random() * chars.length)]
}


document.getElementById("menu-checkbox").checked = false;

document.addEventListener('click', (event) => {
    if (!event.composedPath().includes(document.querySelector('#hamburger-menu'))) {
        document.getElementById("menu-checkbox").checked = false;
    }
})


var frames   = 6;
var interval = 50;
var chars    = "!<>-_—=+*^?#0123456789abcdefghijklmnopqrstuvwxyz";
var text     = "rmnz";

var currentframe = 0
var i            = 0
var str          = ""

var frameinterval = setInterval(() => {
    document.querySelector('.text').innerHTML = str + randomChar();
    currentframe++

    if (currentframe >= frames) {
        str += text[i]
        currentframe = 0;
        i++;

        document.querySelector('.text').innerHTML = str
    }

    if (str.length == text.length) {
        clearInterval(frameinterval)

        blink(); 
        fadeIn(); 
    }
}, interval);