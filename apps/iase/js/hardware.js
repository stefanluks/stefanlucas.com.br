const canvas = document.getElementById("gameCanvas");

const ctx = canvas.getContext("2d");

const pontosElemento = document.getElementById("pontos");

const restantesElemento = document.getElementById("restantes");

const vidasElemento = document.getElementById("vidas");

const mensagemElemento = document.getElementById("mensagem");

const modalFim = document.getElementById("modalFim");

const tituloFim = document.getElementById("tituloFim");

const textoFim = document.getElementById("textoFim");

const botaoReiniciar = document.getElementById("reiniciar");

/* ==========================
   CONFIGURAÇÕES
========================== */

const TILE = 32;

const COLUNAS = 20;

const LINHAS = 14;

canvas.width = COLUNAS * TILE;

canvas.height = LINHAS * TILE;

let pontos = 0;

let vidas = 3;

let jogoRodando = true;

/* ==========================
   IMAGENS
========================== */

const imagens = {};

const arquivos = {
  player: "assets/hardware/player.png",

  virus: "assets/hardware/virus.png",

  cpu: "assets/hardware/cpu.png",

  placaMae: "assets/hardware/placa-mae.png",

  ram: "assets/hardware/ram.png",

  ssd: "assets/hardware/ssd.png",

  hd: "assets/hardware/hd.png",

  gpu: "assets/hardware/gpu.png",

  fonte: "assets/hardware/fonte.png",

  cooler: "assets/hardware/cooler.png",

  mouse: "assets/hardware/mouse.png",

  teclado: "assets/hardware/teclado.png",

  monitor: "assets/hardware/monitor.png",

  impressora: "assets/hardware/impressora.png",

  webcam: "assets/hardware/webcam.png",

  headset: "assets/hardware/headset.png",
};

function carregarImagens() {
  for (const nome in arquivos) {
    const img = new Image();

    img.src = arquivos[nome];

    imagens[nome] = img;
  }
}

carregarImagens();

/* ==========================
   MAPA
========================== */

const mapa = [];

function criarMapa() {
  for (let y = 0; y < LINHAS; y++) {
    mapa[y] = [];

    for (let x = 0; x < COLUNAS; x++) {
      if (x === 0 || y === 0 || x === COLUNAS - 1 || y === LINHAS - 1) {
        mapa[y][x] = 1;
      } else {
        mapa[y][x] = 0;
      }
    }
  }

  /*
        Paredes verticais
    */

  for (let y = 2; y < 12; y++) {
    if (y !== 4 && y !== 8) {
      mapa[y][5] = 1;
    }
  }

  for (let y = 2; y < 12; y++) {
    if (y !== 3 && y !== 9) {
      mapa[y][14] = 1;
    }
  }

  /*
        Paredes horizontais
    */

  for (let x = 2; x < 12; x++) {
    if (x !== 5 && x !== 9) {
      mapa[4][x] = 1;
    }
  }

  for (let x = 8; x < 18; x++) {
    if (x !== 11 && x !== 14) {
      mapa[9][x] = 1;
    }
  }

  for (let x = 2; x < 10; x++) {
    if (x !== 5) {
      mapa[11][x] = 1;
    }
  }
}

criarMapa();

/* ==========================
   PLAYER
========================== */

const inicioPlayer = {
  x: 1,
  y: 1,
};

const player = {
  x: inicioPlayer.x,

  y: inicioPlayer.y,

  direcao: {
    x: 0,
    y: 0,
  },
};

/* ==========================
   COMPONENTES CORRETOS
========================== */

const componentes = [
  {
    tipo: "cpu",
    nome: "Processador",
  },

  {
    tipo: "placaMae",
    nome: "Placa-mãe",
  },

  {
    tipo: "ram",
    nome: "Memória RAM",
  },

  {
    tipo: "ssd",
    nome: "SSD",
  },

  {
    tipo: "hd",
    nome: "HD",
  },

  {
    tipo: "gpu",
    nome: "Placa de vídeo",
  },

  {
    tipo: "fonte",
    nome: "Fonte de alimentação",
  },

  {
    tipo: "cooler",
    nome: "Cooler",
  },
];

/* ==========================
   PERIFÉRICOS
========================== */

const perifericos = [
  {
    tipo: "mouse",
    nome: "Mouse",
  },

  {
    tipo: "teclado",
    nome: "Teclado",
  },

  {
    tipo: "monitor",
    nome: "Monitor",
  },

  {
    tipo: "impressora",
    nome: "Impressora",
  },

  {
    tipo: "webcam",
    nome: "Webcam",
  },

  {
    tipo: "headset",
    nome: "Headset",
  },
];

let objetos = [];

let virus = [];

/* ==========================
   POSIÇÕES
========================== */

