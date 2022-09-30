


// Select elements
// #choices ul enables the html choices id and ul to be targeted
var choicesul = document.querySelector("#choices ul")
var endScreen = document.querySelector("#end-screen")
var feedback = document.querySelector("#feedback")
var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen")


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




//var qi = 0
/**
 * start the quiz
 * 
 * args: none
 */
function startQuiz() {
    console.log("start quiz link")
    questions.classList.add("active");
    startScreen.classList.remove("active");

//qi = 0    


//function nextQ() {

    for (let qi = 0; qi < quizQs.length; qi++) {
        console.log("Question " + qi + "=", quizQs[qi].title);
        questionTitle.innerHTML = quizQs[qi].title;
        setChoices(qi)
        activeChoices()
    }
}


function setChoices(qi) {

    choicesul.innerHTML = "";

    var list = ""
    for (let ci = 0; ci < quizQs[qi].choices.length; ci++) {
        console.log("choice" + ci + "=", quizQs[qi].choices[ci]);
        list = list + "<li><button value='" + ci + "'>" + quizQs[qi].choices[ci] + "</button></li>";
    }
    choicesul.innerHTML = list
}

function buttonsQ(evt) {
    console.log("adding functionality to buttons", evt)
    console.log('button value =',evt.srcElement.value)

}


function activeChoices() {
    var buttons = choicesul.querySelectorAll("button");
    console.log("button", buttons);
    buttons.forEach((button) => {
        console.log("button check", button)
        button.addEventListener("click", buttonsQ)

    })
}
// local storage will keep the score for the quiz
localStorage.setItem('score', '1');
// get item will pull and accumulate the score in localstorage
var cat = localStorage.getItem('score');

// building timer into project

var timeHandler = setInterval(timer()) {

}, 1000)

// var list1 = "";
// for (i = 0; i < fruits.length; i++) {
//     console.log("individual fruits: " + fruits[i])
//     list = list + "<li>" + fruits[i] + "</li>"
// }



// var test = [1,2,3,4];

// test = [];
// var dataToAdd = [5,9,2,6]
// for(var i =0; i < 4; i++) {

//     test.push(dataToAdd[i]);
// }

// test == [5,9,2,6];




/*


// if (i == quizQs.length, ) {

//     console.log(quizQs[i]);
// }




*/





/** 
 * show question and answers - multiple choice
 
function promptQuestion() {

}


for (var i=0; i < questions.length; i++) 


    var response = window.prompt(questions[i].prompt):
    if(response == questions[i].answer) {
        score++;
        alert("Correct!");
    }else {
            ("Wrong!")
        }
    }
    alert("You got " + score + "/" + questions.length)


prompt

var AllDone

var score

alert("All Done!")

alert("Your final score is", + score)

id final-score (for score record)

var highscores

id time (for timer)

button get
    
<button id="start">Start Quiz</button>

*/
