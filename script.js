
function startGame(){
    document.getElementById("menu").style.display="none";
    showScreen("game");
}

function showCredits(){
    document.getElementById("menu").style.display="none";
    showScreen("credits");
}

function goMenu(){
    document.getElementById("credits").style.display="none";
    document.getElementById("menu").style.display="block";
}

function nextScene(){
    const t=document.getElementById("textoHistoria");
    t.innerText="Escuchas pasos detrás de ti… pero no hay nadie.";
    jumpscare("game");
}

function jumpscare(id){
    const el=document.getElementById(id);
    el.classList.add("jumpscare");
    setTimeout(()=>{ el.classList.remove("jumpscare"); },300);
}

function showScreen(id){
    const s=document.getElementById(id);
    s.classList.add("fade-in");
    s.style.display="block";
}
