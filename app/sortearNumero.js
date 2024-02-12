const menorValor = 1
const maiorValor = 100
const numertoSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log('O número secreto é: ', numertoSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor