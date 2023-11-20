
# Ejemplo arreglo 

```js
const TAMANO = 2;
// let i = 1
// Antigua forma con var
// var nombres = new Array(TAMANO)

let nombres = new Array(TAMANO)
let edades = new Array(TAMANO)

for (let i = 0; i < TAMANO; i = i + 1) { // i++ 
    let nombre = prompt('Introduce Nombre '+ (i+1))
    nombres[i] = nombre
    edades[i] = prompt('Introduce su edad')   
}

// console.log(nombres, edades)

for (let i = 0; i < TAMANO; i++) {  
    alert('Nombre: ' + nombres[i])  
}
```
