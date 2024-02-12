function verificaSeOChutePossuiUmvalorValido(chute) {
    const numero = +chute

    if (chute.toLowerCase() == "game over") {
        document.body.innerHTML = 
        `<h2>Game Over</h2>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novanente</button>
        `
        document.body.style.backgroundColor = "#455A64"
    }



    if (chuteForInvalido(numero) || numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementChute.innerHTML += `<div>Valor Invalido: o valor secreto precisa ser númerico e alem disso está entre 
        ${menorValor} e ${maiorValor}</div>`

        return
    }


    // if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    //     elementChute.innerHTML += `<div>Valor Invalido: o valor secreto precisa está entre 
    //     ${menorValor} e ${maiorValor}</div>`
    // }

    if (numero === numertoSecreto) {
        document.body.innerHTML = `
        <h2>Você Acertou!!</h2>
        <h3>o número secreto era <span>${numertoSecreto}</span></h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero < numertoSecreto) {
        elementChute.innerHTML += `
        <div>o número secreto é maior <i class="fa-solid fa-angles-up"></i></div>
        `
    } else {
        elementChute.innerHTML += `
        <div>o número secreto é menor <i class="fa-solid fa-angles-down"></i></div>
        `
    }


}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})