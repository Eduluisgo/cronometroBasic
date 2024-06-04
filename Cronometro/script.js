let tiempo = 0;
let intervalo;

const tiempoElement = document.getElementById('tiempo');
const iniciarButton = document.getElementById('iniciar');
const pararButton = document.getElementById('parar');
const reiniciarButton = document.getElementById('reiniciar');

iniciarButton.addEventListener('click', iniciarCronometro);
pararButton.addEventListener('click', pararCronometro);
reiniciarButton.addEventListener('click', reiniciarCronometro);

function iniciarCronometro() {
  intervalo = setInterval(() => {
    tiempo++;
    const minutos = Math.floor(tiempo / 60);
    const segundos = tiempo % 60;
    const segundosString = segundos < 10 ? `0${segundos}` : segundos;
    tiempoElement.textContent = `${minutos}:${segundosString}`;
  }, 1000);
  iniciarButton.disabled = true;
  pararButton.disabled = false;
  reiniciarButton.disabled = false;
}

function pararCronometro() {
  clearInterval(intervalo);
  pararButton.disabled = true;
  reiniciarButton.disabled = false;
}

function reiniciarCronometro() {
  tiempo = 0;
  tiempoElement.textContent = '00:00:00';
  clearInterval(intervalo);
  iniciarButton.disabled = false;
  pararButton.disabled = true;
  reiniciarButton.disabled = true;
}