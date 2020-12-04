let nomes = ['Pelé', 'Maradona', 'Cruyff', 'Messi', 'Ronaldo','Buffon'];
let name = document.querySelector('#name');
let botao = document.querySelector('#botao');
let posicao = 0;
let imagens = ['Images/Pelé.jpg', 'Images/Maradona.jpg', 'Images/Cruyff.jpg', 'Images/Messi.jpg', 'Images/Ronaldo.jpg', 'Images/Buffon.jpg'];
let desc = ['Considerado por muitos o melhor jogador de todos os tempos,<br>autor de mais de 1000 gols,criador de vários dribles<br>e 3 vezes campeão do Mundo,nosso rei Pelé.',
'Maradona'] ;
let foto = document.querySelector('#foto');
let descri = document.querySelector('#descri');
name.innerHTML = "<p>" + nomes[0] + "</p>";
foto.innerHTML = "<img src=" + imagens[0] + ">";
descri.innerHTML = "<p>" + desc[0] + "</p>";

botao.addEventListener('click',function(){
  posicao ++;
  if(posicao == 6){
    posicao = 0;
  }
  name.innerHTML = "<p>" + nomes[posicao] + "</p>";
  foto.innerHTML = "<img src=" + imagens[posicao] + ">";
  descri.innerHTML = "<p>" + desc[posicao] + "</p>";
});