// 10. [] Escribe un programa que pida una frase y escriba las vocales que aparecen (No hay que escribir acentos y sólo minúsculas)
let vocales = 'aeiou'
let texto = prompt("Dame un frase")
let vocalesEncontradas = ''

for (let i = 0; i < vocales.length; i++) {   
  let vocal = vocales[i]  
  for (let x = 0; x < texto.length; x++) {
    let letra = texto[x]
    if(letra === vocal) {
      vocalesEncontradas = vocalesEncontradas + vocal
      break
    }
  }    
}

alert(`En la frase "${texto} están las vocales [${vocalesEncontradas}]`)

