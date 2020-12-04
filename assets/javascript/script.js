// variables

var questionBank = [{
    number: 1,
    question: "Commonly used data types do not include ____ ?",
    answerBank: [
        "Alerts",
        "Booleans",
        "Strings",
        "Integers"
    ],
    correctAnswer: "Alerts"
}, {
    number: 2,
    question: "The condition in an if statement is enclose by ____ ?",
    answerBank: [
        "Curly Brackets",
        "Brackets",
        "Quotations",
        "Parentheses"
    ],
    correctAnswer: "Parentheses"
}, {
    number: 3,
    question: "Arrays in javascript are used to store _____ ?",
    answerBank: [
        "Booleans",
        "All of the above",
        "Strings",
        "Integers"
    ],
    correctAnswer: "All of the above"
}, {
    number: 4,
    question: "Strings are enclosed by ____, when being stored in a variable.",
    answerBank: [
        "Quotations",
        "Brackets",
        "Curly Brackets",
        "Parentheses"
    ],
    correctAnswer: "Quotations"
}, {
    number: 5,
    question: "Where is the code of a function enclosed by ____ ?",
    answerBank: [
        "Brackets",
        "Curly Brackets",
        "Quotations",
        "Parentheses"
    ],
    correctAnswer: "Curly Brackets"
}, {
    number: 6,
    question: "Where do we store data or values?",
    answerBank: [
        "For Loops",
        "If Statements",
        "Functions",
        "Variable"
    ],
    correctAnswer: "Variable"
}, {
    number: 7,
    question: "What is the counter in a for loop called",
    answerBank: [
        "Iterator",
        "Variable",
        "Function",
        "For Loops"
    ],
    correctAnswer: "Iterator"
}, {
    number: 8,
    question: "Which isn't one of the three tools used to create websites?",
    answerBank: [
        "Linux",
        "HTML",
        "CSS",
        "Javascript"
    ],
    correctAnswer: "Linux"
}, {
    number: 9,
    question: "Where would we store a list or several values in a variable",
    answerBank: [
        "Functions",
        "For Loops",
        "Array",
        "HTML"
    ],
    correctAnswer: "Array"
}, {
    number: 10,
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerBank: [
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
// for (var j = 0; j < questionBank[i].answerBank.length; j++) {
//     var answer = answer[j];
//     answer[j] = document.createElement("button");
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
var userArray = [];


// appending all our new elements
if (answerButtons) {
    answerButtons.appendChild(answers);
    // for (var j = 0; j < questionBank[i].answerBank.length; j++) {
    //     var answer = answer[j];
    //     answers.appendChild(answer[j])
    // }
    answers.appendChild(answer1);
    answers.appendChild(answer2);
    answers.appendChild(answer3);
    answers.appendChild(answer4);
}
if (answers) {
    // setting some style to hide buttons
    // for (var j = 0; j < questionBank[i].answerBank.length; j++) {
    //     var answer = answer[j];
    //     answer[j].setAttribute("style", "display:none");
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
    // hiding and showing different divs
    document.getElementById('beginScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    // for (var j = 0; j < questionBank[i].answerBank.length; j++) {
    //     var answer = answer[j];
    //     answer.removeAttribute("style", "display:none");
    // }
    answer1.removeAttribute("style", "display:none");
    answer2.removeAttribute("style", "display:none");
    answer3.removeAttribute("style", "display:none");
    answer4.removeAttribute("style", "display:none");
   
    timerCountdown();
    generateQuestion();
}



// This function generates a question from the question bank. 
function generateQuestion() {

    questionNumber.textContent = "Question   " + questionBank[i].number;
    theQuestion.textContent = questionBank[i].question;
    // dry code if i can get the rest of my application working.
    // if i can get this reference to each answer then the for loop works.
    // for (var j = 0; j < questionBank[i].answerBank.length; j++) {
    //     var answer = answer[j];
    //     answer[j].textContent = questionBank[i].answer[j];
    //     answer[j].setAttribute("value", questionBank[i].answer[j]);
    //     answer[j].addEventListener("click", keepScore);
    // }}
    // The following sets the content to the array of answers
    // then sets the value of the button.
    // Sets the event listener for the click.
        answer1.textContent = questionBank[i].answerBank[0];
        answer1.setAttribute("value", questionBank[i].answerBank[0]);
        answer1.addEventListener("click", keepScore);

        answer2.textContent = questionBank[i].answerBank[1];
        answer2.setAttribute("value", questionBank[i].answerBank[1]);
        answer2.addEventListener("click", keepScore);

        answer3.textContent = questionBank[i].answerBank[2];
        answer3.setAttribute("value", questionBank[i].answerBank[2]);
        answer3.addEventListener("click", keepScore);

        answer4.textContent = questionBank[i].answerBank[3];
        answer4.setAttribute("value", questionBank[i].answerBank[3])
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
            countdown = 0;
            return gameOver();
        }
        // increment i and run generateQuestion function
        i++;
        generateQuestion();

    }

    // It creates the game over screen with a way to log in the users score to high scores.
    function gameOver() {

        // setting some style to hide buttons
        // for (var j = 0; j < questionBank[i].answerBank.length; j++) {
        //     answer = answer[j]
        //     answer.setAttribute("style", "display:none");
        // };
        answer1.setAttribute("style", "display:none");
        answer2.setAttribute("style", "display:none");
        answer3.setAttribute("style", "display:none");
        answer4.setAttribute("style", "display:none");

        document.getElementById('quizScreen').classList.add('hidden');
        document.getElementById('quizOverScreen').classList.remove('hidden');

    }

    document.getElementById("quizOverScreen").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("quizOverScreen").classList.add("hidden");
        document.getElementById('ScoreScreen').classList.remove("hidden");
        // getting the value of input, add to object, the push to user array.
        var userName = document.getElementById("userName").value.trim();
        var userData = [{
            name: userName,
            score: score
        }]
        userArray.push(...userData);
        // to check if anything is local storage and then push up to user array.
        var userDataList = JSON.parse(localStorage.getItem("userData"));
      
        if (userDataList) {
            userData = userDataList;
            userArray.push(...userData);
        }
        
        // Stringify array and setting to local storage.
        localStorage.setItem("userData", JSON.stringify(userArray))
        postScores();
    })

    function postScores() {
        // creating variables to the dom.
        var highScore = document.getElementById("Scores");
        var userList = document.createElement("ol");

        // appending elements.
        highScore.appendChild(userList);
        
        // loop through local storage to create each li and then adding content and lastly appending to dom.
        for (var i = 0; i < userArray.length; i++) {

            var user = document.createElement("li");

            user.textContent = "User Name: " + userArray[i].name + " " + "Score: " + userArray[i].score;

            userList.appendChild(user);
        }

    }


