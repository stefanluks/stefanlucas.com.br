const model = `class Personagem {
  final int id;
  final String nome;
  final String status;
  final String especie;
  final String genero;
  final String origem;
  final String localizacao;
  final String imagem;

  Personagem({
    required this.id,
    required this.nome,
    required this.status,
    required this.especie,
    required this.genero,
    required this.origem,
    required this.localizacao,
    required this.imagem,
  });

  factory Personagem.fromJson(Map<String, dynamic> json) {
    return Personagem(
      id: json['id'],
      nome: json['name'],
      status: json['status'],
      especie: json['species'],
      genero: json['gender'],
      origem: json['origin']['name'],
      localizacao: json['location']['name'],
      imagem: json['image'],
    );
  }
}`;

const controller = `import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/personagem.dart';

class PersonagemController {
  final String endereco =
      'https://rickandmortyapi.com/api/character';

  Future<Personagem> buscarPersonagem(int id) async {
    Uri url = Uri.parse('$endereco/$id');
    http.Response resposta = await http.get(url);

    if (resposta.statusCode == 200) {
      Map<String, dynamic> dados = jsonDecode(
        utf8.decode(resposta.bodyBytes),
      );
      return Personagem.fromJson(dados);
    }

    if (resposta.statusCode == 404) {
      throw Exception('Personagem não encontrado.');
    }
    throw Exception('Não foi possível acessar a API.');
  }
}`;

const card = `import 'package:flutter/material.dart';
import '../models/personagem.dart';

class PersonagemCard extends StatelessWidget {
  final Personagem personagem;

  const PersonagemCard({
    super.key,
    required this.personagem,
  });

  Color corDoStatus() {
    if (personagem.status == 'Alive') return Colors.green;
    if (personagem.status == 'Dead') return Colors.red;
    return Colors.grey;
  }

  String traduzirStatus() {
    if (personagem.status == 'Alive') return 'Vivo';
    if (personagem.status == 'Dead') return 'Morto';
    return 'Desconhecido';
  }

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 10,
      clipBehavior: Clip.antiAlias,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(24),
      ),
      child: Container(
        width: 390,
        color: const Color(0xFF202329),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Image.network(
              personagem.imagem,
              width: double.infinity,
              height: 260,
              fit: BoxFit.cover,
            ),
            Padding(
              padding: const EdgeInsets.all(22),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '#\${personagem.id.toString().padLeft(3, '0')}',
                    style: const TextStyle(
                      color: Color(0xFF97CE4C),
                      fontSize: 17,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    personagem.nome,
                    style: const TextStyle(
                      color: Colors.white,
                      fontSize: 27,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      Container(
                        width: 12,
                        height: 12,
                        decoration: BoxDecoration(
                          color: corDoStatus(),
                          shape: BoxShape.circle,
                        ),
                      ),
                      const SizedBox(width: 8),
                      Text(
                        '\${traduzirStatus()} — \${personagem.especie}',
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 17,
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 18),
                  Text(
                    'Origem: \${personagem.origem}',
                    style: const TextStyle(color: Colors.white),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'Localização: \${personagem.localizacao}',
                    style: const TextStyle(color: Colors.white),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}`;

const home = `import 'package:flutter/material.dart';
import '../controllers/personagem_controller.dart';
import '../models/personagem.dart';
import '../widgets/personagem_card.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final PersonagemController controller = PersonagemController();
  Personagem? personagem;
  int idAtual = 1;
  bool carregando = true;
  String mensagemErro = '';

  @override
  void initState() {
    super.initState();
    carregarPersonagem();
  }

  Future<void> carregarPersonagem() async {
    setState(() {
      carregando = true;
      mensagemErro = '';
    });

    try {
      Personagem resultado =
          await controller.buscarPersonagem(idAtual);
      if (!mounted) return;
      setState(() {
        personagem = resultado;
        carregando = false;
      });
    } catch (erro) {
      if (!mounted) return;
      setState(() {
        carregando = false;
        mensagemErro = 'Não foi possível carregar o personagem.';
      });
    }
  }

  void avancar() {
    if (idAtual < 826) {
      idAtual++;
      carregarPersonagem();
    }
  }

  void voltar() {
    if (idAtual > 1) {
      idAtual--;
      carregarPersonagem();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF111318),
      appBar: AppBar(
        title: const Text('Rick and Morty'),
        centerTitle: true,
        backgroundColor: const Color(0xFF202329),
        foregroundColor: const Color(0xFF97CE4C),
      ),
      body: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (carregando)
                const CircularProgressIndicator(),
              if (!carregando && mensagemErro.isNotEmpty)
                Column(
                  children: [
                    Text(mensagemErro),
                    ElevatedButton(
                      onPressed: carregarPersonagem,
                      child: const Text('Tentar novamente'),
                    ),
                  ],
                ),
              if (!carregando && personagem != null)
                PersonagemCard(personagem: personagem!),
              if (!carregando && mensagemErro.isEmpty) ...[
                const SizedBox(height: 24),
                SizedBox(
                  width: 390,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      ElevatedButton.icon(
                        onPressed: idAtual == 1 ? null : voltar,
                        icon: const Icon(Icons.arrow_back),
                        label: const Text('Voltar'),
                      ),
                      ElevatedButton.icon(
                        onPressed: idAtual == 826 ? null : avancar,
                        icon: const Icon(Icons.arrow_forward),
                        label: const Text('Avançar'),
                      ),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }
}`;

