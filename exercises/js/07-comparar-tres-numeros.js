'use strict'

let num1, num2, num3, x
num1 = num2 = num3 = 0

num1 = Number(prompt('Número 1'))
num2 = Number(prompt('Número 2'))
num3 = Number(prompt('Número 3'))

if (num1 > num2) {
  x = num1
} else {
  x=num2
}
if (x < num3){
  x = num3
}

alert(`El mayor (${num1},${num2},${num3}): ${x}`)

