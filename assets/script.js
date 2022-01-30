// Questions
$('#startbtn').click(function() {
    console.log('click');
});
const Questions = [{
    id: 0,
    q: "What is JavaScript?",
    a: [{ text: "Answer one", isCorrect: false },
        { text: "Answer two", isCorrect: true },
        { text: "answer three", isCorrect: false }, 
        { text: "answer four", isCorrect: false }
    ]
}
]
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