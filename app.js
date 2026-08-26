import HabilidadeGame from "./public/config/HabilidadeGame.js";

window.onload = () => {
    const disparo = new Audio('./public/sons/disparo.wav');
    const explosao = new Audio('./public/sons/explosion.wav');
    const colisao = new Audio('./public/sons/colisao.wav');

    const habilidade = document.querySelector(".habilidades");
    const jogoHabilidade = new HabilidadeGame(document.createElement("canvas"));
    habilidade.addEventListener("click", () => {
        habilidade.classList.add("jogavel");
        setTimeout(() => {
            habilidade.innerHTML = `<div class="btns-game"><div>Reiniciar</div><div>Fechar</div></div>`;
            habilidade.appendChild(jogoHabilidade.getCanvas());
            jogoHabilidade.start();
        }, 1000);
    })
}