let nomes = ['Abner (Endou Mamoru) ', 'Derik (Shirou Fubuki)', 'Jean (Ichinose Kazuya)', 'Ricardo (Ryugo Someoka)'];
let name = document.querySelector('#name');
let seta = document.querySelector('#criadores');
let posicao = 0;
let imagens = ['Images/endo.jpeg', 'Images/fubuki.jpeg', 'Images/ichinose.jpeg', 'Images/someoka.jpeg'];
let desc = ['O líder do grupo, é um aluno aplicado e bastante extrovertido.', 'Rei dos speedruns, esperançoso e feliz.', 'Esse aí é o mestre dos magos em pessoa.', 'Ninguém conhece, ninguém nunca viu.'];
let picture = document.querySelector('#picture');
let agente = document.querySelector('#agente');
name.innerHTML = "<p>" + nomes[0] + "</p>";
picture.innerHTML = "<img src=" + imagens[0] + ">";
agente.innerHTML = "<p>" + desc[0] + "</p>";

seta.addEventListener('click', function() {
    posicao++;
    if (posicao == 4) {
        posicao = 0;
    }
    name.innerHTML = "<p>" + nomes[posicao] + "</p>";
    picture.innerHTML = "<img src=" + imagens[posicao] + ">";
    agente.innerHTML = "<p>" + desc[posicao] + "</p>";
});