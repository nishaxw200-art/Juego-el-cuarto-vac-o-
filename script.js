
const startBtn = document.getElementById('startBtn');
const creditsBtn = document.getElementById('creditsBtn');
const backFromCredits = document.getElementById('backFromCredits');
const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const credits = document.getElementById('credits');
const sceneImg = document.getElementById('sceneImg');
const story = document.getElementById('story');

let currentScene = 1;
const totalScenes = 10;

function show(el){
  el.style.display = 'block';
  el.classList.add('fade-in');
}
function hide(el){
  el.style.display = 'none';
  el.classList.remove('fade-in');
}

startBtn.onclick = () => {
  hide(menu); show(game);
}
creditsBtn.onclick = () => { hide(menu); show(credits); }
backFromCredits.onclick = () => { hide(credits); show(menu); }
backBtn.onclick = () => { hide(game); show(menu); currentScene = 1; sceneImg.src = `assets/images/escena1.png`; story.innerText = 'Despiertas en un cuarto vacío.'}

nextBtn.onclick = () => {
  currentScene++;
  if(currentScene > totalScenes){
    story.innerText = 'Fin del demo — Reiniciando...';
    currentScene = 1;
    sceneImg.src = `assets/images/escena1.png`;
    setTimeout(()=>{ hide(game); show(menu); }, 1200);
    return;
  }
  sceneImg.src = `assets/images/escena${currentScene}.png`;
  story.innerText = ['El pasillo está oscuro','Escuchas pasos','Una puerta se abre','Algo se mueve','No hay nadie','Notas una foto','La foto tiene tus ojos','Sientes frío','Un susurro','Un destello'][currentScene-1];
  // small jump scare at scene 5
  if(currentScene === 5){
    game.classList.add('jumpscare');
    setTimeout(()=> game.classList.remove('jumpscare'), 350);
  }
}
console.log('Juego inicializado');
