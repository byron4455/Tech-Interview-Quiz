// Questions
var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 60;

     function myClock() {
       document.getElementById("timer").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("Reached zero");
       }
     }
   }

const startButton = document.getElementById('startbtn');
const questionContainer = document.getElementById('question-container')

startButton.addEventListener('click', startQuiz)
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answers')
let shuffledQuestions, currentQuestionIndex


function startQuiz() {
    startButton.setAttribute("class", "hide");
    questionContainer.classList.remove('hide');
    shuffledQuestions = questions.sort()
    currentQuestionIndex = 0
    answerButtonsEl.classList.remove('hide');
        nextQuestion();
   }

 
   function nextQuestion() {
       resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
   }

   function showQuestion(question) {
       questionEl.innerText = question.question;
       question.answers.forEach(answer => {
           const button = document.createElement('button');
           button.innerText = answer.text;
           button.classList.add('btn');
           answerButtonsEl.appendChild(button);
           button.addEventListener('click', selectAnswer);
        });
        
    }
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullName");
    FN.setAttribute("placeholder", "Full Name");
    
    function selectAnswer(e) {
        const selectedButton = e.target
        const correct = selectedButton.dataset.correct
        setStatusClass(document.body, correct)
        Array.from(answerButtonsEl.children).forEach(button => {
            setStatusClass(button, button.dataset.correct)
        })
        if(shuffledQuestions.length > currentQuestionIndex + 1) {
            console.log('more')
        } else {
            // questionContainer.classList.remove('hide')
            questionEl.textContent = "You have scored ________. "
        }
    }
    
    function resetState() {
        answerButtonsEl.classList.add('hide')
        while (answerButtonsEl.firstChild) {
            answerButtonsEl.removeChild
            (answerButtonsEl.firstChild)
        }
    }
    function setStatusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
answerButtonsEl.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
    const questions = [
        {
            question: 'What is JavaScript?',
            answers: [
                { text: 'A programming language', correct: true },
                { text: 'Coffee', correct: false },
                { text: 'A script about coffee', correct: false },
                { text: 'I do not know', correct: false }
            ]
        
        }
        ,{
            question: 'What does CSS stand for?',
            answers: [
                { text: 'Cascading Style Sheets', correct: true },
                { text: 'Cool Sick Super', correct: false },
                { text: 'Cant Stop Sobbing', correct: false },
                { text: 'The noise a snake makes', correct: false }
            ]
        }
        ,{
            question: 'How do you make a button change colors when incorrect?',
            answers: [
                { text: 'Still trying to figure it out', correct: true },
                { text: 'I have no idea', correct: false },
                { text: 'Will report back', correct: false },
                { text: 'Thought I h', correct: false }
            ]
        }
            ,{
                question: 'What is Python?',
                answers: [
                    { text: 'Another programming language', correct: true },
                    { text: 'A big snake', correct: false },
                    { text: 'sneaky snake', correct: false },
                    { text: 'What', correct: false }
                ]
            }
                ,{
                    question: 'What is Linux?',
                    answers: [
                        { text: 'An operating system', correct: true },
                        { text: 'A book series', correct: false },
                        { text: 'Some guy', correct: false },
                        { text: 'What', correct: false }
                    ]
                }
                    ,{
                        question: 'What does HTML stand for?',
                        answers: [
                            { text: 'HyperText Markup Language', correct: true },
                            { text: 'How To Make Logic', correct: false },
                            { text: 'Hover Tomorrow Monday Lame', correct: false },
                            { text: 'What', correct: false }
                        ]
            }
        
    ]
    