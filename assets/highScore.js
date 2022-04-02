//variables
const score = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
let getScore = localStorage.getItem("high score");
let getInitials = localStorage.getItem("initials");

//map scores to UI
const scoreDisplay = document.createElement("h3");
scoreDisplay.innerHTML = `High score: ${getScore}`;
score.appendChild(scoreDisplay);

const initialDisplay = document.createElement("h3")
initialDisplay.innerHTML = `Initials: ${getInitials}`
score.appendChild(initialDisplay);


