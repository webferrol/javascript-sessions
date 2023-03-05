# Funciones

## Sintaxis

Tenemos la __sintaxis tradicional__:

```js
function miFuncion (parameter1, parameter2, parameterN) {
  
  // instrucción 1
  // instrucción 2
  // instrucción n

  return valor // Si no hay retorno la función pasa a llamarse "Procedimiento"
}
```

Sintáxis a partir de __ES6__

```js
const miFuncion = (parameter1, parameter2, parameterN) => {  // No olvides el operador flecha =>

  // instrucción 1
  // instrucción 2
  // instrucción n

  return valor // Si no hay retorno la función pasa a llamarse "Procedimiento"
}
```

## Funciónes básicas de entrada y salida de datos

### Entrada de datos:
  1. Función __prompt()__. _⚠️ Sólo para desarrollo_

```js
let nombre = prompt('Dame tu nombre','Xurxo') // El segundo argumento es opcional
```

![prompt()](/assets/prompt.gif)

### Salida de datos
  1. Función __alert()__. _⚠️ Sólo para desarrollo_

```js
let nombre = prompt('Dame tu nombre','Xurxo') // El segundo argumento es opcional
alert('Mi nombre es ' + nombre) // Cuando sumamos / unimos strings el operador + es de concatenación
```

## Higher Order Function (HOF) y callback  

Una __Función Orden de Orden Mayor__ <abbr title="higher order function">HOF</abbr> es un conjunto de instrucciones para realizar una tarea, por lo tanto es una __función normal__. Pero lo que diferencia es que puede llevar como __parámetro__ la declaración de otra _función_ (__callback__) o el retorno de la misma. Esto es debido a que en __JavaScript__ decimos que las funciones son __first-class citizens__ o ciudadanas de primera clase, esto significa que pueden ser tratadas como cualquier otro __valor primitivo__.

Un ejemplo serían las funciones __addEventListener__ (HOF) y __foo__ (callback):

```js
function foo (event) {
  // Conjunto de instrucciones
}

document.querySelector('#btn').addEventListener('click', foo)
```
Podemos reproducir el anterior ejemplo con un callback anónimo, es decir, una función no denominada:

```js
document.querySelector('#btn').addEventListener('click', function (event) {
  // Conjunto de instrucciones
})
```

Un ejemplo más elaborado de <abbr title="higher order function">HOF</abbr>:

```js
// HOF
function higherOrderFunction (value, callback) {
  return callback(value)
}

// Función normal
function divisoresComunes (numeros) {
  const divisoresTmp = []
  for (let i = 1; i <= numeros; i++) {
    if (numeros % i === 0) {
      divisoresTmp.push(i)
    }
  }
  return divisoresTmp
}

// Función normal
function esNumeroPrimo (num) {
  if (num === 0 || num === 1) {
    return false
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
  }
  return true
}

// divisoresComunes y esNumeroPrimo ahora son callbacks
const divisores  = higherOrderFunction(7, divisoresComunes)
const esPrimo = higherOrderFunction(7, esNumeroPrimo)

console.log(divisores) // << [ 1, 7 ]
console.log(esPrimo) // << true
```

## Recursividad

Cuando una función se llama a sí misma se denomina recursividad. A no ser que se tenga claro lo que se hace habrá que tratar de evitarla.

```js
// Declaración de la función
function divisoresComunes (i, numberValue, divisoresTmp) {
   if (numberValue % i === 0) {
      divisoresTmp.push(i)
   }  
   if(i <= numberValue) {
    divisoresComunes(++i, numberValue, divisoresTmp) // Aquí la recursividad    
   }  
   return divisoresTmp
}

// Lanzamos la función
const divisores = divisoresComunes(1, 232, [])
```
[Volver](README.md)