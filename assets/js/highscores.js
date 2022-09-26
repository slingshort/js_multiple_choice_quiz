var initials = localStorage.getItem("initials")
var score = localStorage.getItem("score")

console.log(initials)
console.log(score)


// creating a var that combines initials and score to store as an array object in local storage

localStorage.setItem(initials,score)


// var highscoreRESULT = document.createElement("li")
// highscoreRESULT.textContent = 

// // targeting area of HTML to append list to
// var highscoreLIST = document.getElementById("highscoreLIST")
// highscoreLIST.appendChild(highscoreRESULTS)

// back to home
var home = document.getElementById("home")
home.onclick = function() {
    window.location.href="index.html"
}

// clear local storage
var clear = document.getElementById("clear")
clear.onclick = function() {
    window.localStorage.clear()
}