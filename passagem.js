let nomes = ['Pelé', 'Maradona', 'Cruyff', 'Messi', 'Ronaldo'];
let name = document.querySelector('#nome');
let botao = document.querySelector('#botao');
let lugar = 0;
let imagens = ['Images/Pelé.jpg', 'Images/Maradona.jpg', 'Images/Cruyff.jpg', 'Images/Messi.jpg', 'Images/Ronaldo.jpg', 'Images/Buffon.jpg'];
let desc = [] ;
let foto = document.querySelector('#foto');
let descri = document.querySelector('#descri');
name.innerHTML = "<p>" + nomes[0] + "</p>";
foto.innerHTML = "<img src=" + imagens[0] + ">";
descri.innerHTML = "<p>" + desc[0] + "</p>";

botao.addEventListener('click',function(){
  lugar ++;
  if (lugar == 5){
    lugar = 0;
  }
  name.innerHTML = "<p>" + nomes[lugar] + "</p>";
  foto.innerHTML = "<img src=" + imagens[0] + ">";
  descri.innerHTML = "<p>" + desc[lugar] + "</p>";
});
