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
    question: "The condition in an if statement is enclose by ____ ?",
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

var timerEl = document.getElementById("timer");
var questionNumber = document.getElementById("questionNum");
var theQuestion = document.getElementById("theQuestion");
var answers = document.createElement("ul");
// for (var j = 0; j<questionBank[i].answer.length; j++){
//     var answer[j] = document.createElement("button");
// }
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
var answerButtons = document.getElementById("answerBtns");
var score = 0;
var i = 0;
var countdown = 75;
var userDataList = JSON.parse(localStorage.getItem("userData")) || [];
var userList = [];


// appending all our new elements
if (answerButtons) {
    answerButtons.appendChild(answers);
    // for( var j = 0; j<questionBank[i].answers.length; j++){
    //      answers.appendChild(answer[i])
    // }
    answers.appendChild(answer1);
    answers.appendChild(answer2);
    answers.appendChild(answer3);
    answers.appendChild(answer4);
}
if (answers) {
    // setting some style to hide buttons
    // for(var j=0; j<questionBank[i].answers.length; j++){
    //  answer[j].setAttribute("style", "display:none")
    // }
    answer1.setAttribute("style", "display:none");
    answer2.setAttribute("style", "display:none");
    answer3.setAttribute("style", "display:none");
    answer4.setAttribute("style", "display:none");
}

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
    document.getElementById('quizScreen').classList.remove('hidden');
    // for(var j=0; j<questionBank[i].answers.length; j++){
    //  answer[j].removeAttribute("style", "display:none")
    // }
    answer1.removeAttribute("style", "display:none");
    answer2.removeAttribute("style", "display:none");
    answer3.removeAttribute("style", "display:none");
    answer4.removeAttribute("style", "display:none");
    // remember to change this back to zero. after code it completed
    // when countdown reaches zero run game over function

    timerCountdown();
    generateQuestion();
}



// This function generates a question from the question bank. 
function generateQuestion() {

    questionNumber.textContent = "Question   " + questionBank[i].number;
    theQuestion.textContent = questionBank[i].question;
    // dry code if i can get the rest of my application working.
    // if i can get this reference to each answer then the for loop works.
    // for(var j =0; j<questionBanki[i].answers.length; j++){
    // answer[j].textcontent = questionBank[i].answers[j];
    // answer[j].setAttribute("value", questionBank[i].answer[j]);
    // answer[j].addEventListener("click", keepScore);
    // }
    // The following sets the content to the array of answers
    // then sets the value of the button.
    // Sets the event listener for the click.
    answer1.textContent = questionBank[i].answers[0];
    answer1.setAttribute("value", questionBank[i].answers[0]);
    answer1.addEventListener("click", keepScore);

    answer2.textContent = questionBank[i].answers[1];
    answer2.setAttribute("value", questionBank[i].answers[1]);
    answer2.addEventListener("click", keepScore);

    answer3.textContent = questionBank[i].answers[2];
    answer3.setAttribute("value", questionBank[i].answers[2]);
    answer3.addEventListener("click", keepScore);

    answer4.textContent = questionBank[i].answers[3];
    answer4.setAttribute("value", questionBank[i].answers[3])
    answer4.addEventListener("click", keepScore);

}

// keeps score of the user by return the score after it has been altered, and will also alert user if the answer what correct or wrong. I then generates another question by calling generateQuestion

function keepScore() {
    // sets answer to correct answer.
    var answer = questionBank[i].correctAnswer;

    // checking if correct answer if selected and incrementing score
    // else decrement the count down. 
    if (this.value == answer) {
        score += 10;
    } else {
        countdown -= 10;
    }
    // once question run out run game over function
    console.log(score)
    if (i == questionBank.length - 1) {
        return gameOver();
    }
    // increment i and run generateQuestion function
    i++;
    generateQuestion();

}

// It creates the game over screen with a way to log in the users score to high scores.
function gameOver() {

    // setting some style to hide buttons
    // for(var j=0; j<questionBank[i].answers.length; j++){
    //  answer[j].setAttribute("style", "display:none")
    // }
    answer1.setAttribute("style", "display:none");
    answer2.setAttribute("style", "display:none");
    answer3.setAttribute("style", "display:none");
    answer4.setAttribute("style", "display:none");
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('quizOverScreen').classList.remove('hidden');

}

document.getElementById("quizOverScreen").addEventListener("submit", function (event) {
    event.preventDefault();

    var userName = document.getElementById("userName").value.trim();
    var userData = [{
        name: userName,
        score: score
    }]
    userList.push(userData);
    var userDataList = JSON.parse(localStorage.getItem("userData"));

    if (userDataList) {
        userData = userDataList;
        userList.push(userData);
    }

    // if value doesn't exist in local storage then need to stringify and set to local storage.
    localStorage.setItem("userData", JSON.stringify(userData))
    postScores();
})

function postScores() {

    var highScore = document.getElementById("highScores");
    var userList = document.createElement("ol");

    highScore.appendChild(userList);

    // loop through local storage to create each line.
    for (var i = 0; i < userList.length; i++) {

        var user = document.createElement("li");

        user.textContent = userList[i];

        userList.appendChild(user);

    }

    // check if there is data in local storage. if data is there then parse the data and build array.
    // loop through an array to set values to 

}

// David Wylie 7: 47 PM
// so in the
// var userDataList = JSON.parse(localStorage.getItem("userData"));
// i get what is in local storage right
//     : bust_in_silhouette:
//     taylorjayoungAPP 7: 47 PM
// Yep

// David Wylie 7: 48 PM
// how do i store this value
// var userData = [{
//         name: userName,
//         score: score
//     }]: bust_in_silhouette:
//     taylorjayoungAPP 7: 48 PM
// You have to stringify it
// 7: 48
// localstorage only stores string values
// 7: 49
// that’ s why you use JSON.parse when you retrieve a value with getItem

// David Wylie 7: 49 PM
// is there anyway i could just talk this out or go over this in video
// 7: 49
// chat
//     : bust_in_silhouette:
//     taylorjayoungAPP 7: 50 PM
// As LA’ s we are really only supposed to give you a path forward

// David Wylie 7: 51 PM
// I do understand that so
// if
// i push the current value right and then with the
// if statement i also push up the old data
// 7: 51
// then i could stringify the array ?
//     7 : 51
// and it would store both new and old data
// New
//     : bust_in_silhouette:
//     taylorjayoungAPP 7: 52 PM
// Yep so as long as you keep in mind that the array will be stored in a string
// 7: 52
// Then when you run JSON.parse(localstorage.getItem… you will have an actual array again 7: 52 Then you can push your current userData 7: 53 Then run JSON.stringify(userDataList) 7: 53 and then set it in localstorage