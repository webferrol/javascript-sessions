// 14. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let number = Number(prompt('Dame un número:'))
let divisores = [2, 3, 5, 7]

for (let i = 0; i < divisores.length; i++) {
  
  if (number % divisores[i] === 0) {
    alert(`${number} es divisible por ${divisores[i]}`)
    break
  }

}