const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn() {
    lamp.src = 'imagens/ligada.png';
}

function lampOff() {
    lamp.src = 'imagens/desligada.png';
}

function lampBroken() {
    lamp.src = 'imagens/quebrada.png';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);
