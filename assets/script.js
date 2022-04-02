//button variables
const startBtnEl = document.getElementById("startBtn");
const nextBtnEl = document.getElementById("nextBtn");

//on click actions
$(startBtnEl).on("click", startGame);
$(nextBtnEl).on("click", resetAnswers )

//additonal variables
const questionEL = document.getElementById("question");
const answerEL = document.getElementById("answer-buttons");
const questionContainer = document.getElementById('question-container')
let correct;

let index;
let highScore;
let timeLeft = 60 * 5;
// initial chosen question

//functions

//start timer
let displayTimer = document.getElementById("time-display");

// fucnction for timer help from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, showTimer) {
  var timer = duration,
    minutes,
    seconds;
  var timeStamp = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    showTimer.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
      clearInterval(timeStamp);
    }
  }, 1000);
}

//start game function
function startGame() {
  var showTimer = document.querySelector("#time");
  startTimer(timeLeft, showTimer);
  displayTimer.classList.remove("hide");
  $(startBtnEl).addClass("hide");
  $(questionEL).removeClass("hide");
  $(answerEL).removeClass("hide");
  index = 0;
  chooseQuestion(questionList[index]);
  
}
console.log(questionList.length)
// function to choose the first question
function chooseQuestion(question) {
        
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
      "col-md-4",
      
    );
    $(createButton).attr("type", "button");
    $(createButton).attr("data-correct", correct);
    $(createButton).on("click", verifyCorrect);
    answerEL.appendChild(createButton);
  }
  index ++
  if (index > 9) {
   finishGame()
  }
  
}
//function to check if answer is correct and highlight the button
function verifyCorrect(event) {
  selectedAnswer = event.target;
  let checkCorrect = event.target.getAttribute("data-correct");
  if (checkCorrect === "true") {
    //   TODO: need to add logic to add to the highscore
    this.classList.remove(
      "btn",
      "btn-outline-primary",
      "mt-3",
      "mr-3",
      "col",
      "col-md-4",
      
    );
    this.classList.add("btn", "btn-success", "mt-3", "mr-3", "col", "col-md-4", );
  } else {
    //    TODO: need to add logic to subtract time
    this.classList.remove(
      "btn",
      "btn-outline-primary",
      "mt-3",
      "mr-3",
      "col",
      "col-md-4", 
      

    );
    this.classList.add("btn", "btn-danger", "mt-3", "mr-3", "col", "col-md-4", "btn-large");
  }
  $(nextBtnEl).removeClass("hide")
  
}

function resetAnswers() {
    $(nextBtnEl).addClass("hide"); 
    while (answerEL.firstChild) {
        answerEL.removeChild(answerEL.firstChild)
    }
    chooseQuestion();
    
}

function finishGame()  {

}