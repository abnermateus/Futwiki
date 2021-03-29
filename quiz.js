const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const choiceE = document.getElementById("E");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


let questions = [

    {

        question: "Qual foi o time que mais ganhou títulos da copa do mundo?",

        choiceA: "Alemanha",

        choiceB: "Espanha",

        choiceC: "Inglaterra",

        choiceD: "Brasil",

        choiceE: "Argentina",

        correct: "D"

    }, {

        question: "Qual jogador possui mais bolas de ouro?",

        choiceA: "Pelé",

        choiceB: "Messi",

        choiceC: "Neymar",

        choiceD: "Ronaldo Fenômeno",

        choiceE: "Cristiano Ronaldo",

        correct: "B"

    }, {

        question: "Qual time tem mais títulos da libertadores?",

        choiceA: "Santos",

        choiceB: "Boca Juniors",

        choiceC: "Cruzeiro",

        choiceD: "Independiente",

        choiceE: "River Plate",

        correct: "D"

    }, {

        question: "Que time tem mais títulos de Champions League?",

        choiceA: "Real Madrid",

        choiceB: "Barcelona",

        choiceC: "Juventus",

        choiceD: "Bayern de Munique",

        choiceE: "Botafigo",

        correct: "A"

    }, {

        question: "Qual time que ganhou a copa do mundo de 2018?",

        choiceA: "Holanda",

        choiceB: "Alemanha",

        choiceC: "Bélgica",

        choiceD: "Croácia",

        choiceE: "França",

        correct: "E"
    }

]
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


function renderQuestion() {
    let q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

start.addEventListener("click", startQuiz);

function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

function renderProgress() {
    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
        (scorePerCent >= 40) ? "img/3.png" :
        (scorePerCent >= 20) ? "img/2.png" :
        "img/1.png";

    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}