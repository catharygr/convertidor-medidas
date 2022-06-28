const btn = document.querySelector('#btn')
const entradaNum = document.querySelector('#entrada-numero')
const resultadoLongitud = document.querySelector('#resultado-longitud')
const resultadoVolumen = document.querySelector('#resultado-volumen')
const resultadoPeso = document.querySelector('#resultado-peso')

btn.addEventListener('click', convertirMedidas) 

function convertirMedidas() {
  let  numero = entradaNum.value
  resultadoLongitud.textContent = `
  ${numero} metros = ${(numero * 3.281).toFixed(3)} Pies | ${numero} Pies = ${(numero / 3.281).toFixed(3)} metros
  `
  resultadoVolumen.textContent = `
  ${numero} pies = ${(numero * 0.264).toFixed(3)} galones | ${numero} galones = ${(numero / 0.264).toFixed(3)} litros
  `
  resultadoPeso.textContent = `
  ${numero} kilos = ${(numero * 2.204).toFixed(3)} libras ${numero} libras = ${(numero / 2.204).toFixed(3)} kilos
  `
  entradaNum.value = ""
}









/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/