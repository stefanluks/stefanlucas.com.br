const DURACAO_PARTIDA = 45;
const TECLAS = ["a", "s", "d", "f", "j", "k", "l"];
const CHAVE_RECORDE = "desafio-relampago-recorde";

const botaoJogar = document.getElementById("botaoJogar");
const arena = document.getElementById("arena");
const alvo = document.getElementById("alvo");
const mensagemArena = document.getElementById("mensagemArena");
const comando = document.getElementById("comando");
const feedback = document.getElementById("feedback");
const tempoTexto = document.getElementById("tempo");
const pontuacaoTexto = document.getElementById("pontuacao");
const comboTexto = document.getElementById("combo");
const recordeTexto = document.getElementById("recorde");

let tempoRestante = DURACAO_PARTIDA;
let pontuacao = 0;
let combo = 0;
let teclaAtual = "";
let alvoClicado = false;
let inicioDoAlvo = 0;
let intervaloTempo = null;
let partidaAtiva = false;

function lerRecorde() {
  return Number(localStorage.getItem(CHAVE_RECORDE)) || 0;
}

function atualizarInterface() {
  tempoTexto.textContent = tempoRestante;
  pontuacaoTexto.textContent = pontuacao;
  comboTexto.textContent = combo;
  recordeTexto.textContent = lerRecorde();
  tempoTexto.parentElement.classList.toggle("warning", tempoRestante <= 10);
}

function iniciarPartida() {
  tempoRestante = DURACAO_PARTIDA;
  pontuacao = 0;
  combo = 0;
  partidaAtiva = true;
  botaoJogar.textContent = "Partida em andamento";
  botaoJogar.classList.add("playing");
  botaoJogar.disabled = true;
  mensagemArena.hidden = true;
  atualizarInterface();
  feedback.textContent = "Clique no alvo azul e depois pressione a tecla mostrada.";
  comando.textContent = "Prepare-se!";

  clearInterval(intervaloTempo);
  intervaloTempo = setInterval(contarTempo, 1000);
  criarAlvo();
}

function contarTempo() {
  tempoRestante--;
  atualizarInterface();

  if (tempoRestante <= 0) {
    finalizarPartida();
  }
}

function criarAlvo() {
  if (!partidaAtiva) return;

  teclaAtual = TECLAS[Math.floor(Math.random() * TECLAS.length)];
  alvoClicado = false;
  inicioDoAlvo = Date.now();
  alvo.textContent = teclaAtual.toUpperCase();
  alvo.setAttribute("aria-label", `Clique no alvo e pressione a tecla ${teclaAtual}`);
  alvo.classList.remove("waiting", "miss");
  alvo.classList.add("visible");

  const margem = 12;
  const posicaoX = margem + Math.random() * (100 - margem * 2);
  const posicaoY = margem + Math.random() * (100 - margem * 2);
  alvo.style.left = `${posicaoX}%`;
  alvo.style.top = `${posicaoY}%`;
  comando.textContent = `Clique e pressione: ${teclaAtual.toUpperCase()}`;
}

function clicarAlvo() {
  if (!partidaAtiva || alvoClicado) return;

  alvoClicado = true;
  alvo.classList.add("waiting");
  alvo.textContent = teclaAtual.toUpperCase();
  comando.textContent = `Agora pressione ${teclaAtual.toUpperCase()}`;
  feedback.textContent = "A tecla certa mantém seu combo vivo.";
}

function processarTecla(evento) {
  if (!partidaAtiva || !alvoClicado) return;

  const teclaPressionada = evento.key.toLowerCase();

  if (teclaPressionada === teclaAtual) {
    registrarAcerto();
  } else if (teclaPressionada.length === 1) {
    registrarErro();
  }
}

function registrarAcerto() {
  const tempoDeReacao = Date.now() - inicioDoAlvo;
  const bonusVelocidade = Math.max(0, 80 - Math.floor(tempoDeReacao / 100));
  const bonusCombo = combo * 10;
  const pontosGanhos = 100 + bonusVelocidade + bonusCombo;

  combo++;
  pontuacao += pontosGanhos;
  feedback.textContent = `+${pontosGanhos} pontos! Reação de ${formatarTempo(tempoDeReacao)}.`;
  atualizarInterface();
  criarAlvo();
}

function registrarErro() {
  combo = 0;
  pontuacao = Math.max(0, pontuacao - 25);
  tempoRestante = Math.max(0, tempoRestante - 2);
  alvo.classList.add("miss");
  feedback.textContent = "Tecla errada: -25 pontos e -2 segundos.";
  atualizarInterface();

  if (tempoRestante <= 0) {
    finalizarPartida();
    return;
  }

  setTimeout(criarAlvo, 220);
}

function finalizarPartida() {
  if (!partidaAtiva) return;

  partidaAtiva = false;
  clearInterval(intervaloTempo);
  alvo.classList.remove("visible", "waiting", "miss");
  botaoJogar.disabled = false;
  botaoJogar.textContent = "Jogar novamente";
  botaoJogar.classList.remove("playing");

  const recordeAtual = lerRecorde();
  if (pontuacao > recordeAtual) {
    localStorage.setItem(CHAVE_RECORDE, pontuacao);
    feedback.textContent = `Novo recorde: ${pontuacao} pontos!`;
  } else {
    feedback.textContent = `Partida encerrada com ${pontuacao} pontos.`;
  }

  mensagemArena.hidden = false;
  mensagemArena.querySelector("strong").textContent = "Tempo esgotado!";
  mensagemArena.querySelector("span").textContent = "Jogue novamente e tente superar seu recorde.";
  comando.textContent = "Fim de jogo";
  atualizarInterface();
}

function formatarTempo(milissegundos) {
  return `${(milissegundos / 1000).toFixed(1).replace(".", ",")}s`;
}

botaoJogar.addEventListener("click", iniciarPartida);
alvo.addEventListener("click", clicarAlvo);
document.addEventListener("keydown", processarTecla);
atualizarInterface();
