// variables

var questionBank = [{
    number: 1,
    question: "Commonly used data types do not include ____ ?",
    answers: [
        "Alerts",
        "Booleans",
        "Strings",
        "Integers"
    ],
    correctAnswer: "Alerts"
}, {
    number: 2,
    question: "The condition in an if statement is inclose by ____ ?",
    answers: [
        "Curly Brackets",
        "Brackets",
        "Quotations",
        "Parentheses"
    ],
    correctAnswer: "Parentheses"
}, {
    number: 3,
    question: "Arrays in javascript are used to store _____ ?",
    answers: [
        "Booleans",
        "All of the above",
        "Strings",
        "Integers"
    ],
    correctAnswer: "All of the above"
}, {
    number: 4,
    question: "Strings are enclosed by ____, when being stored in a variable.",
    answers: [
        "Quotations",
        "Brackets",
        "Curly Brackets",
        "Parentheses"
    ],
    correctAnswer: "Quotations"
}, {
    number: 5,
    question: "Where is the code of a function enclosed by ____ ?",
    answers: [
        "Brackets",
        "Curly Brackets",
        "Quotations",
        "Parentheses"
    ],
    correctAnswer: "Curly Brackets"
}, {
    number: 6,
    question: "Where do we store data or values?",
    answers: [
        "For Loops",
        "If Statements",
        "Functions",
        "Variable"
    ],
    correctAnswer: "Variable"
}, {
    number: 7,
    question: "What is the counter in a for loop called",
    answers: [
        "Iterator",
        "Variable",
        "Function",
        "For Loops"
    ],
    correctAnswer: "Iterator"
}, {
    number: 8,
    question: "Which isn't one of the three tools used to create websites?",
    answers: [
        "Linux",
        "HTML",
        "CSS",
        "Javascript"
    ],
    correctAnswer: "Linux"
}, {
    number: 9,
    question: "Where would we store a list or several values in a variable",
    answers: [
        "Functions",
        "For Loops",
        "Array",
        "HTML"
    ],
    correctAnswer: "Array"
}, {
    number: 10,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
        "Console logging",
        "For Loops",
        "Javascript",
        "Conditionals"
    ],
    correctAnswer: "Console logging"
}];

var body = document.body;
var timerEl = document.getElementById("timer");
var questionNumber = document.getElementById("questionNum");
var theQuestion = document.getElementById("theQuestion");
var answers = document.createElement("ul");
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var answerBtn = document.createElement("div");

var score = 0;
var i = 0;
var countdown = 140;

// appending all our new elements

// why isn't this appending in the right spot
body.appendChild(answerBtn);
answerBtn.appendChild(answers);
answers.appendChild(answer1);
answers.appendChild(answer2);
answers.appendChild(answer3);
answers.appendChild(answer4);



// Creates a timer for the user to complete the questions
function timerCountdown() {
    
    var timer = setInterval(function () {
        timerEl.textContent = "Timer: " + countdown;
        countdown--;

        // remember to change this back to zero. after code it completed
        if (countdown <= 0) {
            timerEl.textContent = "";

            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

// Event listener to start the Quiz
document.getElementById("startBtn").addEventListener("click", startGame);

// Starting the game by hiding the start screen and pulling up game screen
function startGame() {
    document.getElementById('beginScreen').classList.add('hidden');
    document.getElementById('gameScreen').classList.remove('hidden');
    // remember to change this back to zero. after code it completed
    // when countdown reaches zero run game over function

    timerCountdown();
    generateQuestion();
}



// This function generates a question from the question bank. 
function generateQuestion() {
    var i = 0;
    
    if (i < questionBank.length) {

        questionNumber.textContent = "Question   " + questionBank[i].number;
        theQuestion.textContent = questionBank[i].question;
        answer1.textContent = questionBank[i].answers[0];
        answer1.setAttribute("value", questionBank[i].answers[0]);
        answer2.textContent = questionBank[i].answers[1];
        answer2.setAttribute("value", questionBank[i].answers[1]);
        answer3.textContent = questionBank[i].answers[2];
        answer3.setAttribute("value", questionBank[i].answers[2]);
        answer4.textContent = questionBank[i].answers[3];
        answer4.setAttribute("value", questionBank[i].answers[3])
        i++;
    } else {
        // another way to end the game.
        gameOver();
    }
    answer1.addEventListener("click", keepScore);
    answer2.addEventListener("click", keepScore);
    answer3.addEventListener("click", keepScore);
    answer4.addEventListener("click", keepScore);
}

// keeps score of the user by return the score after it has been altered, and will also alert user if the answer what correct or wrong. I then generates another question by calling generateQuestion

function keepScore() {
    var i = 0;
    var answer = questionBank[i].correctAnswer;
    
    if (this.value == answer) {
        score += 10;

    } else {
        
        countdown -= 10;
    }
    console.log(score)
    generateQuestion();
    
    i++;
}

// It creates the game over screen with a way to log in the users score to high scores.
function gameOver() {

    document.getElementById('gameScreen').classList.add('hidden');
    document.getElementById('gameOverScreen').classList.remove('hidden');

    var userName = document.getElementById("userName");
    
    localStorage.setItem("userName", userName);
    localStorage.setItem("Score", score);
}