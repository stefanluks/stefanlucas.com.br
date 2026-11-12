const frases = [
  // NÍVEL INICIAL

  "O mouse está na mesa.",

  "Use o teclado.",

  "Abra o computador.",

  "Ligue o monitor.",

  "Mova o mouse.",

  "Clique no botão.",

  "Abra uma pasta.",

  "Salve o arquivo.",

  "Feche a janela.",

  "Use o teclado com calma.",

  // INFORMÁTICA BÁSICA

  "O computador recebe dados.",

  "O monitor mostra imagens.",

  "O teclado permite escrever.",

  "O mouse controla o ponteiro.",

  "Uma pasta organiza arquivos.",

  "Um arquivo pode ser salvo.",

  "O sistema possui programas.",

  "O usuário controla o computador.",

  "A área de trabalho possui ícones.",

  "O navegador permite acessar sites.",

  // PEÇAS DO COMPUTADOR

  "O processador executa instruções.",

  "A memória RAM armazena dados temporários.",

  "O SSD pode armazenar arquivos.",

  "A placa-mãe conecta os componentes.",

  "A fonte fornece energia ao computador.",

  "O gabinete protege os componentes.",

  "O cooler ajuda a resfriar o processador.",

  "O monitor utiliza uma placa de vídeo.",

  "O teclado é um dispositivo de entrada.",

  "A impressora é um dispositivo de saída.",

  // SENAI

  "O SENAI oferece educação profissional.",

  "No SENAI aprendemos novas tecnologias.",

  "A tecnologia está presente nas empresas.",

  "Os alunos desenvolvem novas habilidades.",

  "A informática ajuda no ambiente de trabalho.",

  "O conhecimento transforma oportunidades.",

  "A prática ajuda no aprendizado de informática.",

  "Os computadores são importantes nas empresas.",

  "O SENAI prepara profissionais para o mercado.",

  "A tecnologia pode melhorar processos de trabalho.",

  // SOFTWARE DE ESCRITÓRIO

  "Um editor de texto permite criar documentos.",

  "Uma planilha permite organizar dados em tabelas.",

  "Uma apresentação pode utilizar textos e imagens.",

  "Os arquivos devem ser organizados em pastas.",

  "Salvar o documento evita perder o trabalho realizado.",

  "Copiar e colar são operações comuns no computador.",

  "O usuário pode selecionar textos utilizando o mouse.",

  "Um documento pode possuir diferentes tipos de formatação.",

  "As planilhas podem realizar cálculos automaticamente.",

  "As apresentações ajudam a comunicar ideias de forma visual.",

  // INTERMEDIÁRIO

  "O sistema operacional controla os recursos do computador.",

  "O processador interpreta e executa instruções dos programas.",

  "A memória RAM guarda informações enquanto o computador está ligado.",

  "Os dispositivos de entrada enviam informações para o computador.",

  "Os dispositivos de saída apresentam informações para o usuário.",

  "Organizar corretamente os arquivos facilita encontrar documentos.",

  "Utilizar atalhos do teclado pode aumentar a produtividade no trabalho.",

  "Um bom profissional deve aprender a utilizar diferentes ferramentas digitais.",

  "Os computadores podem ser utilizados para estudar, trabalhar, criar e comunicar.",

  "A informática básica desenvolve habilidades importantes para diferentes profissões.",

  // AVANÇADO

  "Antes de desligar o computador, é importante salvar todos os documentos que estiverem abertos.",

  "Uma boa organização de arquivos utiliza nomes claros e pastas separadas por assunto.",

  "O uso correto do teclado e do mouse pode aumentar a velocidade na realização das atividades.",

  "Os programas de escritório são utilizados para criar textos, planilhas, apresentações e documentos.",

  "Aprender informática ajuda o profissional a utilizar recursos digitais de maneira mais eficiente.",

  "A segurança digital depende de cuidados como utilizar senhas fortes e evitar arquivos desconhecidos.",

  "Os alunos do SENAI desenvolvem competências técnicas por meio de atividades práticas e desafios.",

  "A tecnologia da informação está presente em praticamente todos os setores das empresas modernas.",

  "O computador é formado por diferentes componentes que trabalham juntos para executar programas.",

  "O conhecimento sobre hardware e software facilita a utilização e manutenção dos computadores.",

  // CARACTERES ESPECIAIS

  "Atenção: digite com calma, precisão e foco!",

  "Você salvou o arquivo? Confira a pasta correta.",

  "Atalho útil: pressione Ctrl + S para salvar.",

  "O e-mail profissional usa o formato nome@empresa.com.",

  "Evite senhas como 123456; prefira combinações fortes.",

  "A placa-mãe custa R$ 450,00 em promoção.",

  "Use palavras-chave: hardware, software e segurança.",

  "O arquivo relatório-final_v2.docx está pronto.",

  "Cuidado com links desconhecidos (eles podem ser perigosos)!",

  "Tecnologia + prática = mais oportunidades.",
];

let fraseAtual = 0;

let acertos = 0;

let erros = 0;

const fraseElemento = document.getElementById("frase");

const campo = document.getElementById("campoDigitacao");

const proximaTecla = document.getElementById("proximaTecla");

const dedoRecomendado = document.getElementById("dedoRecomendado");

const numeroFrase = document.getElementById("fraseNumero");

