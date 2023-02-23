'use strict'

let num1, num2, num3
num1 = num2 = num3 = 0

num1 = Number(prompt('Número 1'))
num2 = Number(prompt('Número 2'))
num3 = Number(prompt('Número 3'))

// Opción 1
if (num1 > num2) {
  if (num1 > num3) {
    alert(`El mayor (${num1},${num2},${num3}): ${num1}`)
  }
} else if (num2 > num3) {
  alert(`El mayor (${num1},${num2},${num3}): ${num2}`)
} else {
  alert(`El mayor (${num1},${num2},${num3}): ${num3}`)
}
 
// Opción 2
// let aux
// if (num1 > num2) {
//   aux = num1
// } else {
//   aux=num2
// }
// if (aux < num3){
//   aux = num3
// }

// alert(`El mayor (${num1},${num2},${num3}): ${aux}`)

