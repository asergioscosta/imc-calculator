const peso = document.getElementById('weight');
const altura = document.getElementById('height');
const bntCalculate = document.getElementById('calculate');
const result = document.querySelector('p');
const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

reset.addEventListener('click', () => {
    peso.value = ''
    altura.value = ''

    result.innerHTML = 'Seu resultado'
})

function formulaIMC(peso, altura) {
    return peso / (altura * altura)
}

bntCalculate.addEventListener('click', () => {
    const pesoValue = Number(peso.value)
    const alturaValue = Number(altura.value)

    let imc = formulaIMC(pesoValue, alturaValue)

    result.innerHTML = `Seu IMC: ${imc.toFixed(2)}`
})