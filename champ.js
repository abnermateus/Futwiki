let nomes = ['Copa do Mundo', 'Champions League', 'Europa League', 'Libertadores', 'Mundial', 'Brasileirão'];
let name = document.querySelector('#name');
let seta = document.querySelector('#seta');
let posicao = 0;
let imagens = ['Images/Copa.jpg', 'Images/Champions.jpg', 'Images/Euro.jpg', 'Images/Liberta.jpeg', 'Images/Mun.jpg', 'Images/Brasa.jpg'];
let desc = ['O campeonato mais importante do Mundo.Todos os jogadores sonham em um dia<br> ganhar a Copa.Aqui as melhores seleções,<br>e os melhores jogadores batalham pela consagração eterna.',
    'O campeonato mais importante que ocorre anualmente.Aqui as potências europeias jogam<br> entre elas para levantar a orelhuda.Ganhar a mesma é muito importante na carreira de um jogador.',
    'Um campeonato inferior á Champions,é o segundo mais importante.Mas isso não significa<br>muita coisa,pois a magia que ocorre aqui é a mesma que acontece na champions.',
    'Na minha opinião,o campeonato mais emocionante de todos.Os melhores times sul americanos<br>competem entre si por esse título.',
    'Um campeonato em que os vencedores de suas copas continentais se enfrentam.O vencedor é<br>coroado como o melhor time do mundo.',
    'O nosso campeonato nacional e o maior evento dos domingos.Aqui nossos times do coração se<br>enfrentam.Grandes jogadores foram revelados nesse campeonato,como Pelé,Neymar e Ronaldinho Gaucho.'
];
let foto = document.querySelector('#foto');
let descri = document.querySelector('#descri');
name.innerHTML = "<p>" + nomes[0] + "</p>";
foto.innerHTML = "<img src=" + imagens[0] + ">";
descri.innerHTML = "<p>" + desc[0] + "</p>";

seta.addEventListener('click', function() {
    posicao++;
    if (posicao == 6) {
        posicao = 0;
    }
    name.innerHTML = "<p>" + nomes[posicao] + "</p>";
    foto.innerHTML = "<img src=" + imagens[posicao] + ">";
    descri.innerHTML = "<p>" + desc[posicao] + "</p>";
});