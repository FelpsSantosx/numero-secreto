const elementChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()


recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = (e.results[0][0].transcript)
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmvalorValido(chute)
}

function exibeChuteNaTela (chute) {
    elementChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())