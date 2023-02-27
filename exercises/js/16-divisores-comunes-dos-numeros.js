// 16- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

let n1 = 2
let n2 = 4
let resultado = `Los divisores comunes entre ${n1} y ${n2} son :`

let divisoresComunes1 = []
let divisoresComunes2 = []
let i = 0

while (i <= n1) {
  if (n1 % i === 0) {
    divisoresComunes1.push(i)
  }
  i++
}

i = 0
while (i <= n2) {
  if (n2 % i === 0) {
    divisoresComunes2.push(i)
  }
  i++
}

for (x = 0; x < dividoresComunes1; x++) {
  if (divisoresComunes2.includes(divisoresComunes1[x])) {
    resultado = resultado.concat(`[${divisoresComunes1[x]}]`)
  }
}

console.log(resultado)