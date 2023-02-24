let texto = 'Hola mundo cruel'
let aes = 0, oes = 0, ies = 0, ues = 0, ees = 0

let i = 0
while (i < texto.length) {
  let letra = texto[i]
  if (letra === 'a') {
    aes++
  }
  if (letra === 'o') {
    oes++
  }
  if (letra === 'e') {
    ees++
  }
  if (letra === 'i') {
    ies++
  }
  if (letra === 'u') {
    ues++
  }
  i++
}

console.log(`Vocales a[${aes}],e[${ees}],i[${ies}],o[${oes}],u[${ues}]: total(${aes+ees+ies+oes+ues})`)