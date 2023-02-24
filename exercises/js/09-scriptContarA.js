let frase = prompt("Escribe algo")
let contadorA = 0

for(let i=0;i<frase.length;i++){
  if(frase[i]==='a' || frase[i]==='A'){
    contadorA++
  }
}

alert(`En la frase ${frase} hay ${contadorA} A's`)
