let nomes = ['Pelé - O Rei do Futebol', 'Maradona - O Gênio Indomável', 'Cruyff - O Monstro Polivalente', 'Messi - O ET', 'Cristiano Ronaldo - CR7, O Robozão', 'Gianlugi Buffon - A Muralha Italiana'];
let name = document.querySelector('#name');
let botao = document.querySelector('#botao');
let posicao = 0;
let imagens = ['Images/Pelé.jpg', 'Images/Maradona.jpg', 'Images/Cruyff.jpg', 'Images/Messi.jpg', 'Images/Ronaldo.jpg', 'Images/Buffon.jpg'];
let desc = ['Considerado por muitos o melhor jogador de todos os tempos, <br>autor de mais de 1000 gols, criador de vários dribles<br>e 3 vezes campeão do Mundo, nosso rei Pelé.',
    '<i>El Dios Maradona</i> como diriam os argentinos! Reconhecido como o segundo melhor jogador da história,<br>levou a Argentina nas costas na Copa de 1986,<br>quando fez o icônico gol de mão que mais tarde foi batizado como <i>La Mano de Dios.</i>',
    'Johan Cruyff o único homem a atuar em 5 posições no mesmo jogo.<br>Conhecido por ser aquele que aperfeiçoou o futebol total,um estilo de jogo<br> em que os jogadores trocavam de posições durante o jogo.Foi o principal jogador da <i>Laranja Mecânica</i><br>,a melhor seleção holandesa de todos os tempos, que conquistou o vice da Copa do Mundo contra a Alemanha em 1974.',
    'O melhor jogador da atualidade ao lado de Cristiano Ronaldo e gênio do Barcelona.<br>O jogador que mais vezes levantou o prêmio de melhor do mundo, camisa 10<br> do Barcelona e da seleção Argentina. Infelizmente nunca ganhou nada com a sua seleção.',
    'Aquele que chegou ao topo apenas com esforço individual e vencedor de 5 bolas de ouro.<br>Guiou Portugal ao seu inédito título de Eurocopa. Reconhecido como o jogador mais versátil de sua posição<br>e autor de diversos gols memoráveis, é o maior artilheiro da história da Champions League,<br>da seleção portuguesa e segundo maior goleador de seleções na história, ficando atrás, até o momento, apenas de Ali Daei.',
    'O melhor goleiro de todos os tempos, salvou a<i> Azurra </i>(Seleção Italiana) na Copa de 2006<br>, aonde se sagrou Campeão do Mundo. Hoje ,aos 42 anos segue jogando na Juventus, em busca do título da Champions League.'
];
let foto = document.querySelector('#foto');
let descri = document.querySelector('#descri');
name.innerHTML = "<p>" + nomes[0] + "</p>";
foto.innerHTML = "<img src=" + imagens[0] + ">";
descri.innerHTML = "<p>" + desc[0] + "</p>";

botao.addEventListener('click', function() {
    posicao++;
    if (posicao == 6) {
        posicao = 0;
    }
    name.innerHTML = "<p>" + nomes[posicao] + "</p>";
    foto.innerHTML = "<img src=" + imagens[posicao] + ">";
    descri.innerHTML = "<p>" + desc[posicao] + "</p>";
});