function celulaLivreAleatoria(ocupados) {
  let x;
  let y;

  let chave;

  do {
    x = Math.floor(Math.random() * (COLUNAS - 2)) + 1;

    y = Math.floor(Math.random() * (LINHAS - 2)) + 1;

    chave = `${x}-${y}`;
  } while (
    mapa[y][x] === 1 ||
    ocupados.has(chave) ||
    (x === inicioPlayer.x && y === inicioPlayer.y)
  );

  ocupados.add(chave);

  return {
    x,
    y,
  };
}

/* ==========================
   CRIAR OBJETOS
========================== */

function posicionarObjetos() {
  objetos = [];

  virus = [];

  const ocupados = new Set();

  ocupados.add(`${inicioPlayer.x}-${inicioPlayer.y}`);

  componentes.forEach((componente) => {
    const pos = celulaLivreAleatoria(ocupados);

    objetos.push({
      ...componente,

      ...pos,

      correto: true,

      coletado: false,
    });
  });

  perifericos.forEach((periferico) => {
    const pos = celulaLivreAleatoria(ocupados);

    objetos.push({
      ...periferico,

      ...pos,

      correto: false,

      coletado: false,
    });
  });

  /*
        Três vírus
    */

  for (let i = 0; i < 3; i++) {
    const pos = celulaLivreAleatoria(ocupados);

    virus.push({
      x: pos.x,

      y: pos.y,
    });
  }
}

/* ==========================
   DESENHAR MAPA
========================== */

function desenharMapa() {
  for (let y = 0; y < LINHAS; y++) {
    for (let x = 0; x < COLUNAS; x++) {
      const px = x * TILE;

      const py = y * TILE;

      if (mapa[y][x] === 1) {
        ctx.fillStyle = "#1e3a8a";

        ctx.fillRect(px, py, TILE, TILE);

        ctx.strokeStyle = "#3b82f6";

        ctx.strokeRect(px + 3, py + 3, TILE - 6, TILE - 6);
      } else {
        ctx.fillStyle = "#101827";

        ctx.fillRect(px, py, TILE, TILE);
      }
    }
  }
}

/* ==========================
   DESENHAR PNG
========================== */

function desenharImagem(img, x, y, fallback) {
  const px = x * TILE;

  const py = y * TILE;

  if (img && img.complete && img.naturalWidth > 0) {
    ctx.drawImage(
      img,

      px + 3,

      py + 3,

      TILE - 6,

      TILE - 6,
    );
  } else {
    /*
            Fallback caso uma imagem
            ainda não esteja na pasta.
        */

    ctx.fillStyle = "#facc15";

    ctx.beginPath();

    ctx.arc(
      px + TILE / 2,

      py + TILE / 2,

      TILE / 3,

      0,

      Math.PI * 2,
    );

    ctx.fill();

    ctx.fillStyle = "#111827";

    ctx.font = "bold 12px Arial";

    ctx.textAlign = "center";

    ctx.textBaseline = "middle";

    ctx.fillText(
      fallback,

      px + TILE / 2,

      py + TILE / 2,
    );
  }
}

/* ==========================
   DESENHAR OBJETOS
========================== */

function desenharObjetos() {
  objetos.forEach((objeto) => {
    if (objeto.coletado) {
      return;
    }

    desenharImagem(
      imagens[objeto.tipo],

      objeto.x,

      objeto.y,

      objeto.correto ? "PC" : "?",
    );
  });
}

/* ==========================
   DESENHAR PLAYER
========================== */

function desenharPlayer() {
  desenharImagem(
    imagens.player,

    player.x,

    player.y,

    "P",
  );
}

/* ==========================
   DESENHAR VÍRUS
========================== */

function desenharVirus() {
  virus.forEach((inimigo) => {
    desenharImagem(
      imagens.virus,

      inimigo.x,

      inimigo.y,

      "V",
    );
  });
}

/* ==========================
   COLISÃO COM PAREDE
========================== */

function podeMover(x, y) {
  if (x < 0 || y < 0 || x >= COLUNAS || y >= LINHAS) {
    return false;
  }

  return mapa[y][x] === 0;
}

/* ==========================
   MOVIMENTAÇÃO
========================== */

function moverPlayer() {
  if (!jogoRodando) {
    return;
  }

  const novoX = player.x + player.direcao.x;

  const novoY = player.y + player.direcao.y;

  if (podeMover(novoX, novoY)) {
    player.x = novoX;

    player.y = novoY;

    verificarObjetos();

    verificarVirus();
  }
}

/* ==========================
   COMPONENTES
========================== */

let ultimoPeriferico = "";

function verificarObjetos() {
  objetos.forEach((objeto) => {
    if (objeto.coletado) {
      return;
    }

    if (player.x === objeto.x && player.y === objeto.y) {
      if (objeto.correto) {
        objeto.coletado = true;

        pontos++;

        mensagemElemento.className = "mensagem acerto";

        mensagemElemento.textContent = `Correto! ${objeto.nome} é um componente interno.`;

        ultimoPeriferico = "";

        atualizarPainel();

        verificarVitoria();
      } else {
        const id = `${objeto.x}-${objeto.y}`;

        if (ultimoPeriferico !== id) {
          mensagemElemento.className = "mensagem erro";

          mensagemElemento.textContent = `${objeto.nome} é um periférico. Não deve ser devorado!`;

          ultimoPeriferico = id;
        }
      }
    }
  });
}

