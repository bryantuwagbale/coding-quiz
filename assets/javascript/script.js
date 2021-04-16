// PSEUDO CODE

// Goals are:
// - Start game
// - Add ability to select answers 
// - Move between questions



var startButton = document.getElementById("start-btn")
var questionContainerElement = document.getElementById("question-container")



startButton.addEventListener("click", startQuiz)



function startQuiz() {
    console.log("Quiz has begun")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
}

function nextQuestion() {

}

function selcetAnswer () {

}