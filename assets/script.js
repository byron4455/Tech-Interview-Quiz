const quizContainer = document.getElementById('question');
const buttonStart = document.getElementById('btnStart');
const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');

var timeleft = 60;
var quizTimer = setInterval(function() {
    if(timeleft <= 0){
        clearInterval(quizTimer);
        document.getElementById('timer').innerHTML = "All Done!";
    } else {
        document.getElementById('timer').innerHTML = timeleft + " seconds remaining.";
    }
    timeleft -= 1;
}, 1000);