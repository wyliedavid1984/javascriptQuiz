// variables

var questionBank = [
    {
        number: 1,
        question: "Commonly used data types do not include ____ ?",
        answers: [[ true, "Alerts"], [false, "Booleans"], [false, "Strings"], [false, "Integers"]]
    }, {
        number: 2,
        question: "The condition in an if statement is inclose by ____ ?",
        answers: [[true, "Parentheses"], ["Curly Brackets"], ["Brackets"], ["Quotations"]],
    }, {
        number: 3,
        question: "Arrays in javascript are used to store _____ ?",
        answers:[ [true, "All of the above"], [false, "Booleans"], [false, "Strings"], [false, "Integers"]],
    }, {
        number: 4,
        question: "Strings are enclosed by ____, when being stored in a variable.",
        answers: [[true, "Quotations"], [false, "Brackets"], [false, "Curly Brackets"], [false, "Parentheses"]],
    }, {
        number: 5,
        question: "Where is the code of a function enclosed by ____ ?",
        answers: [[true, "Curly Brackets"],[false, "Brackets"], [false, "Quotations"], [false, "Parentheses"]],
    }, {
        number: 6,
        question: "Where do we store data or values?",
        answers: "Variable",
        falseAnswers: ["For Loops", "If Statements", "Functions"],
    }, {
        number: 7,
        question: "What is the counter in a for loop called",
        answers: "Iterator",
        falseAnswers: ["Variable", "Function", "For Loops"],
    }, {
        number: 8,
        question: "Which isn't one of the three tools used to create websites?",
        answers: [[true, "Linux"], [false, "HTML"], [false, "CSS"], [false, "Javascript"]]
    }, {
        number: 9,
        question: "Where would we store a list or several values in a variable",
        answer: [[true, "Array"], [false, "Functions"], [false, "For Loops"], [false, "HTML"]]
    }, {
        number: 10,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: [[true, "Console logging"], [false, "For Loops"], [false, "Javascript"], [false, "Conditionals"]]
    },
];
var usedQuestions = [];
var usedAnswers = [];
var timerEl = document.getElementById("timer");
var questionNumber = document.getElementById("questionNum");
var theQuestion = document.getElementById("theQuestion");
var answer1 = document.getElementById("li1");
var answer2 = document.getElementById("li2");
var answer3 = document.getElementById("li3");
var answer4 = document.getElementById("li4")
var score = 0;


function timerCountdown() {
var countdown = 240;
var timer = setInterval(function () {
    timerEl.textContent = "Timer: " + countdown;
    countdown--;
    console.log(countdown);
    // remember to change this back to zero. after code it completed
    if (countdown === 235) {
        timerEl.textContent = "";
        
        clearInterval(timer)
    }
}, 1000);
// Create the countdown timer.
}


function getRandomIndex(used, arr){

    var randomIndex = Math.floor(Math.random() * arr.length)
    used = arr.splice(arr[randomIndex], 1)
    var randomElement = [arr[randomIndex], used];
    
    return randomElement;
}
;
console.log(getRandomIndex(usedQuestions, questionBank));
console.log(questionBank);
console.log(usedQuestions)
function generateQuestion(){
    
    var i = getRandomIndex(usedQuestions, questionBank);
    questionNumber.textContent = "Question" + questionBank[i].number;
    theQuestion.textContent = questionBank[i].question;
    answer1.textContent = questionBank[i].answers[0][1];
    answer2.textContent = questionBank[i].answers[1][1];
    answer3.textContent = questionBank[i].answers[2][1];
    answer4.textContent = questionBank[i].answers[3][1];
   i++
}


function keepScore(score){


}