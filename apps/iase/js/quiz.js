const TOTAL_QUESTOES = 15;

const bancoQuestoes = [
  {
    categoria: "HARDWARE",
    pergunta: "O que é hardware?",
    opcoes: ["A parte física do computador", "Um programa de edição", "Um arquivo de texto", "Uma conexão com a internet"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O que é software?",
    opcoes: ["A parte física do computador", "O conjunto de programas e instruções", "A mesa do computador", "A energia elétrica"],
    resposta: 1,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O teclado é um dispositivo de:",
    opcoes: ["Saída", "Armazenamento", "Entrada", "Refrigeração"],
    resposta: 2,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O monitor é um dispositivo de:",
    opcoes: ["Entrada", "Saída", "Processamento", "Proteção"],
    resposta: 1,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O mouse é usado principalmente para:",
    opcoes: ["Controlar o ponteiro e selecionar itens", "Armazenar arquivos", "Imprimir documentos", "Refrigerar o processador"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O headset é um componente externo ou interno?",
    opcoes: ["Interno", "Externo", "Parte da placa-mãe", "Parte da memória RAM"],
    resposta: 1,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Qual componente é responsável por executar instruções?",
    opcoes: ["Processador (CPU)", "Gabinete", "Monitor", "Teclado"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "A memória RAM é usada para:",
    opcoes: ["Guardar temporariamente dados em uso", "Exibir imagens na tela", "Imprimir textos", "Conectar o computador à tomada"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Qual componente armazena arquivos mesmo quando o computador está desligado?",
    opcoes: ["Memória RAM", "SSD ou HD", "Processador", "Cooler"],
    resposta: 1,
  },
  {
    categoria: "HARDWARE",
    pergunta: "A placa-mãe tem como função principal:",
    opcoes: ["Conectar os componentes do computador", "Mostrar imagens", "Digitar textos", "Emitir sons"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "A fonte de alimentação fornece:",
    opcoes: ["Energia elétrica aos componentes", "Acesso à internet", "Imagens para o monitor", "Comandos para o teclado"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O gabinete é responsável por:",
    opcoes: ["Proteger e acomodar componentes internos", "Criar apresentações", "Digitar acentos", "Navegar em sites"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Qual destes é um componente interno?",
    opcoes: ["Webcam", "Monitor", "Memória RAM", "Headset"],
    resposta: 2,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Qual destes é um periférico externo?",
    opcoes: ["Processador", "Placa-mãe", "SSD interno", "Impressora"],
    resposta: 3,
  },
  {
    categoria: "HARDWARE",
    pergunta: "O cooler ajuda a:",
    opcoes: ["Resfriar o processador e outros componentes", "Salvar documentos", "Controlar janelas", "Aumentar o tamanho da tela"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "A impressora é um dispositivo de:",
    opcoes: ["Entrada", "Saída", "Processamento", "Armazenamento interno"],
    resposta: 1,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Qual componente é conhecido como GPU?",
    opcoes: ["Placa de vídeo", "Memória RAM", "Fonte", "Placa de som"],
    resposta: 0,
  },
  {
    categoria: "HARDWARE",
    pergunta: "Um pendrive é usado principalmente para:",
    opcoes: ["Armazenar e transportar arquivos", "Exibir imagens", "Executar a refrigeração", "Substituir o teclado"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O que é o sistema operacional?",
    opcoes: ["O programa que gerencia o computador e seus recursos", "Um cabo de energia", "Um tipo de teclado", "Uma peça interna"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O Windows é um exemplo de:",
    opcoes: ["Sistema operacional", "Processador", "Periférico", "Arquivo de imagem"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "A área de trabalho do Windows é:",
    opcoes: ["A tela principal após iniciar o sistema", "Uma peça do computador", "Um tipo de impressora", "A memória do computador"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Os ícones na área de trabalho representam:",
    opcoes: ["Arquivos, pastas ou programas", "Somente peças internas", "A velocidade da internet", "A energia da fonte"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "A barra de tarefas do Windows permite:",
    opcoes: ["Acessar programas abertos e recursos do sistema", "Trocar a placa-mãe", "Aumentar a memória RAM fisicamente", "Imprimir sem impressora"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O Explorador de Arquivos é usado para:",
    opcoes: ["Organizar arquivos e pastas", "Resfriar o computador", "Criar energia", "Substituir o monitor"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "A Lixeira do Windows guarda temporariamente:",
    opcoes: ["Arquivos excluídos", "Senhas do usuário", "A memória RAM", "Programas em execução"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Para abrir um programa no Windows, normalmente podemos:",
    opcoes: ["Clicar ou dar duplo clique em seu ícone", "Desligar o monitor", "Retirar a memória RAM", "Pressionar o cabo de energia"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Uma janela no Windows é:",
    opcoes: ["Uma área na tela usada por um programa", "Uma peça de vidro do monitor", "Um tipo de arquivo físico", "Um componente da fonte"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O botão minimizar faz uma janela:",
    opcoes: ["Ir para a barra de tarefas sem fechá-la", "Ser apagada definitivamente", "Aumentar a memória", "Desligar o computador"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O botão maximizar faz uma janela:",
    opcoes: ["Ocupar uma área maior, geralmente a tela toda", "Ser excluída", "Virar um arquivo", "Desconectar a internet"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "O botão fechar de uma janela geralmente é representado por:",
    opcoes: ["X", "+", "=", "?"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Uma caixa de diálogo serve para:",
    opcoes: ["Exibir informações ou solicitar uma escolha do usuário", "Guardar energia", "Refrigerar a CPU", "Substituir o mouse"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Em uma caixa de diálogo, o botão Cancelar normalmente:",
    opcoes: ["Interrompe a ação sem confirmar a alteração", "Confirma sempre a alteração", "Desliga o monitor", "Abre o teclado virtual"],
    resposta: 0,
  },
  {
    categoria: "WINDOWS",
    pergunta: "Em uma caixa de diálogo, o botão OK geralmente:",
    opcoes: ["Confirma a escolha ou a operação", "Apaga o Windows", "Fecha todas as janelas", "Formata o computador"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + C é usado para:",
    opcoes: ["Copiar", "Colar", "Salvar", "Fechar"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + V é usado para:",
    opcoes: ["Colar", "Copiar", "Desfazer", "Selecionar tudo"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + X é usado para:",
    opcoes: ["Recortar", "Abrir uma janela", "Salvar", "Imprimir"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + Z normalmente desfaz:",
    opcoes: ["A última ação", "O computador inteiro", "A conexão de rede", "A área de trabalho"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + S é usado para:",
    opcoes: ["Salvar", "Selecionar tudo", "Sair do Windows", "Sublinhar sempre"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "O atalho Ctrl + A normalmente serve para:",
    opcoes: ["Selecionar tudo", "Abrir um arquivo", "Alinhar à direita", "Apagar uma pasta"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "A tecla Enter normalmente serve para:",
    opcoes: ["Confirmar uma ação ou iniciar uma nova linha", "Apagar o caractere anterior", "Copiar um arquivo", "Abrir o menu Iniciar"],
    resposta: 0,
  },
  {
    categoria: "ATALHOS",
    pergunta: "A tecla Esc costuma ser usada para:",
    opcoes: ["Cancelar ou sair de uma operação", "Colar um texto", "Salvar um arquivo", "Aumentar o volume"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "Para digitar uma letra maiúscula, podemos usar:",
    opcoes: ["Shift + letra", "Ctrl + letra", "Alt + letra", "Tab + letra"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "Para digitar o caractere @ em muitos teclados, usamos:",
    opcoes: ["Shift + 2", "Ctrl + 2", "Alt + 2", "Tab + 2"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "A tecla Backspace apaga normalmente:",
    opcoes: ["O caractere à esquerda do cursor", "O caractere à direita do cursor", "A linha inteira", "O arquivo aberto"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "A tecla Delete apaga normalmente:",
    opcoes: ["O caractere à direita do cursor ou um item selecionado", "Somente o caractere à esquerda", "O Windows inteiro", "A conexão de internet"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "Para digitar á, normalmente usamos:",
    opcoes: ["A tecla de acento agudo e depois a letra A", "Shift e depois a letra A", "Ctrl e depois a letra A", "A tecla Enter e depois A"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "Para digitar â, normalmente usamos:",
    opcoes: ["A tecla de acento circunflexo e depois a letra A", "A tecla Shift duas vezes", "Ctrl + A", "Alt + Enter"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "Para digitar ç em um teclado configurado em português, usamos:",
    opcoes: ["A tecla ç", "Ctrl + C", "Shift + C sempre", "A tecla Delete"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "A tecla Caps Lock serve para:",
    opcoes: ["Ativar ou desativar letras maiúsculas contínuas", "Apagar textos", "Salvar documentos", "Abrir uma caixa de diálogo"],
    resposta: 0,
  },
  {
    categoria: "DIGITAÇÃO",
    pergunta: "A barra de espaço é usada para:",
    opcoes: ["Inserir espaços entre palavras", "Apagar a palavra anterior", "Abrir o menu Arquivo", "Copiar um texto"],
    resposta: 0,
  },
];

const numeroQuestao = document.getElementById("numeroQuestao");
const acertosQuiz = document.getElementById("acertosQuiz");
const pontuacaoQuiz = document.getElementById("pontuacaoQuiz");
const categoriaQuestao = document.getElementById("categoriaQuestao");
const contadorBanco = document.getElementById("contadorBanco");
const pergunta = document.getElementById("pergunta");
const opcoes = document.getElementById("opcoes");
const formularioQuiz = document.getElementById("formularioQuiz");
const botaoResponder = document.getElementById("botaoResponder");
const mensagemQuiz = document.getElementById("mensagemQuiz");
const quizCard = document.getElementById("quizCard");
const resultadoQuiz = document.getElementById("resultadoQuiz");
const notaFinal = document.getElementById("notaFinal");
const resumoFinal = document.getElementById("resumoFinal");
const mensagemFinal = document.getElementById("mensagemFinal");
const revisaoQuiz = document.getElementById("revisaoQuiz");
const botaoNovoQuiz = document.getElementById("botaoNovoQuiz");

let perguntasDaTentativa = [];
let indiceAtual = 0;
let totalAcertos = 0;
let respostasDadas = [];

function embaralhar(lista) {
  const copia = [...lista];

  for (let indice = copia.length - 1; indice > 0; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * (indice + 1));
    [copia[indice], copia[indiceAleatorio]] = [copia[indiceAleatorio], copia[indice]];
  }

  return copia;
}

function iniciarQuiz() {
  perguntasDaTentativa = embaralhar(bancoQuestoes).slice(0, TOTAL_QUESTOES);
  indiceAtual = 0;
  totalAcertos = 0;
  respostasDadas = [];
  quizCard.hidden = false;
  resultadoQuiz.hidden = true;
  renderizarQuestao();
}

function renderizarQuestao() {
  const questao = perguntasDaTentativa[indiceAtual];

  numeroQuestao.textContent = `${indiceAtual + 1} / ${TOTAL_QUESTOES}`;
  acertosQuiz.textContent = totalAcertos;
  pontuacaoQuiz.textContent = `${Math.round((totalAcertos / TOTAL_QUESTOES) * 100)}%`;
  categoriaQuestao.textContent = questao.categoria;
  contadorBanco.textContent = `Questão ${indiceAtual + 1} de ${TOTAL_QUESTOES}`;
  pergunta.textContent = questao.pergunta;
  mensagemQuiz.textContent = "";
  botaoResponder.textContent = indiceAtual === TOTAL_QUESTOES - 1 ? "Finalizar quiz" : "Responder";
  opcoes.innerHTML = "";

  const opcoesEmbaralhadas = embaralhar(
    questao.opcoes.map(function (opcao, indiceOpcao) {
      return { texto: opcao, indiceOriginal: indiceOpcao };
    }),
  );

  opcoesEmbaralhadas.forEach(function (opcao) {
    const item = document.createElement("div");
    item.className = "quiz-option";
    item.innerHTML = `
      <input id="opcao-${opcao.indiceOriginal}" name="resposta" type="radio" value="${opcao.indiceOriginal}" />
      <label for="opcao-${opcao.indiceOriginal}">${opcao.texto}</label>
    `;
    opcoes.appendChild(item);
  });
}

function responderQuestao(evento) {
  evento.preventDefault();
  const respostaSelecionada = formularioQuiz.querySelector("input[name=\"resposta\"]:checked");

  if (!respostaSelecionada) {
    mensagemQuiz.textContent = "Selecione uma alternativa para continuar.";
    return;
  }

  const questao = perguntasDaTentativa[indiceAtual];
  const resposta = Number(respostaSelecionada.value);
  const acertou = resposta === questao.resposta;

  if (acertou) totalAcertos++;

  respostasDadas.push({ questao, resposta, acertou });
  indiceAtual++;

  if (indiceAtual >= TOTAL_QUESTOES) {
    mostrarResultado();
    return;
  }

  renderizarQuestao();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mostrarResultado() {
  const percentual = Math.round((totalAcertos / TOTAL_QUESTOES) * 100);

  acertosQuiz.textContent = totalAcertos;
  pontuacaoQuiz.textContent = `${percentual}%`;
  notaFinal.textContent = `${percentual}%`;
  resumoFinal.textContent = `${totalAcertos} de ${TOTAL_QUESTOES} respostas corretas`;
  mensagemFinal.textContent = mensagemDeDesempenho(percentual);
  revisaoQuiz.innerHTML = "";

  respostasDadas.forEach(function (resposta, indice) {
    const item = document.createElement("div");
    item.className = `review-item${resposta.acertou ? " correct" : ""}`;
    item.innerHTML = `
      <strong>${indice + 1}. ${resposta.questao.pergunta}</strong>
      <span>${resposta.acertou ? "Correta" : `Sua resposta: ${resposta.questao.opcoes[resposta.resposta]} | Correta: ${resposta.questao.opcoes[resposta.questao.resposta]}`}</span>
    `;
    revisaoQuiz.appendChild(item);
  });

  quizCard.hidden = true;
  resultadoQuiz.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function mensagemDeDesempenho(percentual) {
  if (percentual === 100) return "Excelente! Você dominou os conceitos desta tentativa.";
  if (percentual >= 80) return "Muito bem! Seu conhecimento de informática básica está forte.";
  if (percentual >= 60) return "Bom trabalho! Revise os itens errados para melhorar ainda mais.";
  return "Continue praticando. A revisão mostra exatamente os conceitos que merecem atenção.";
}

formularioQuiz.addEventListener("submit", responderQuestao);
botaoNovoQuiz.addEventListener("click", iniciarQuiz);
iniciarQuiz();
