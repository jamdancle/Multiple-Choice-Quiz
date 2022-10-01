
var highScoreUl = document.querySelector('#highscorelist ul');

var highScores = [
    {
        initials: "DM",
        score: 30
    },
    {
        initials: "JM",
        score: 30
    },
    {
        initials: "DH",
        score: 20
    },
    {
        initials: "LM",
        score: 20
    },
    {
        initials: "MM",
        score: 0
    },
]

highScoreUl.innerHTML = "";

var list = ""

for (var i = 0; i < highScores.length; i++) {
    console.log('high scores list', highScores[i].initials, 'score', highScores[i].score)
    list = list + "<li><span class ='Initials'>" + highScores[i].initials + "</span><span class = 'Scores'>" + highScores[i].score + "</span></li>";
}

highScoreUl.innerHTML = list


