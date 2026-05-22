//Dados iniciais 
let quadro = {
    a1: "", a2: "", a3: "",
    b1: "", b2: "", b3: "",
    c1: "", c2: "", c3: ""
}

let jogadorVez = "";
let mensagem = "";
let jogoAtivo = false;

reset();

document.querySelector(".btn button").addEventListener("click", reset);

document.querySelectorAll(".area").forEach(item => {
    item.addEventListener("click", clickArea);
})

function clickArea(e) {
    let item = e.target.getAttribute("data-area");

    if (jogoAtivo && quadro[item] === "") {
        quadro[item] = jogadorVez;
        renderQuadro();
        renderInfo();

        if (jogoAtivo) {
            toggleVez();
        }

    }

}

function reset() {
    mensagem = "";

    let random = Math.floor(Math.random() * 2);
    jogadorVez = (random === 0) ? "x" : "o";

    for (let i in quadro) {
        quadro[i] = "";
    }

    jogoAtivo = true;

    renderQuadro();
    renderInfo();
}


function renderQuadro() {
    for (let i in quadro) {
        let item = document.querySelector(`div[data-area="${i}"]`);
        item.innerHTML = quadro[i];
    }

    checkGamer();
}

function renderInfo() {
    document.querySelector(".vez").innerHTML = jogadorVez;
    document.querySelector(".resultado").innerHTML = mensagem;
}


function toggleVez() {
    jogadorVez = (jogadorVez === "x") ? "o" : "x";
}

function verificarJogador(jogador) {
    let pos = [
        "a1,a2,a3",
        "b1,b2,b3",
        "c1,c2,c3",

        "a1,b1,c1",
        "a2,b2,c2",
        "a3,b3,c3",

        "a1,b2,c3",
        "a3,b2,c1"
    ];



    for (let i in pos) {
        let posArray = pos[i].split(",");

        let sequenciaCerta = posArray.every(item => quadro[item] === jogador);

        if (sequenciaCerta) {
            return true;
        }
    }

    return false;
}

function empate() {
    for (let i in quadro) {
        if (quadro[i] === "") {
            return false;
        }
    }

    return true;
}

function checkGamer() {
    if (verificarJogador("x")) {
        mensagem = 'O "x" venceu!';
        jogoAtivo = false;
    } else if (verificarJogador("o")) {
        mensagem = 'O "o" venceu!';
        jogoAtivo = false;
    } else if (empate()) {
        mensagem = "Deu empate";
        jogoAtivo = false;
    }
}




