//variables
const score = document.getElementById("score");
const scoreContainer = document.getElementById("score-container");
let getScore = localStorage.getItem("high score");
let getInitials = localStorage.getItem("initials");
if (!getScore) {
  const blankScore = document.createElement("h4");
  blankScore.innerText = `There are no high scores yet, play the game to see the score displayed here.`;
  score.appendChild(blankScore)
} else {
  //map scores to UI
  const scoreDisplay = document.createElement("h3");
  scoreDisplay.innerHTML = `High score: ${getScore}`;
  score.appendChild(scoreDisplay);

  const initialDisplay = document.createElement("h3");
  initialDisplay.innerHTML = `Initials: ${getInitials}`;
  score.appendChild(initialDisplay);
}
