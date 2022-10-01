


// Select elements
// #choices ul enables the html choices id and ul to be targeted
var choicesul = document.querySelector("#choices ul");
var endScreen = document.querySelector("#end-screen");
var feedback = document.querySelector("#feedback");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var finalScore = document.querySelector('#final-score');
var initials = document.querySelector('#initials');
var submitBtn = document.querySelector('#submit');

var qi = -1;
var score = 0;

startBtn.addEventListener("click", startQuiz);

startScreen.classList.add("active");


var quizQs = [
    {
        title: "Commonly used data types DO NOT include...",
        choices: ["string", "boolean", "alerts", "numbers"],
        answer: 2
    },

    {
        title: "The condition in an if / esle statement is enclosed within",
        choices: ["quotes", "curly brackets", "parenthese", "square brackets"],
        answer: 2
    },

    {
        title: "Arrays in JavaScript can be used to store",
        choices: ["numbers and string", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
];





/**
 * start the quiz
 * 
 * args: none
 */
// commanding screen changes and starting quiz
function startQuiz() {
    console.log("start quiz link")
    questions.classList.add("active");
    startScreen.classList.remove("active");
    qi = -1;
    nextQ()
}

/**
 * show next question in quiz
 */
function nextQ() {

    // Initializes first quetion 
    if (qi < 0) {

        qi = 0;
    } else {

        qi++;
    }


    console.log("show question: " + qi)
    if (qi >= quizQs.length) {
        endQuiz()
        return;
    }

    //   for (let qi = 0; qi < quizQs.length; qi++) {
    console.log("Question " + qi + "=", quizQs[qi].title);
    questionTitle.innerHTML = quizQs[qi].title;
    setChoices(qi)
    activateChoices()
}

// intitiates end of quiz page 
function endQuiz() {
    console.log("Quiz finished. move to high scores");
    endScreen.classList.add("active");
    questions.classList.remove("active");
    finalScore.innerHTML = score;
    
    submitBtn.addEventListener('click', sumbitScore);
}
// inputs content to move to highscores hmtl page
function sumbitScore(){
    console.log("recording initials", initials.value, 'score', score);
    localStorage.setItem("submitScore", score);
    window.location.href = 'highscores.html';
}

// brings together active buttons and answers
function setChoices(qi) {

    choicesul.innerHTML = "";

    var list = ""
    for (let ci = 0; ci < quizQs[qi].choices.length; ci++) {
        console.log("choice" + ci + "=", quizQs[qi].choices[ci]);
        list = list + "<li><button value='" + ci + "'>" + quizQs[qi].choices[ci] + "</button></li>";
    }
    choicesul.innerHTML = list
}

/**
 *  button event handler - givine function to buttons, adding scores and true answers
 */
function buttonsQ(evt) {
    console.log("adding functionality to buttons", evt)
    console.log('button value =', evt.srcElement.value)
    console.log("correct answer = ", quizQs[qi].answer)
    if (quizQs[qi].answer == evt.srcElement.value) {
        score = score + 10
        console.log("true", score)

    }
//moves to next quesiton
    nextQ()
}

/**
 * Initialize choices buttons
 * 
 * connecting buttons to js function 
 */
function activateChoices() {
    var buttons = choicesul.querySelectorAll("button");
    console.log("button", buttons);
    buttons.forEach((button) => {
        console.log("button check", button)
        button.addEventListener("click", buttonsQ)

    })
}

// yet to build the timer and finalise the high score ordering...

/*
// local storage will keep the score for the quiz
localStorage.setItem('score', '1');

// get item will pull and accumulate the score in localstorage
var cat = localStorage.getItem('score');

// building timer into project

var timeHandler = setInterval(timer()) {

}, 1000)
*/