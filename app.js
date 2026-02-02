const icones = ["public/imagens/angular.png","public/imagens/aseprite.png","public/imagens/bootstrap.png","public/imagens/c++.png","public/imagens/corel.png","public/imagens/csharp.svg","public/imagens/css.png","public/imagens/django.png","public/imagens/electron.png","public/imagens/flask.png","public/imagens/flutter.webp","public/imagens/git.jpg","public/imagens/godot.png","public/imagens/html.png","public/imagens/java.png","public/imagens/js.png","public/imagens/Kivy.png","public/imagens/node.png","public/imagens/ps.png","public/imagens/py.webp","public/imagens/pygame.png","public/imagens/react.png","public/imagens/roblox-studio.png","public/imagens/ts.png","public/imagens/unity.png","public/imagens/vue.png"]

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
                for(let i=0; i<icones.length; i++){
                    let div = document.createElement("div");
                    div.className = "item";
                    let icon = new Image();
                    icon.src = icones[i];
                    div.appendChild(icon);
                    lista.appendChild(div);
                }
                render.appendChild(lista);
                let btnJogar = document.createElement("div");
                btnJogar.className = "btn-jogar";
                btnJogar.textContent = "Jogar";
                render.appendChild(btnJogar);
                let nave = document.createElement("img");
                nave.className = "nave"
                nave.src = "public/imagens/nave.png"
                render.appendChild(nave);
            }
        },
        P: () => {

        },
        T: () => {

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
}