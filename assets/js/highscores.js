var initials = localStorage.getItem("initials")
var score = localStorage.getItem("score")

console.log(initials)
console.log(score)

// creating a var that combines initials and score to store as an array object in local storage
highscoreITEM = initials + " " + score

// create an array to push highscoreITEM array objects to
var highscoreSTORAGE = ["test",]
highscoreSTORAGE.push(highscoreITEM)

// setting in local storage
localStorage.setItem("highscoreLIST",JSON.stringify(highscoreSTORAGE))

var renderLIST = JSON.parse(localStorage.getItem("highscoreLIST"))
console.log(renderLIST)

// creating list element and changing text content hold highscoreRESULTS
var highscoreRESULTS = document.createElement("li")
highscoreRESULTS.textContent = renderLIST

// targeting area of HTML to append list to
var highscoreLIST = document.getElementById("highscoreLIST")
highscoreLIST.appendChild(highscoreRESULTS)




