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

function startCountdown() {
    var timeLeft = 75;
    setInterval(function() {
        timeLeft--;
        timerArea.innerHTML = timeLeft;

    },1000);
}

// stores all questions in an array as objects
let questions = [
    {question : "Commonly used data types do NOT include:",
    opt1: "1. Strings",
    opt2: "2. Booleans",
    opt3: "3. Alerts",
    opt4: "4. Numbers",
    correct: "3",
    },
    
    {question : "The condition in an if/else statement is enclosed with _____.",
    opt1: "1. Quotes",
    opt2: "2. Curly Brackets",
    opt3: "3. Parenthesis",
    opt4: "4. Square Brackets",
    correct: "3",
    },

    {question: "Arrays in javascript can be used to store _____.",
    opt1: "1. numbers and strings",
    opt2: "2. other arrays",
    opt3: "3. booleans",
    opt4: "4. all of the above",
    correct: "4",
    },

    {question: "String values must be enclosed within _____ when being assinged to variables.",
    opt1: "1. commas",
    opt2: "2. curly brackets",
    opt3: "3. quotes",
    opt4: "4. parenthesis",
    correct: "3",
    },

    {question:"A very usedful tool used during development and debugging for printing content to the debugger is:",
    opt1: "1. Javascript",
    opt2: "2. terminal/bash",
    opt3: "3. for loops",
    opt4: "4.console.log",  
    correct: "4",
    },
]

// sets questionIndex to 0 in local storage so that in the questionIndex++ fucntion, this can be incremented from the correct start point
var questionIndex = localStorage.setItem("questionIndex",0);
var questionIndex = localStorage.getItem("questionIndex");

// function to call the questions stored in the array onto the html page
function renderQuestion() {

    choices.addEventListener("click", function(event) {
        var element = event.target;
       
        if (element.matches("button") && questionIndex < questions.length) {
        
            questionIndex ++;
            localStorage.setItem("questionIndex",questionIndex)
            console.log(questionIndex + " working")

            questionArea.innerHTML = questions[questionIndex].question;
            opt1Area.innerHTML = questions[questionIndex].opt1;
            opt2Area.innerHTML = questions[questionIndex].opt2;
            opt3Area.innerHTML = questions[questionIndex].opt3;
            opt4Area.innerHTML = questions[questionIndex].opt4;
        }
    });
}

// fucntion to call a page which allows High score to be entered after questions have run out
function highScore() {
    choices.addEventListener("click", function(event) {
        var element = event.target;

        if(element.matches("button") && questionIndex >= questions.length) {
            quiz.style.display = "none";
            submitScore.style.display = "block";
            console.log("Highscore")
        }

    })
}

// function to check user choice against correct answer stored in the the array
function checkAnswer() {

    let userChoice = []

    const onClick = function() {
        userChoice.push(this.id);
        // console.log(userChoice);
        console.log(userChoice[questionIndex]);
    }

    document.getElementById('1').onclick = onClick;
    document.getElementById('2').onclick = onClick;
    document.getElementById('3').onclick = onClick;
    document.getElementById('4').onclick = onClick;

    if (userChoice[questionIndex] = questions[questionIndex.correct]) {
        console.log("Correct answer")
    } else {
        console.log("Wrong answer")
    }

    // // need to fix this
    // if (questions[questionIndex].correct.matches(userChoice[questionIndex])) {
        
    //     console.log("yay!")
    // }
}

// using click event to initialise all functions
startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    startCountdown()
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    checkAnswer();
    highScore();
    console.log(questionIndex + " working");
    
}


