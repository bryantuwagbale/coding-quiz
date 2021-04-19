// Goals are:
// - Start game
// - Start timer
// - Add ability to select answers
// - Deduct time for wrong answers 
// - Move between questions
// - Tally total score
// - Save name




var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var shuffledQuestions, currentQuestionIndex
var questionElement = document.getElementById("question")
var answerButtons = document.getElementById("answer-buttons")
var currentQuestionIndex, shuffledQuestions

startButton.addEventListener("click", startQuiz)

function startQuiz() {
    console.log("Quiz has begun")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(()=> Math.random() - 0.5) // randomizes the questions 
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    nextQuestion()
}


function nextQuestion() {
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question 
    question.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selcetAnswer)
        answerButtons.appendChild(button)
    })
}


function reset() {
    nextButton.classList.add("hide")
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selcetAnswer (e) {
   
}


var questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "Hypertext Markup Langauge", correct: true},
            {text: "Hoop Yellow Mixtape Lasagna", correct: false},
            {text: "Heated Yeild Marketing Logic", correct: false},
            {text: "Happy Yodeling Manipulative Love", correct: false}
        ]
    }
    
]



document.addEventListener("DOMContentLoaded", () => {
    var timeLeftDisplay = document.querySelector("#time")
    var startButton = document.querySelector("#start-btn")
    var timeLeft = 60

    function countDownTimer(){
        setInterval(function(){
            if (timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }
    startButton.addEventListener("click", countDownTimer)
})
