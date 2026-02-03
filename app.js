import dados from "./dados.js";

window.onload = () => {
    const opcoes = document.querySelectorAll(".opcao");
    const render = document.getElementById("render");

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
                    icon.src = dados.icones[i];
                    div.appendChild(icon);
                    lista.appendChild(div);
                }
                render.appendChild(lista);
                let btnJogar = document.createElement("div");
                btnJogar.className = "btn-jogar-h";
                btnJogar.textContent = "Jogar";
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

    opcoes[4].click();

    function Renderizar(tela){
        render.innerHTML = null;
        let t = telas[tela];
        t.renderizar();
    }
}