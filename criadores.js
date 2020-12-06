let nomes = ['Abner (Endou Mamoru) ', 'Derik (Shirou Fubuki)', 'Jean (Ichinose Kazuya)', 'Ricardo (Ryugo Someoka)'];
let name = document.querySelector('#name');
let seta = document.querySelector('#seta');
let posicao = 0;
let imagens = ['Images/endo.jpeg', 'Images/fubuki.jpeg', 'Images/ichinose.jpeg', 'Images/someoka.jpeg'];
let foto = document.querySelector('#foto');
let cria = document.querySelector('.cria');
let descri = document.querySelector('#descri');
name.innerHTML = "<p>" + nomes[0] + "</p>";
foto.innerHTML = "<img src=" + imagens[0] + ">";

seta.addEventListener('click', function() {
    posicao++;
    if (posicao == 4) {
        posicao = 0;
    }
    name.innerHTML = "<p>" + nomes[posicao] + "</p>";
    foto.innerHTML = "<img src=" + imagens[posicao] + ">";
});