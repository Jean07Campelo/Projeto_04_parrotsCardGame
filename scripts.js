
let quantCartas;
let container = document.querySelector(".cartas");


//lê entrada do usuario e converte para number
function leituraEntrada () {
    quantCartas = Number(prompt("Com quantas cartas deseja jogar?"));
    verificaEntrada();
}

//verifica se entrada do usuario eh valida
function verificaEntrada () {
    while (quantCartas % 2 !== 0 || quantCartas < 4 || quantCartas > 14) {
        console.log(`quantidade inválida: ${quantCartas}`)
        leituraEntrada()
        
    }
//chamar funcao para começar jogo
    iniciarJogo()
    console.log(`parabéns, entrada válida: ${quantCartas}`)
    return quantCartas;    
}


function iniciarJogo() {
    for (let i = 0; i < quantCartas; i++) {

        container.innerHTML += 
        `
        <li class="carta centralizar" onclick="selecionar(this)">
            <img class="verso" src="/images/front.png">
        </li>

        `
    }
}

function selecionar (elemento) {
    let verso = elemento.querySelector(".verso")
    let frente = elemento.querySelector(".frente")

    verso.classList.toggle("esconder")
    frente.classList.toggle("esconder")
}


//chamada de funcoes
leituraEntrada()

/*
//variaveis com as imagens
let imagem1 = "/images/bobrossparrot.gif";
let imagem2 = "/images/explodyparrot.gif";
let imagem3 = "/images/fiestaparrot.gif";
let imagem4 = "/images/metalparrot.gif";
let imagem5 = "/images/revertitparrot.gif";
let imagem6 = "/images/tripletsparrot.gif";
let imagem7 = "/images/unicornparrot.gif";

let bancoImagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];
*/