const main = `import 'package:flutter/material.dart';
import 'pages/home_page.dart';

void main() {
  runApp(const RickMortyApp());
}

class RickMortyApp extends StatelessWidget {
  const RickMortyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Rick and Morty',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF97CE4C),
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}`;

const manifest = `<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.INTERNET"/>

  <application
      android:label="Rick and Morty"
      android:name="\${applicationName}"
      android:icon="@mipmap/ic_launcher">
      <!-- restante do arquivo permanece igual -->
  </application>
</manifest>`;

const slides = [
  { stage: "Boas-vindas", title: "Vamos criar um app de Rick and Morty", subtitle: "Flutter + Dart + API REST, construído passo a passo", icon: "🛸", color: "#97ce4c", items: ["Um personagem por vez", "Imagem e informações", "Botões de navegação", "APK para Android"], note: "Use as setas do teclado ou os botões inferiores para navegar." },
  { stage: "1ª Etapa · Criar projeto", title: "Primeiro, abra o terminal", subtitle: "No Windows, vamos utilizar o Prompt de Comando", icon: ">_", color: "#47dce8", steps: ["Pressione Windows + R", "Digite CMD na janela Executar", "Pressione Enter"], keys: ["⊞ Win + R", "CMD", "Enter ↵"], note: "O terminal permite criar, executar e compilar projetos Flutter." },
  { stage: "1ª Etapa · Criar projeto", title: "Crie e abra o projeto", subtitle: "Execute um comando de cada vez", icon: "📁", color: "#47dce8", steps: ["Criar o projeto Flutter", "Entrar na pasta criada", "Abrir no VS Code"], code: "flutter create rick_morty_app\ncd rick_morty_app\ncode .", file: "Terminal" },
  { stage: "2ª Etapa · Dependências", title: "Instale o pacote HTTP", subtitle: "Ele permite que o aplicativo faça requisições pela internet", icon: "🌐", color: "#97ce4c", code: "flutter pub add http", file: "Terminal", items: ["Abra o terminal do VS Code", "Execute o comando", "Aguarde a conclusão"], note: "A dependência será adicionada automaticamente ao pubspec.yaml." },
  { stage: "2ª Etapa · Organização", title: "Organize os arquivos", subtitle: "Cada parte terá uma responsabilidade", icon: "🗂️", color: "#f0db60", code: "lib/\n├── main.dart\n├── controllers/\n│   └── personagem_controller.dart\n├── models/\n│   └── personagem.dart\n├── pages/\n│   └── home_page.dart\n└── widgets/\n    └── personagem_card.dart", file: "Estrutura", items: ["models: dados", "controllers: API", "pages: telas", "widgets: componentes"] },
  { stage: "3ª Etapa · Model", title: "Crie a classe Personagem", subtitle: "Ela transforma o JSON em um objeto Dart", icon: "🧬", color: "#f06caa", code: model, file: "lib/models/personagem.dart", note: "Personagem.fromJson recebe os dados da API e preenche os atributos." },
  { stage: "4ª Etapa · API", title: "Crie o controller", subtitle: "Toda a conexão fica concentrada neste arquivo", icon: "🔌", color: "#97ce4c", code: controller, file: "lib/controllers/personagem_controller.dart", note: "A tela solicita um ID; o controller acessa a API e devolve o objeto." },
  { stage: "5ª Etapa · Widget", title: "Monte o card do personagem", subtitle: "Um StatelessWidget apresenta os dados recebidos", icon: "🪪", color: "#f0db60", code: card, file: "lib/widgets/personagem_card.dart", items: ["Card agrupa", "Image.network exibe", "Column organiza", "Row alinha"] },
  { stage: "6ª Etapa · Tela", title: "Adicione estado e navegação", subtitle: "A tela controla carregamento, erro e ID atual", icon: "🎛️", color: "#47dce8", code: home, file: "lib/pages/home_page.dart", note: "HomePage é StatefulWidget porque suas informações mudam durante o uso." },
  { stage: "7ª Etapa · Aplicativo", title: "Configure o main.dart", subtitle: "O ponto de entrada define tema e página inicial", icon: "▶", color: "#97ce4c", code: main, file: "lib/main.dart" },
  { stage: "8ª Etapa · Android", title: "Autorize o acesso à internet", subtitle: "Sem a permissão, o APK não consegue consultar a API", icon: "🔐", color: "#f06caa", code: manifest, file: "android/app/src/main/AndroidManifest.xml", note: "uses-permission fica antes da tag application." },
  { stage: "9ª Etapa · Testar", title: "Execute no navegador", subtitle: "Salve os arquivos e rode os comandos", icon: "🧪", color: "#47dce8", code: "flutter pub get\nflutter run -d chrome", file: "Terminal", steps: ["Baixar dependências", "Executar no Chrome", "Ctrl + C para encerrar"] },
  { stage: "10ª Etapa · Compilar", title: "Gere o APK para Android", subtitle: "A versão release está pronta para instalar", icon: "📱", color: "#97ce4c", code: "flutter clean\nflutter pub get\nflutter build apk --release", file: "Terminal", items: ["Confira flutter doctor", "Compile", "Transfira o APK", "Instale e teste"], note: "Saída: build/app/outputs/flutter-apk/app-release.apk" },
  { stage: "Projeto concluído", title: "Seu app atravessou o portal!", subtitle: "Você combinou widgets, classes, estado e uma API real", icon: "🌀", color: "#97ce4c", items: ["Pesquisa por nome", "Lista de personagens", "Filtros", "Favoritos"], note: "Desafio: escolha uma melhoria e implemente sem quebrar o funcionamento atual." },
];

