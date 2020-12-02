// variables

var questionBank = [{
    number: 1,
    question: "Commonly used data types do not include ____ ?",
    answers: [
        [true, "Alerts"],
        [false, "Booleans"],
        [false, "Strings"],
        [false, "Integers"]
    ]
}, {
    number: 2,
    question: "The condition in an if statement is inclose by ____ ?",
    answers: [
        ["Curly Brackets"],
        ["Brackets"],
        ["Quotations"],
        [true, "Parentheses"]
    ],
}, {
    number: 3,
    question: "Arrays in javascript are used to store _____ ?",
    answers: [
        [false, "Booleans"],
        [true, "All of the above"],
        [false, "Strings"],
        [false, "Integers"]
    ],
}, {
    number: 4,
    question: "Strings are enclosed by ____, when being stored in a variable.",
    answers: [
        [true, "Quotations"],
        [false, "Brackets"],
        [false, "Curly Brackets"],
        [false, "Parentheses"]
    ],
}, {
    number: 5,
    question: "Where is the code of a function enclosed by ____ ?",
    answers: [
        [false, "Brackets"],
        [true, "Curly Brackets"],
        [false, "Quotations"],
        [false, "Parentheses"]
    ],
}, {
    number: 6,
    question: "Where do we store data or values?",
    answers: [
        [true, "Variable"],
        [false, "For Loops"],
        [false, "If Statements"],
        [false, "Functions"]
    ],
}, {
    number: 7,
    question: "What is the counter in a for loop called",
    answers: [
        [true, "Iterator"][false, "Variable"],
        [false, "Function"],
        [false, "For Loops"]
    ],
}, {
    number: 8,
    question: "Which isn't one of the three tools used to create websites?",
    answers: [
        [true, "Linux"],
        [false, "HTML"],
        [false, "CSS"],
        [false, "Javascript"]
    ]
}, {
    number: 9,
    question: "Where would we store a list or several values in a variable",
    answer: [
        [false, "Functions"],
        [false, "For Loops"],
        [true, "Array"],
        [false, "HTML"]
    ]
}, {
    number: 10,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer: [
        [true, "Console logging"],
        [false, "For Loops"],
        [false, "Javascript"],
        [false, "Conditionals"]
    ]
}, ];
var usedQuestions = [];
var usedAnswers = [];
var timerEl = document.getElementById("timer");
var questionNumber = document.getElementById("questionNum");
var theQuestion = document.getElementById("theQuestion");
var answer1 = document.getElementById("btn1");
var answer2 = document.getElementById("btn2");
var answer3 = document.getElementById("btn3");
var answer4 = document.getElementById("btn4")
var score = 0;


function timerCountdown() {
    var countdown = 240;
    var timer = setInterval(function () {
        timerEl.textContent = "Timer: " + countdown;
        countdown--;

        // remember to change this back to zero. after code it completed
        if (countdown === 230) {
            timerEl.textContent = "";

            clearInterval(timer)
        }
    }, 1000);
    // Create the countdown timer.
}


function getRandomIndex(used, arr) {

    var randomIndex = Math.floor(Math.random() * arr.length)

    used = arr.splice(arr[randomIndex], 1)
    var randomElement = arr[randomIndex];

    return randomElement;
}

document.getElementById("startBtn").addEventListener("click", startGame);

function startGame() {

    document.getElementById('game-dropdown').classList.remove('hidden');
    document.getElementById('jumbotron-dropdown').classList.add('hidden');

    timerCountdown();
    generateQuestion();

}

// This function generates a question from the question bank. 
function generateQuestion() {

    var i = 0;
    questionNumber.textContent = "Question   " + questionBank[i].number;
    theQuestion.textContent = questionBank[i].question;
    answer1.textContent = questionBank[i].answers[0][1];

    answer2.textContent = questionBank[i].answers[1][1];

    answer3.textContent = questionBank[i].answers[2][1];

    answer4.textContent = questionBank[i].answers[3][1];
    i++

}
document.getElementById("btn1").addEventListener(click, keepScore);
document.getElementById("btn2").addEventListener(click, keepScore);
document.getElementById("btn3").addEventListener(click, keepScore);
document.getElementById("btn4").addEventListener(click, keepScore);
// keeps score of the user by return the score after it has been altered, and will also alert user if the answer what correct or wrong. I then generates another question by calling generateQuestion
function keepScore(score) {
    // need to find a way to alert user if answer is correct or not.
    // if ( = true) {
    //     score += 10;
    // } else {
    //     score -= 10;
    //     countdown -= 10;
    // }

    generateQuestion();
    return score;
}

// It creates the game over screen with a way to log in the users score to high scores.
function gameOver() {

     document.getElementById('game-dropdown').classList.add('hidden')

}