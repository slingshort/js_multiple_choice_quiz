var initials = localStorage.getItem("initials")
var score = localStorage.getItem("score")

console.log(initials)
console.log(score)

highscoreITEM = initials + " " + score

var highscoreSTORAGE = ["test",]

highscoreSTORAGE.push(highscoreITEM)

localStorage.setItem("highscoreLIST",JSON.stringify(highscoreSTORAGE))

var renderLIST = JSON.parse(localStorage.getItem("highscoreLIST"))
console.log(renderLIST)
// localStorage.setItem("highscoreITEM",highscoreITEM )


// document.getElementById("highscoreLIST").appendChild(highscoreITEM)

