//button variables
const startBtnEl = document.getElementById("startBtn");
const nextBtnEl = document.getElementById("nextBtn");

//on click actions
$(startBtnEl).on("click", startGame);
$(nextBtnEl).on("click", resetAnswers);

//additonal variables
const questionEL = document.getElementById("question");
const answerEL = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("question-container");
let correct;

let index;
let highScore = 0;
const StartTime = 3;
let time = StartTime * 60;
let interval;

//functions

//start timer
let displayTimer = document.getElementById("time-display");

// fucnction for timer
function timer() {
  const min = Math.floor(time / 60);
  let sec = time % 60;

  sec = sec < 10 ? "0" + sec : sec;
  displayTimer.innerHTML = `${min}:${sec}`;
  if (time > 0) {
    time--;
  }
}

//start game function
function startGame() {
  interval = setInterval(timer, 1000);
  console.log(setInterval);
  displayTimer.classList.remove("hide");
  $(startBtnEl).addClass("hide");
  $(questionEL).removeClass("hide");
  $(answerEL).removeClass("hide");
  index = 0;
  chooseQuestion(questionList[index]);
}

// function to choose the first question
function chooseQuestion(question) {
  verifyTime();
  if (index < 10) {
    let questionChosen = questionList[index].questionText;

    questionEL.innerText = questionChosen;
    let possibleAnswers;

    for (let i = 0; i < questionList[index].answerOptions.length; i++) {
      possibleAnswers = questionList[index].answerOptions[i].text;
      correct = questionList[index].answerOptions[i].correct;

      const createButton = document.createElement("button");
      createButton.innerText = possibleAnswers;
      createButton.classList.add(
        "btn",
        "btn-outline-primary",
        "mt-3",
        "mr-3",
        "col",
        "col-md-4"
      );
      $(createButton).attr("type", "button");
      $(createButton).attr("data-correct", correct);
      $(createButton).on("click", verifyCorrect);
      answerEL.appendChild(createButton);
    }
  } else {
    finishGame();
  }
}
//function to check if answer is correct and highlight the button
function verifyCorrect(event) {
  selectedAnswer = event.target;
  let checkCorrect = event.target.getAttribute("data-correct");
  if (checkCorrect === "true") {
    this.classList.remove("btn-outline-primary");
    this.classList.add("btn-success");
    highScore += 10;
    console.log(highScore);
  } else {
    this.classList.remove("btn-outline-primary");
    this.classList.add("btn-danger");
    if (time >= 15) {
      time = time - 15;
    } else {
      time = 0;
    }
  }
  index++;
  $(nextBtnEl).removeClass("hide");
}

//check to see if there is time left
function verifyTime() {
  if (time <= 0) {
    clearInterval(interval);
    displayTimer.classList.add("hide");
    questionEL.classList.add("hide");
    answerEL.classList.add("hide");
    alert(`Your time in up. your current score is ${highScore}`);
    finishGame();
  }
}
function resetAnswers() {
  $(nextBtnEl).addClass("hide");
  while (answerEL.firstChild) {
    answerEL.removeChild(answerEL.firstChild);
  }
  chooseQuestion();
}

function finishGame() {
  let getScore = localStorage.getItem("high score");
  console.log(getScore);
  highScore = highScore || 0;
  if (highScore > getScore) {
    alert(
      `Congrats! You have a new high score. Your socre is ${highScore}. Keep up the great work!`
    );
    var initials = prompt("please enter your initials");
    localStorage.setItem("high score", highScore);
    localStorage.setItem("initials", initials);
    location.reload();
  } else {
    alert(
      ` You didnt beat the high score of ${highScore} better luck next time`
    );
    location.reload();
  }
}
