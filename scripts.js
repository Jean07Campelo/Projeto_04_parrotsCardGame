/*
let quantCartas;

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
    console.log(`parabéns, entrada válida: ${quantCartas}`)
}


//chamada de funcoes
leituraEntrada()

*/

function selecionar (elemento) {
    let verso = elemento.querySelector(".verso")
    let frente = elemento.querySelector(".frente")

    verso.classList.toggle("esconder")
    frente.classList.toggle("esconder")
}