/* ==========================
   MOVIMENTAÇÃO DOS VÍRUS
========================== */

function moverVirus() {
  if (!jogoRodando) {
    return;
  }

  const direcoes = [
    {
      x: 1,
      y: 0,
    },

    {
      x: -1,
      y: 0,
    },

    {
      x: 0,
      y: 1,
    },

    {
      x: 0,
      y: -1,
    },
  ];

  virus.forEach((inimigo) => {
    const possiveis = direcoes.filter((direcao) => {
      return podeMover(
        inimigo.x + direcao.x,

        inimigo.y + direcao.y,
      );
    });

    if (possiveis.length === 0) {
      return;
    }

    const direcao = possiveis[Math.floor(Math.random() * possiveis.length)];

    inimigo.x += direcao.x;

    inimigo.y += direcao.y;
  });

  verificarVirus();
}

/* ==========================
   VÍRUS
========================== */

function verificarVirus() {
  const atingido = virus.some((inimigo) => {
    return inimigo.x === player.x && inimigo.y === player.y;
  });

  if (atingido) {
    perderVida();
  }
}

function perderVida() {
  vidas--;

  atualizarPainel();

  mensagemElemento.className = "mensagem erro";

  mensagemElemento.textContent = "Cuidado! Você encontrou um vírus.";

  player.x = inicioPlayer.x;

  player.y = inicioPlayer.y;

  player.direcao = {
    x: 0,

    y: 0,
  };

  if (vidas <= 0) {
    finalizarDerrota();
  }
}

/* ==========================
   CONTROLE DO TECLADO
========================== */

document.addEventListener(
  "keydown",

  (evento) => {
    if (!jogoRodando) {
      return;
    }

    switch (evento.key) {
      case "ArrowUp":
        player.direcao = {
          x: 0,

          y: -1,
        };

        evento.preventDefault();

        break;

      case "ArrowDown":
        player.direcao = {
          x: 0,

          y: 1,
        };

        evento.preventDefault();

        break;

      case "ArrowLeft":
        player.direcao = {
          x: -1,

          y: 0,
        };

        evento.preventDefault();

        break;

      case "ArrowRight":
        player.direcao = {
          x: 1,

          y: 0,
        };

        evento.preventDefault();

        break;
    }
  },
);

/* ==========================
   PAINEL
========================== */

function atualizarPainel() {
  pontosElemento.textContent = pontos;

  vidasElemento.textContent = vidas;

  const restantes = objetos.filter(
    (objeto) => objeto.correto && !objeto.coletado,
  ).length;

  restantesElemento.textContent = restantes;
}

/* ==========================
   VITÓRIA
========================== */

function verificarVitoria() {
  const restantes = objetos.filter(
    (objeto) => objeto.correto && !objeto.coletado,
  );

  if (restantes.length === 0) {
    jogoRodando = false;

    tituloFim.textContent = "Parabéns!";

    textoFim.textContent = `Você encontrou todos os ${componentes.length} componentes internos do computador.`;

    modalFim.classList.remove("escondido");
  }
}

/* ==========================
   DERROTA
========================== */

function finalizarDerrota() {
  jogoRodando = false;

  tituloFim.textContent = "Fim de jogo";

  textoFim.textContent =
    "Os vírus pegaram você. Tente novamente e encontre todos os componentes internos.";

  modalFim.classList.remove("escondido");
}

/* ==========================
   REINICIAR
========================== */

function reiniciarJogo() {
  pontos = 0;

  vidas = 3;

  jogoRodando = true;

  player.x = inicioPlayer.x;

  player.y = inicioPlayer.y;

  player.direcao = {
    x: 0,

    y: 0,
  };

  mensagemElemento.className = "mensagem";

  mensagemElemento.textContent = "Use as setas do teclado para começar.";

  modalFim.classList.add("escondido");

  posicionarObjetos();

  atualizarPainel();
}

botaoReiniciar.addEventListener(
  "click",

  reiniciarJogo,
);

/* ==========================
   LOOP
========================== */

function desenhar() {
  desenharMapa();

  desenharObjetos();

  desenharVirus();

  desenharPlayer();
}

/*
    Movimento do jogador
*/

setInterval(
  function () {
    moverPlayer();
  },

  150,
);

/*
    Movimento dos vírus
*/

setInterval(
  function () {
    moverVirus();
  },

  400,
);

function loop() {
  desenhar();

  requestAnimationFrame(loop);
}

/* ==========================
   INICIAR
========================== */

posicionarObjetos();

atualizarPainel();

loop();
