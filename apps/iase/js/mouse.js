const grid = document.getElementById("mouseGrid");

const nivelTexto = document.getElementById("nivel");
const pontosTexto = document.getElementById("pontos");
const totalTexto = document.getElementById("total");
const mensagemNivel = document.getElementById("mensagemNivel");

let tamanhoGrid = 4;

let pontosNivel = 0;

let pontosTotal = 0;

let alvoAtual = null;

let jogoFinalizado = false;

function pontosNecessarios() {
  return tamanhoGrid + 1;
}

function criarGrid() {
  grid.innerHTML = "";

  grid.style.gridTemplateColumns = `repeat(${tamanhoGrid}, 1fr)`;

  grid.style.gridTemplateRows = `repeat(${tamanhoGrid}, 1fr)`;

  // Diminui o espaço entre os quadrados
  // conforme a quantidade aumenta.

  let gap = 5;

  if (tamanhoGrid >= 10) gap = 4;
  if (tamanhoGrid >= 20) gap = 3;
  if (tamanhoGrid >= 30) gap = 2;

  grid.style.gap = gap + "px";

  const quantidade = tamanhoGrid * tamanhoGrid;

  for (let i = 0; i < quantidade; i++) {
    const quadrado = document.createElement("button");

    quadrado.classList.add("mouse-square");

    quadrado.setAttribute("aria-label", "Quadrado de treinamento");

    quadrado.addEventListener("click", function () {
      clicarQuadrado(quadrado);
    });

    grid.appendChild(quadrado);
  }

  escolherNovoAlvo();

  atualizarInterface();
}

function escolherNovoAlvo() {
  if (jogoFinalizado) return;

  const quadrados = document.querySelectorAll(".mouse-square");

  if (alvoAtual) {
    alvoAtual.classList.remove("target");
  }

  let novoAlvo;

  do {
    const indice = Math.floor(Math.random() * quadrados.length);

    novoAlvo = quadrados[indice];
  } while (novoAlvo === alvoAtual && quadrados.length > 1);

  alvoAtual = novoAlvo;

  alvoAtual.classList.add("target");
}

function clicarQuadrado(quadrado) {
  if (jogoFinalizado) return;

  if (quadrado !== alvoAtual) {
    return;
  }

  pontosNivel++;

  pontosTotal++;

  if (pontosNivel >= pontosNecessarios()) {
    subirNivel();

    return;
  }

  atualizarInterface();

  escolherNovoAlvo();
}

function subirNivel() {
  pontosNivel = 0;

  if (tamanhoGrid >= 40) {
    finalizarJogo();

    return;
  }

  tamanhoGrid++;

  mostrarMensagem(`Muito bem! Agora ${tamanhoGrid} x ${tamanhoGrid}`);

  criarGrid();
}

function atualizarInterface() {
  nivelTexto.textContent = `${tamanhoGrid} x ${tamanhoGrid}`;

  pontosTexto.textContent = `${pontosNivel} / ${pontosNecessarios()}`;

  totalTexto.textContent = pontosTotal;
}

function mostrarMensagem(texto) {
  mensagemNivel.textContent = texto;

  mensagemNivel.classList.add("mostrar");

  setTimeout(function () {
    mensagemNivel.classList.remove("mostrar");
  }, 1800);
}

function finalizarJogo() {
  jogoFinalizado = true;

  atualizarInterface();

  mensagemNivel.innerHTML = `
        Parabéns! Você completou o nível máximo 40 x 40.
    `;

  mensagemNivel.classList.add("mostrar", "final");

  if (alvoAtual) {
    alvoAtual.classList.remove("target");
  }
}

criarGrid();
