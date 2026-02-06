import dados from "./dados.js";

window.onload = () => {
    const opcoes = document.querySelectorAll(".opcao");
    const render = document.getElementById("render");
    let canvas = null;
    let ctx = null;
    let estrelas = [];
    let inimigos = [];
    let frames = 0;
    const telas = {
        H: {
            nome: "Habilidades",
            renderizar: () => {
                let h1 = document.createElement("div");
                h1.className = "titulo lobster-two-regular ";
                h1.textContent = "Minhas Habilidades";
                render.appendChild(h1);
                let lista = document.createElement("div");
                lista.className = "lista-habilidades"
                for(let i=0; i<dados.icones.length; i++){
                    let div = document.createElement("div");
                    div.className = "item";
                    let icon = new Image();
                    icon.src = dados.icones[i].url;
                    div.appendChild(icon);
                    lista.appendChild(div);
                }
                render.appendChild(lista);
                let btnJogar = document.createElement("div");
                btnJogar.className = "btn-jogar-h";
                btnJogar.textContent = "Jogar";
                btnJogar.addEventListener("click", () => {
                    render.innerHTML = null;
                    canvas = document.createElement("canvas");
                    canvas.width = canvas.height = 650;
                    canvas.style.width = canvas.style.height = "100%";
                    ctx = canvas.getContext("2d");
                    StartGame(canvas, ctx);
                    render.appendChild(canvas);
                });
                render.appendChild(btnJogar);
                let nave = document.createElement("img");
                nave.className = "nave"
                nave.src = "public/imagens/nave.png"
                render.appendChild(nave);
            }
        },
        P: {
            nome: "Projetos",
            renderizar: () => {
                let projetos = dados.projetos;
                projetos.forEach(projeto => {
                    let div = document.createElement("div");
                    div.className = "projeto"
                    let info = document.createElement("div");
                    info.className = "info"
                    let h1 = document.createElement("h1");
                    h1.className = "lobster-two-bold";
                    h1.textContent = projeto.nome;
                    let p = document.createElement("p");
                    p.className = "descricao";
                    p.textContent = projeto.descricao;
                    info.appendChild(h1);
                    info.appendChild(p);
                    div.appendChild(info);
                    let btns = document.createElement("div");
                    btns.className = "btns"
                    let git = document.createElement("a");
                    git.href = projeto.github;
                    git.innerHTML = `<i class="bi bi-github"></i>`;
                    let link = document.createElement("a");
                    link.href = projeto.link;
                    link.innerHTML = `<i class="bi bi-box-arrow-up-right"></i>`;
                    btns.appendChild(link);
                    btns.appendChild(git);
                    div.appendChild(info);
                    div.appendChild(btns);
                    render.appendChild(div);
                });
            }
        },
        T: {
            nome: "Minhas Turmas",
            renderizar: () => {
                let h1 = document.createElement("div");
                h1.className = "titulo lobster-two-regular ";
                h1.textContent = "Minhas turmas";
                render.appendChild(h1);
                let turmas = dados.turmas;
                turmas.forEach(turma => {
                    let div = document.createElement("div");
                    div.className = "turma";
                    let nome = document.createElement("div");
                    nome.textContent = turma.nome;
                    nome.className = "nome-turma";
                    let info = document.createElement("div");
                    info.className = "info";
                    let curso = document.createElement("div");
                    curso.className = "curso";
                    curso.textContent = turma.curso;
                    let caixa = document.createElement("div");
                    caixa.className = "disciplinas";
                    turma.disciplinas.forEach(d => {
                        let tag = document.createElement("div");
                        tag.className = "tag";
                        tag.textContent = d;
                        caixa.appendChild(tag);
                    });
                    div.appendChild(nome);
                    info.appendChild(curso);
                    info.appendChild(caixa);
                    div.appendChild(info);
                    render.appendChild(div);
                });
            }
        },
        D: {
            nome: "Dev Log's",
            renderizar: () => {
                let h1 = document.createElement("div");
                h1.className = "titulo lobster-two-regular";
                h1.textContent = "Dev log's";
                render.appendChild(h1);
                let logs = dados.devlogs;
                logs.forEach(log => {
                    // Criando o elemento do card
                    const card = document.createElement('div');
                    card.className = 'card mb-3 bg-dark text-light'; // Estilo escuro como na imagem
                    card.style.width = '100%';

                    card.innerHTML = `
                        <div class="row g-0">
                            <div class="col-md-4 d-flex align-items-center justify-content-center bg-secondary rounded-start" style="min-height: 150px;">
                                <h2 class="display-6 card-sigla text-light fw-bold">${log.sigla}</h2>
                            </div>
                            <div class="col-md-8 text-light">
                                <div class="card-body">
                                    <h5 class="card-title">${log.nome}</h5>
                                    <p class="card-text">${log.descricao}</p>
                                    <p class="card-text">
                                        <small class="text-muted">Quantidade de posts: ${log.posts.length}</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;

                    render.appendChild(card);
                })
            }
        },
        J: {
            nome: "Meus jogos",
            renderizar: () => {
                let h1 = document.createElement("div");
                h1.className = "titulo lobster-two-regular ";
                h1.textContent = "Meus Jogos";
                render.appendChild(h1);
                let jogos = dados.jogos;
                jogos.forEach(jogo => {
                    let div = document.createElement("div");
                    div.className = "jogo w-100 d-flex";
                    let img = document.createElement("img");
                    // img.style.height = img.style.width = "150px";
                    img.src = jogo.imagem;
                    div.appendChild(img);
                    let info = document.createElement("div");
                    info.className = "info";
                    let h3 = document.createElement("h3");
                    h3.textContent = jogo.nome;
                    let descricao= document.createElement("p");
                    descricao.textContent = jogo.descricao;
                    let btns = document.createElement("div");
                    btns.className = "tag-btns";
                    btns.style.display = "flex";
                    jogo.categorias.forEach(cat => {
                        console.log(cat);
                        let tag = document.createElement("div");
                        tag.className = "tag";
                        tag.textContent = cat;
                        btns.appendChild(tag);
                    });
                    let btnJogar = document.createElement("div");
                    btnJogar.className = "btn-jogar";
                    btnJogar.textContent = "Jogar";
                    btnJogar.addEventListener("click", () => {
                        window.location.href = jogo.link;
                    });
                    btns.appendChild(btnJogar);
                    info.appendChild(h3);
                    info.appendChild(descricao);
                    info.appendChild(btns);
                    div.appendChild(info);
                    render.appendChild(div);
                })
            }
        }
    }

    opcoes.forEach(op => {
        op.addEventListener("click", () => {
            opcoes.forEach(o => {o.className = "opcao"; });
            op.className = "opcao selecionado";
            Renderizar(op.getAttribute("data"));
        });
    });

    opcoes[0].click();

    function Renderizar(tela){
        render.innerHTML = null;
        let t = telas[tela];
        t.renderizar();
    }

    function StartGame(canvas, ctx){
        Update(canvas, ctx);
        for(let i=0; i < 25; i++){
            estrelas.push({
                cor: "white",
                w:2,
                x: Math.floor(Math.random() * 650),
                y: Math.floor(Math.random() * 650),
            });
        }
        for(let i=0; i<dados.icones.length; i++){
            let img = dados.icones[i];
            let icon = new Image();
            icon.src = img.url;
            let x, y = 0;
            if(i < 650/50){ y = 30; x = (i+0.5) * 45}
            else { x = ((i - (650/50))+0.5)* 45; y = 2 * 40; }
            let obj = {
                img: icon,
                d: img.dimensao,
                w: 40,
                x: x,
                y: y,
                left: true,
                vivo: true,
            }
            inimigos.push(obj);       
        }
    }

    function Update(){
        frames ++;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 650, 650);
        estrelas.forEach(star => {
            ctx.fillStyle = star.cor;
            ctx.fillRect(star.x, star.y, star.w, star.w);
        })
        inimigos.forEach(nave => {
            ctx.fillStyle = nave.cor;
            ctx.fillRect(nave.x, nave.y, nave.w, nave.w);
            ctx.drawImage(nave.img, 0, 0, nave.d.w, nave.d.y, nave.x, nave.y, nave.w, nave.w);
            if(frames % 50 == 0){
                if(nave.left){
                    nave.x+=4;
                    // nave.y++;
                    nave.left = false;
                }else{
                    nave.x-=4;
                    // nave.y--;
                    nave.left = true;
                }
            }
        });
        requestAnimationFrame(Update);
    }
}