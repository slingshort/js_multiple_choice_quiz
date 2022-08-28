var startButton = document.querySelector('#start-btn');
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionArea = document.getElementById("question");
var choices = document.getElementById("choices");
var submitScore = document.getElementById("submitScore");
var opt1Area = document.getElementById("1");
var opt2Area = document.getElementById("2");
var opt3Area = document.getElementById("3");
var opt4Area = document.getElementById("4");

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
    correct: "4"
    },
]

var questionIndex = localStorage.setItem("questionIndex",0);
var questionIndex = localStorage.getItem("questionIndex");

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

startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    highScore();

}

// function checkAnswer {
//     if questions[questionIndex].correct.matches()

// }

