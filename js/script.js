const display = document.getElementById("display")

const digitar = (tecla) => {
    display.value = display.value + tecla;
}
const apagar = () => {
    let num = display.value
    display.value = num.substring(0, (num.length - 1))
}
let operacao = ""
let valor = ""
let definirOperador = (operador) => {
    operacao = operador
    console.log(operador)
    valor = display.value
    display.value = ""
}

const calcular = () => {
    switch (operacao) {
        case "+":
        display.valua = Number(valor) + Number(display.value)
    break
        case "-":
            display.value = Number(valor) - Number(display.value)
    break
        case "*":
            display.value = Number(valor) * Number(display.value)
    break
        case "/":
            display.value = Number(valor) / Number(display.value)
    break
   
}}