const acertosElemento = document.getElementById("acertos");

const errosElemento = document.getElementById("erros");

const barraProgresso = document.getElementById("barraProgresso");

const mensagem = document.getElementById("mensagemDigitacao");

const mapaDedos = {
  // MÃO ESQUERDA

  q: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  a: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  z: {
    dedo: "left-pinky",
    nome: "Mínimo esquerdo",
  },

  w: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  s: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  x: {
    dedo: "left-ring",
    nome: "Anelar esquerdo",
  },

  e: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  d: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  c: {
    dedo: "left-middle",
    nome: "Médio esquerdo",
  },

  r: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  f: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  v: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  t: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  g: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  b: {
    dedo: "left-index",
    nome: "Indicador esquerdo",
  },

  // MÃO DIREITA

  y: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  h: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  n: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  u: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  j: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  m: {
    dedo: "right-index",
    nome: "Indicador direito",
  },

  i: {
    dedo: "right-middle",
    nome: "Médio direito",
  },

  k: {
    dedo: "right-middle",
    nome: "Médio direito",
  },

  o: {
    dedo: "right-ring",
    nome: "Anelar direito",
  },

  l: {
    dedo: "right-ring",
    nome: "Anelar direito",
  },

  p: {
    dedo: "right-pinky",
    nome: "Mínimo direito",
  },

  ç: {
    dedo: "right-pinky",
    nome: "Mínimo direito",
  },

  " ": {
    dedo: "thumb",
    nome: "Polegar",
  },
};

function carregarFrase() {
  campo.value = "";

  campo.classList.remove("erro");

  mensagem.textContent = "";

  numeroFrase.textContent = `${fraseAtual + 1} / ${frases.length}`;

  atualizarFrase();

  atualizarDedo();

  atualizarProgresso();

  campo.focus();
}

function atualizarFrase() {
  const frase = frases[fraseAtual];

  const textoDigitado = campo.value;

  fraseElemento.innerHTML = "";

  for (let i = 0; i < frase.length; i++) {
    const span = document.createElement("span");

    span.textContent = frase[i];

    if (i < textoDigitado.length && textoDigitado[i] === frase[i]) {
      span.classList.add("char-correto");
    } else if (i < textoDigitado.length) {
      span.classList.add("char-errado");
    } else if (i === textoDigitado.length) {
      span.classList.add("char-atual");
    }

    fraseElemento.appendChild(span);
  }
}

function verificarDigitacao() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  atualizarFrase();

  if (frase.startsWith(digitado)) {
    campo.classList.remove("erro");

    if (digitado === frase) {
      concluirFrase();

      return;
    }
  } else {
    erroDigitacao();
  }

  atualizarDedo();

  atualizarProgresso();
}

function erroDigitacao() {
  erros++;

  errosElemento.textContent = erros;

  campo.classList.add("erro");

  tremerTela();
}

function tremerTela() {
  document.body.classList.remove("shake");

  // Força o navegador a reiniciar
  // a animação.

  void document.body.offsetWidth;

  document.body.classList.add("shake");

  setTimeout(function () {
    document.body.classList.remove("shake");
  }, 450);
}

function escolherProximaFrase() {
  let proximaFrase;

  do {
    proximaFrase = Math.floor(Math.random() * frases.length);
  } while (proximaFrase === fraseAtual && frases.length > 1);

  fraseAtual = proximaFrase;
}

function concluirFrase() {
  acertos++;

  acertosElemento.textContent = acertos;

  mensagem.textContent = "Frase concluída!";

  mensagem.classList.add("sucesso");

  campo.disabled = true;

  barraProgresso.style.width = "100%";

  setTimeout(function () {
    escolherProximaFrase();

    campo.disabled = false;

    mensagem.classList.remove("sucesso");

    carregarFrase();
  }, 900);
}

function atualizarDedo() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  let posicao = 0;

  while (posicao < digitado.length && digitado[posicao] === frase[posicao]) {
    posicao++;
  }

  if (posicao >= frase.length) {
    return;
  }

  let letra = frase[posicao].toLowerCase();

  proximaTecla.textContent = letra === " " ? "ESPAÇO" : letra.toUpperCase();

  removerDestaqueDedos();

  const info = mapaDedos[letra];

  if (info) {
    dedoRecomendado.textContent = info.nome;

    const dedos = document.querySelectorAll(`[data-finger="${info.dedo}"]`);

    dedos.forEach(function (dedo) {
      dedo.classList.add("active");
    });
  } else {
    dedoRecomendado.textContent = "Observe a tecla";
  }
}

function removerDestaqueDedos() {
  document.querySelectorAll(".finger").forEach(function (finger) {
    finger.classList.remove("active");
  });
}

function atualizarProgresso() {
  const frase = frases[fraseAtual];

  const digitado = campo.value;

  let corretos = 0;

  for (let i = 0; i < digitado.length; i++) {
    if (digitado[i] === frase[i]) {
      corretos++;
    } else {
      break;
    }
  }

  const porcentagem = (corretos / frase.length) * 100;

  barraProgresso.style.width = porcentagem + "%";
}

campo.addEventListener("input", verificarDigitacao);

campo.addEventListener("paste", function (evento) {
  evento.preventDefault();
});

document.addEventListener("click", function () {
  campo.focus();
});

carregarFrase();
