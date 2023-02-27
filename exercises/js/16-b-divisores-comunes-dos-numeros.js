// 16 -  Escribir un programa que escriba en pantalla los divisores comunes de dos números dados 

let num = 1125
let num2 = 3443

let divisoresComunes = []

let menor

if (num < num2){
  menor = num
}else{
  menor = num2
}

for (let i = 1; i < menor; i++ ){
  if (num %  i === 0 && num2 % i === 0) {
    divisoresComunes.push()
  }
}
console.log(`Los divisores comunes de ${num} y ${num2} son ${divisoresComunes.join('-->')}`)
