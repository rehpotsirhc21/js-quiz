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
let highScore = 0;
const StartTime = 1;
let time = StartTime * 60;
let interval;


//functions

//start timer
let displayTimer = document.getElementById("time-display");

// fucnction for timer help from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function timer(){
    const min = Math.floor(time/60);
    let sec = time % 60; 

    sec = sec < 10 ? '0'+ sec: sec
    displayTimer.innerHTML = `${min}:${sec}`;
    if(time > 0) {
    time --}
}


//start game function
function startGame() {

 interval = setInterval(timer, 1000);
 console.log(setInterval)
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
    
    this.classList.remove(
      "btn",
      "btn-outline-primary",
      "mt-3",
      "mr-3",
      "col",
      "col-md-4",
      
    );
    this.classList.add("btn", "btn-success", "mt-3", "mr-3", "col", "col-md-4", );
    highScore++
    console.log(highScore)
  } else {
    
    this.classList.remove(
      "btn",
      "btn-outline-primary",
      "mt-3",
      "mr-3",
      "col",
      "col-md-4", 
      
    );
    this.classList.add("btn", "btn-danger", "mt-3", "mr-3", "col", "col-md-4", "btn-large");
    if (time >= 15) {
    time = time - 15
    } else {
        time = 0
    }
  }
  $(nextBtnEl).removeClass("hide")
  
}


function verifyTime() {
    if(time <= 0) {
        clearInterval(interval)
        displayTimer.classList.add("hide");
        questionEL.classList.add("hide");
        answerEL.classList.add("hide");
        location.reload()
        
        
    }
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