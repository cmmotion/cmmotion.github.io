// As I created the animations from the cat in photoshop, I decided the best approach
// was to attach a function to the "interact" buttons that showed the 1st or 2nd image based 'onclick'
// I did this by editing the 2nd images to display: none in CSS and creating an 'else' onclick function
// that displayed the elements that were listed as 'none' to 'block' in response 

// coffee animation
function myFunction() {
    var x = document.getElementById("coffee-after");
    var y = document.getElementById("coffee-before");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
}

// i-pad animation that was originally just a pen (kept name the same for times sake, and 
// changed the photo content)
function myFunction1() {
    var x = document.getElementById("pen-after");
    var y = document.getElementById("pen-before");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
}

// the pen-cup animation
function myFunction2() {
    var x = document.getElementById("pen-cup-after");
    var y = document.getElementById("pen-cup-before");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
}

// the laptop animation
function myFunction3() {
    var x = document.getElementById("laptop-after");
    var y = document.getElementById("laptop-before");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.display = "block";
        }
}

// the cat meow button 
// rather than create a stock standard play/pause component, I thought it could be
// more dynamic to create two separate buttons; one to 'speak', and one to 'shh'
// this function allows the button onclick to play the listed audio, but also plays
// in a loop - hence the second "shh" button with the audio.pause function. 

var audio = new Audio("snd/cat-purr.mp3");

audio.oncanplay = function(){
    audio.play();
}

audio.loop = false;

audio.onended = function(){
    audio.play();
}
