
/* =========================
   FRASES MOTIVACIONAIS
========================= */

const frases = [
    "Você é mais forte do que imagina 🌱",
    "Um passo de cada vez também é progresso 🌿",
    "Respire. Você não precisa resolver tudo agora 💙",
    "Sua mente merece cuidado e descanso ☁️",
    "Dias difíceis também passam 🌤️",
    "Pequenos avanços ainda são avanços ✨",
    "Você não está sozinho nessa jornada 🤍"
];

function novaFrase(){

    const frase = document.getElementById("frase");

    let index = Math.floor(Math.random() * frases.length);

    frase.innerText = frases[index];
}

/* =========================
   HUMOR DO DIA
========================= */

function mostrarMensagem(humor){

    const mensagem = document.getElementById("mensagemHumor");

    if(humor === "feliz"){
        mensagem.innerText = "Que ótimo! Continue cultivando esse sentimento 🌞";
    }

    else if(humor === "normal"){
        mensagem.innerText = "Tudo bem não estar no seu melhor todos os dias 🌿";
    }

    else if(humor === "triste"){
        mensagem.innerText = "Sinto muito... respire fundo, isso vai passar 💙 Você não está sozinho.";
    }
}

/* =========================
   RESPIRAÇÃO GUIADA
========================= */

let respirando = false;
let intervalo;

function iniciarRespiracao(){

    const circulo = document.querySelector(".circulo");

    if(!respirando){

        respirando = true;

        let estado = true; // inspirar ou expirar

        intervalo = setInterval(() => {

            if(estado){
                circulo.style.transform = "scale(1.3)";
                circulo.style.transition = "4s";
            } else {
                circulo.style.transform = "scale(1)";
            }

            estado = !estado;

        }, 4000);

    } else {

        clearInterval(intervalo);

        respirando = false;

    }
}

/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const botaoTopo = document.createElement("button");

botaoTopo.innerText = "↑";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.padding = "15px";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.border = "none";
botaoTopo.style.background = "#2ecc71";
botaoTopo.style.color = "white";
botaoTopo.style.fontSize = "18px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";

document.body.appendChild(botaoTopo);

botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});

/* =========================
   PEQUENA ANIMAÇÃO DE ENTRADA
========================= */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "1s";

        document.body.style.opacity = "1";

    }, 200);

});