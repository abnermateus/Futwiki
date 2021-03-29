const comecar = document.getElementById("comecar");
const quiz = document.getElementById("quiz");
const questao = document.getElementById("questao");
const opcaoA = document.getElementById("A");
const opcaoB = document.getElementById("B");
const opcaoC = document.getElementById("C");
const opcaoD = document.getElementById("D");
const opcaoE = document.getElementById("E");
const contador = document.getElementById("contador");
const timeGauge = document.getElementById("timeGauge");
const progresso = document.getElementById("progresso");
const scoreDiv = document.getElementById("pontuacao");

let questoes = [{
        questao: "Qual foi a seleção que mais ganhou títulos da Copa do Mundo?",
        opcaoA: "Alemanha",
        opcaoB: "Espanha",
        opcaoC: "Inglaterra",
        opcaoD: "Brasil",
        opcaoE: "Argentina",
        correct: "D"
    },

    {
        questao: "Qual jogador possui mais bolas de ouro?",
        opcaoA: "Pelé",
        opcaoB: "Messi",
        opcaoC: "Neymar",
        opcaoD: "Ronaldo Fenômeno",
        opcaoE: "Cristiano Ronaldo",
        correct: "B"
    },

    {
        questao: "Qual dos times abaixo tem mais títulos da Libertadores?",
        opcaoA: "Santos",
        opcaoB: "Boca Juniors",
        opcaoC: "Cruzeiro",
        opcaoD: "Independiente",
        opcaoE: "River Plate",
        correct: "D"

    },

    {
        questao: "Qual dos times abaixo possui mais títulos de Champions League?",
        opcaoA: "Real Madrid",
        opcaoB: "Barcelona",
        opcaoC: "Juventus",
        opcaoD: "Bayern de Munique",
        opcaoE: "Botafogo",
        correct: "A"
    },

    {
        questao: "Qual seleção ganhou a Copa do Mundo de 2018?",
        opcaoA: "Holanda",
        opcaoB: "Alemanha",
        opcaoC: "Bélgica",
        opcaoD: "Croácia",
        opcaoE: "França",
        correct: "E"
    }
]

const ultimaQuestao = questoes.length - 1;
let questaoAtual = 0;
let count = 0;
const tempoDaQuestao = 15;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / tempoDaQuestao;
let TIMER;
let pontos = 0;

function Questao() {
    let q = questoes[questaoAtual];

    questao.innerHTML = "<p>" + q.questao + "</p>";
    opcaoA.innerHTML = q.opcaoA;
    opcaoB.innerHTML = q.opcaoB;
    opcaoC.innerHTML = q.opcaoC;
    opcaoD.innerHTML = q.opcaoD;
    opcaoE.innerHTML = q.opcaoE;
}

comecar.addEventListener("click", comecarQuiz);

function comecarQuiz() {
    comecar.style.display = "none";
    Questao();
    quiz.style.display = "block";
    Progresso();
    Contador();
    TIMER = setInterval(Contador, 1000);
}

function Progresso() {
    for (let qIndex = 0; qIndex <= ultimaQuestao; qIndex++) {
        progresso.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

function Contador() {
    if (count <= tempoDaQuestao) {
        contador.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        respostaErrada();

        if (questaoAtual < ultimaQuestao) {
            questaoAtual++;
            Questao();
        } else {
            clearInterval(TIMER);
            Pontuacao();
        }
    }
}

function verificarResposta(resposta) {
    if (resposta == questoes[questaoAtual].correct) {
        pontos++;
        respostaCorreta();
    } else {
        respostaErrada();
    }
    count = 0;
    if (questaoAtual < ultimaQuestao) {
        questaoAtual++;
        Questao();
    } else {
        clearInterval(TIMER);
        Pontuacao();
    }
}

function respostaCorreta() {
    document.getElementById(questaoAtual).style.backgroundColor = "#0f0";
}

function respostaErrada() {
    document.getElementById(questaoAtual).style.backgroundColor = "#f00";
}

function Pontuacao() {
    scoreDiv.style.display = "block";

    const porcentagem = Math.round(100 * pontos / questoes.length);
    scoreDiv.innerHTML += "<p>" + porcentagem + "%</p>";
}