// establishing areas of html to target with script
var timerArea = document.getElementById("timeLeft")
var startButton = document.querySelector('#start-btn');
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionArea = document.getElementById("question");
var choices = document.getElementById("choices");
var submitScore = document.getElementById("submitScore");
var highscoreArea = document.getElementById("highscore");
var opt1Area = document.getElementById("1");
var opt2Area = document.getElementById("2");
var opt3Area = document.getElementById("3");
var opt4Area = document.getElementById("4");

// writes timer function
function startCountdown() {
    var timeLeft = 75;
    setInterval(function () {
        if (timeLeft >= 0) {
            timeLeft--;
            timerArea.innerHTML = timeLeft;
        
        // calling highScore function when time runs out 
        } else if (timeLeft = 0) {
            highScore()
        }
    
    }, 1000);
}

// stores all questions in an array as objects
let questions = [
    {
        question: "Commonly used data types do NOT include:",
        opt1: "1. Strings",
        opt2: "2. Booleans",
        opt3: "3. Alerts",
        opt4: "4. Numbers",
    },

    {
        question: "The condition in an if/else statement is enclosed with _____.",
        opt1: "1. Quotes",
        opt2: "2. Curly Brackets",
        opt3: "3. Parenthesis",
        opt4: "4. Square Brackets",
    },

    {
        question: "Arrays in javascript can be used to store _____.",
        opt1: "1. numbers and strings",
        opt2: "2. other arrays",
        opt3: "3. booleans",
        opt4: "4. all of the above",
    },

    {
        question: "String values must be enclosed within _____ when being assinged to variables.",
        opt1: "1. commas",
        opt2: "2. curly brackets",
        opt3: "3. quotes",
        opt4: "4. parenthesis",
    },

    {
        question: "A very usedful tool used during development and debugging for printing content to the debugger is:",
        opt1: "1. Javascript",
        opt2: "2. terminal/bash",
        opt3: "3. for loops",
        opt4: "4.console.log",
    },
]

let answers = ["3","3","4","3","4"]

// sets questionIndex to 0 in local storage so that in the questionIndex++ fucntion, this can be incremented from the correct start point
var questionIndex = localStorage.setItem("questionIndex", 0);
var questionIndex = localStorage.getItem("questionIndex");

// function to call the questions stored in the array onto the html page
function renderQuestions() {

    // render questions on the page
    questionArea.innerHTML = questions[questionIndex].question;
    opt1Area.innerHTML = questions[questionIndex].opt1;
    opt2Area.innerHTML = questions[questionIndex].opt2;
    opt3Area.innerHTML = questions[questionIndex].opt3;
    opt4Area.innerHTML = questions[questionIndex].opt4;

    // incrementing question index counter
    choices.addEventListener("click", function (event) {
        var element = event.target;

        if (element.matches("button")) {
            questionIndex++
            localStorage.setItem("questionIndex",questionIndex)
            console.log("current question index is " + questionIndex)

            // renders question again based on different question index
            questionArea.innerHTML = questions[questionIndex].question;
            opt1Area.innerHTML = questions[questionIndex].opt1;
            opt2Area.innerHTML = questions[questionIndex].opt2;
            opt3Area.innerHTML = questions[questionIndex].opt3;
            opt4Area.innerHTML = questions[questionIndex].opt4;
        }
    })
}

// define score initial value in local storage
var score = localStorage.setItem("score", 0);
var score = localStorage.getItem("score");

// function to check user choice against correct answer stored in the the array "answers"
function checkAnswer(clicked_answer) {
    console.log(clicked_answer)

    // increment score with every correct answer
    if (clicked_answer === answers[questionIndex]){
        console.log("correct answer")
        score++
        localStorage.setItem("score",score);
        console.log("score is " + score)
    } else {
        console.log("incorrect answer")

    }

}

// fucntion to call a page which allows High score to be entered after questions have run out

choices.addEventListener("click", function (event) {
    var element = event.target;

    // calling high score fucntion when questions run out
    if (element.matches("button") && questionIndex >= questions.length) {
        highScore()
    }
})

// dislay high score input content
function highScore() {
    quiz.style.display = "none";
    submitScore.style.display = "block";
    console.log("Highscore")
}


startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    startCountdown()
    start.style.display = "none";
    renderQuestions();
    quiz.style.display = "block";
}