let index = 0;
let activeCode = "";
let touchStart = null;

const deck = document.getElementById("deck");
const slideElement = document.getElementById("slide");
const stageElement = document.getElementById("stage");
const currentElement = document.getElementById("current");
const totalElement = document.getElementById("total");
const barElement = document.getElementById("bar");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const overlay = document.getElementById("overlay");
const modalCode = document.getElementById("modalCode");
const modalFile = document.getElementById("modalFile");
const toast = document.getElementById("toast");

totalElement.textContent = String(slides.length).padStart(2, "0");

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function copyCode(code) {
  const done = () => {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1600);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(code).then(done);
    return;
  }

  const area = document.createElement("textarea");
  area.value = code;
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
  done();
}

function codeBox(code, file) {
  const lines = code.split("\n");
  const preview = lines.slice(0, 15).join("\n");
  const long = lines.length > 15;
  return `<div class="codeBox">
    <div class="codeTop"><span>● ● ●</span><strong>${escapeHtml(file)}</strong>${long ? '<button id="viewFull">Ver completo</button>' : ''}</div>
    <pre><code>${escapeHtml(preview)}${long ? '\n\n// … código continua' : ''}</code></pre>
    <button id="copyCode" class="copy">⧉ Clique aqui para copiar o código</button>
  </div>`;
}

function render() {
  const slide = slides[index];
  deck.style.setProperty("--accent", slide.color);
  stageElement.textContent = slide.stage;
  currentElement.textContent = String(index + 1).padStart(2, "0");
  barElement.style.width = `${((index + 1) / slides.length) * 100}%`;
  previousButton.disabled = index === 0;
  nextButton.disabled = index === slides.length - 1;

  const steps = slide.steps ? `<div class="steps">${slide.steps.map((text, i) => `<div><span>PASSO ${i + 1}</span><strong>${escapeHtml(text)}</strong>${slide.keys && slide.keys[i] ? `<kbd>${escapeHtml(slide.keys[i])}</kbd>` : ''}</div>`).join('')}</div>` : '';
  const items = slide.items ? `<div class="items">${slide.items.map(item => `<div><i>✓</i>${escapeHtml(item)}</div>`).join('')}</div>` : '';
  const note = slide.note ? `<aside>💡 <span>${escapeHtml(slide.note)}</span></aside>` : '';
  const visual = slide.code ? codeBox(slide.code, slide.file || "Código") : `<div class="portal"><span>${slide.icon}</span></div>`;

  slideElement.innerHTML = `<article><p class="eyebrow">${escapeHtml(slide.stage)}</p><h1>${escapeHtml(slide.title)}</h1><p class="sub">${escapeHtml(slide.subtitle)}</p>${steps}${items}${note}</article><div class="visual">${visual}</div>`;
  activeCode = slide.code || "";

  document.getElementById("copyCode")?.addEventListener("click", () => copyCode(activeCode));
  document.getElementById("viewFull")?.addEventListener("click", () => {
    modalCode.textContent = activeCode;
    modalFile.textContent = slide.file || "Código";
    overlay.classList.remove("hidden");
  });
}

function previous() { if (index > 0) { index--; render(); } }
function next() { if (index < slides.length - 1) { index++; render(); } }

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
document.getElementById("closeModal").addEventListener("click", () => overlay.classList.add("hidden"));
document.getElementById("modalCopy").addEventListener("click", () => copyCode(activeCode));
overlay.addEventListener("click", event => { if (event.target === overlay) overlay.classList.add("hidden"); });

document.addEventListener("keydown", event => {
  if (!overlay.classList.contains("hidden") && event.key === "Escape") { overlay.classList.add("hidden"); return; }
  if (["ArrowRight", "PageDown", " "].includes(event.key)) next();
  if (["ArrowLeft", "PageUp"].includes(event.key)) previous();
  if (event.key === "Home") { index = 0; render(); }
  if (event.key === "End") { index = slides.length - 1; render(); }
});

deck.addEventListener("touchstart", event => touchStart = event.changedTouches[0].clientX, { passive: true });
deck.addEventListener("touchend", event => {
  if (touchStart === null) return;
  const distance = event.changedTouches[0].clientX - touchStart;
  if (distance < -60) next();
  if (distance > 60) previous();
  touchStart = null;
}, { passive: true });

render();