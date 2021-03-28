let bodyEl = document.querySelector('body');
let bolaEl = document.querySelector('#bola');

function segueMouse(e) {
    bolaEl.style.left = `${e.pageX}px`;
    bolaEl.style.top = `${e.pageY}px`;
}
bodyEl.addEventListener('mouseout', segueMouse);