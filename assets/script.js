
//button variables 
const startBtnEl = document.getElementById("startBtn")

//on click actions
$(startBtnEl).on("click", startGame)


//additonal variables 
const questionEL = document.getElementById("question")
const answerEL = document.getElementById("answer-buttons")
let index;
let highScore;
let timeLeft = 60 * 5;
// initial chosen question


//functions


//start timer
let displayTimer = document.getElementById("time-display")

// fucnction for timer help from https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript
function startTimer(duration, showTimer) {
    var timer = duration, minutes, seconds;
  var timeStamp=  setInterval(function () {
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
function startGame () {
    var showTimer = document.querySelector("#time")
    startTimer(timeLeft, showTimer)
    displayTimer.classList.remove("hide")
    $(startBtnEl).addClass("hide");
    $(questionEL).removeClass("hide");
    $(answerEL).removeClass("hide");
     index = 0
    chooseQuestion(questionList[index])
       
    

}

function chooseQuestion(question) {
    let questionChosen = questionList[index].questionText
    console.log(questionChosen)
    questionEL.innerText = questionChosen
    let possibleAnswers = questionList[index].answerOptions[0].text
   
     for (let i = 0; i <questionList[index].answerOptions.length; i++){
         possibleAnswers = questionList[index].answerOptions[i].text
        const createButton = document.createElement("button")
        createButton.innerText = possibleAnswers
        createButton.classList.add("btn", "btn-outline-primary", "mt-3",  "mr-3", "col", "col-md-4" )
        createButton.setAttribute("type", "button")
        answerEL.appendChild(createButton)

     }
    
    

    
    
    
    // for (let i = 0; i < answerOptions.length)

    
    // question.answerOptions.forEach(answerOption => {
    //     const createButton = document.createElement("button")
    //     createButton.innerText = answerOption.innerText
    //     createButton.classList.add("btn", "btn-outline-primary", "mt-3",  "mr-3", "col", "col-md-4" )
    //     createButton.setAttribute("type", "button")
    //     answerEL.appendChild(createButton)
    // })
        
    }

  

