# Pac-Hardware

Minigame desenvolvido para o projeto **Aplicativos de IASE**.

IASE significa:

**Informática Aplicada em Software de Escritório**

O objetivo do Pac-Hardware é auxiliar os alunos de informática básica na identificação de componentes internos de um computador.

---

## Objetivo

O jogador controla um personagem utilizando as setas do teclado.

O mapa contém:

- componentes internos;
- periféricos;
- vírus.

O aluno deve identificar e coletar apenas os componentes que ficam dentro do computador.

Ao coletar todos os componentes internos, o jogo é finalizado.

---

# Controles

Utilize as setas do teclado:

- ↑ Cima
- ↓ Baixo
- ← Esquerda
- → Direita

O personagem continuará andando na direção escolhida até encontrar uma parede ou até que o jogador escolha outra direção.

---

# Componentes que devem ser devorados

Os seguintes elementos são considerados respostas corretas:

## 1. Processador - CPU

Arquivo:

assets/hardware/cpu.png

O processador é responsável por executar instruções e realizar operações no computador.

---

## 2. Placa-mãe

Arquivo:

assets/hardware/placa-mae.png

A placa-mãe conecta os principais componentes do computador.

---

## 3. Memória RAM

Arquivo:

assets/hardware/ram.png

A memória RAM armazena temporariamente informações utilizadas pelos programas.

---

## 4. SSD

Arquivo:

assets/hardware/ssd.png

Dispositivo utilizado para armazenamento de arquivos e do sistema operacional.

---

## 5. HD

Arquivo:

assets/hardware/hd.png

Dispositivo utilizado para armazenamento permanente de dados.

---

## 6. Placa de vídeo - GPU

Arquivo:

assets/hardware/gpu.png

Responsável pelo processamento gráfico do computador.

---

## 7. Fonte de alimentação

Arquivo:

assets/hardware/fonte.png

Fornece energia elétrica para os componentes do computador.

---

## 8. Cooler

Arquivo:

assets/hardware/cooler.png

Ajuda na refrigeração dos componentes, principalmente do processador.

---

# Periféricos

Os periféricos aparecem no mapa para testar os conhecimentos dos alunos.

Eles NÃO devem ser coletados.

São eles:

## Mouse

assets/hardware/mouse.png

## Teclado

assets/hardware/teclado.png

## Monitor

assets/hardware/monitor.png

## Impressora

assets/hardware/impressora.png

## Webcam

assets/hardware/webcam.png

## Headset

assets/hardware/headset.png

Ao encostar em um desses itens o jogo informa que ele é um periférico.

O jogador não recebe pontos.

---

# Vírus

Arquivo:

assets/hardware/virus.png

Os vírus funcionam como os inimigos do jogo.

Eles se movimentam pelo mapa.

Caso um vírus encoste no jogador, ele perde uma vida e retorna para o início do mapa.

O jogador começa com:

3 vidas

Caso perca todas as vidas, a partida termina.

---

# Personagem

Arquivo:

assets/hardware/player.png

O personagem pode ser representado por um pequeno mascote relacionado à informática.

Sugestões:

- computador com boca;
- gabinete com boca;
- robô;
- personagem circular no estilo Pac-Man;
- mascote do projeto IASE.

---

# Imagens

As imagens devem estar dentro da pasta:

assets/hardware/

Estrutura esperada:

assets/
└── hardware/
    ├── player.png
    ├── virus.png
    ├── cpu.png
    ├── placa-mae.png
    ├── ram.png
    ├── ssd.png
    ├── hd.png
    ├── gpu.png
    ├── fonte.png
    ├── cooler.png
    ├── mouse.png
    ├── teclado.png
    ├── monitor.png
    ├── impressora.png
    ├── webcam.png
    └── headset.png

Recomenda-se utilizar imagens PNG com fundo transparente.

Tamanho recomendado:

128x128 px

ou

256x256 px

---

# Pontuação

Cada componente interno coletado corretamente vale:

+1 ponto

Os periféricos não dão pontos.

O jogador vence quando todos os componentes internos forem encontrados.

Total:

8 pontos

---

# Aplicativos de IASE

Este minigame faz parte da plataforma Aplicativos de IASE, juntamente com outros aplicativos educacionais como:

- Controle do Mouse
- Treino de Digitação
- Pac-Hardware