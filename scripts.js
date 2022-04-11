
let quantCartas;
let container = document.querySelector(".cartas");
let cartasEmbaralhadas = [];
let selecionada;
let cartaClicada;
let cartasClicadas = [];
let jogadaPar;

//funcao usada na .sort
function comparador() { 
	return Math.random() - 0.5; 
}


//variaveis com as imagens
let imagem1 = "/images/bobrossparrot.gif";
let imagem2 = "/images/explodyparrot.gif";
let imagem3 = "/images/fiestaparrot.gif";
let imagem4 = "/images/metalparrot.gif";
let imagem5 = "/images/revertitparrot.gif";
let imagem6 = "/images/tripletsparrot.gif";
let imagem7 = "/images/unicornparrot.gif";
let bancoImagens = [imagem1, imagem2, imagem3, imagem4, imagem5, imagem6, imagem7];


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
    embaralharBanco()
    cartasSelecionadas()
    //iniciarJogo()
    console.log(`parabéns, entrada válida: ${quantCartas}`)
    return quantCartas;    
}


//embaralhar banco de imagens
function embaralharBanco () {
    bancoImagens = bancoImagens.sort(comparador);
    }

//separar quantidade cartas selecionada
function cartasSelecionadas () {
    for (let i = 0 ; i < (quantCartas/2) ; i++) {
        cartasEmbaralhadas.push(bancoImagens[i]);
    }
    ajustaSelecionadas()
}

//dobra quantidade de cartasEmbaralhadas
function ajustaSelecionadas () {
    for (let i = 0 ; i < quantCartas/2 ; i++) {
        cartasEmbaralhadas.push(cartasEmbaralhadas[i]);
    }
    embaralhaSelecionadas()    
}

//embaralha quant de cartas selecionadas
function embaralhaSelecionadas () {
    cartasEmbaralhadas.sort(comparador);
    iniciarJogo()
}

//iniciar jogo com entrada usuario
function iniciarJogo() {
    for (let i = 0; i < cartasEmbaralhadas.length ; i++) {

        container.innerHTML += 
        `
        <li class="carta centralizar" onclick="selecionar(this)">
            <img class ="verso" src="/images/front.png">
            <img class="frente centralizar esconder" src="${cartasEmbaralhadas[i]}">
        </li>

        `
    }
}

//clique na carta
let quantCliques = 0;
function selecionar (elemento) {
    let verso = elemento.querySelector(".verso")
    let frente = elemento.querySelector(".frente")

    verso.classList.toggle("esconder")
    frente.classList.toggle("esconder")
    frente.classList.toggle("selecionada");
    

    cartaClicada = elemento.querySelector(".selecionada").src
    cartasClicadas.push(cartaClicada);
    quantCliques++;
    //chamar funcao para verificar carta
    verificaCartasPares()
}


function verificaCartasPares () {
    
    for (let i = 0; i < cartasClicadas.length ; i++) {

        let cartasIguais = cartasClicadas[i] === cartasClicadas[i-1];
        jogadaPar = quantCliques % 2 === 0;
        
        if (jogadaPar && cartasIguais) {
            console.log("cartas iguais!!")
        }
        else {
            console.log(`diferentes`)
        } 
    }
 
}



//chamada de funcoes
leituraEntrada()