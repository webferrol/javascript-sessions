// 14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

let number = 1232
let divisores = [2, 3, 5, 7]
let divisoresComunes = []

for (let i = 0; i < divisores.length; i++) {
  
  if (number % divisores[i] === 0) {
    divisoresComunes.push(divisores[i])
    
  }
  
}

console.log(`Divisores comunes de ${number}: [${divisoresComunes.join()}]`)
