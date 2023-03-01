# JavaScrip

_JavaScript_ es un __lenguaje de programación de alto nivel__. Se trata e un lenguaje interpretado y no compilado.

  En un _lenguaje compilado_, la máquina de destino traduce directamente el programa. En un __lenguaje interpretado__, el código fuente no es directamente traducido por la máquina de destino.

El estándard que sigue hoy en día es [ECMAScript](https://es.wikipedia.org/wiki/ECMAScript)

  JavaScript fue desarrollado originalmente por __Brendan Eich__ de _Netscape_ con el nombre de Mocha, el cual fue renombrado posteriormente a _LiveScript_, para finalmente quedar como __JavaScript__.

Aquí tenemos a nuestro héroe
![Brendan Eich](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Brendan_Eich_Mozilla_Foundation_official_photo.jpg/900px-Brendan_Eich_Mozilla_Foundation_official_photo.jpg)

# Repaso rapidito

## Variables

- Una __variable__ es un _contenedor de información_  que apunta a un lugar de memoria
- La variables que no pueden modificarse se llaman __constantes__
- Clasificación de variables según su tipo
  1. __Primitivos__ o __inmutables__ (number, string, boolean, bigint, undefind, Symbol)
  2. De __referencia__ o __mutables__, en definitva todos los que no son primitivos
  3. No está en esta clasificación pero ponemos el caso raro o bug __null__
- Las __variables__ y __constantes__ se deben siempre declarar en ES6 con las palabras reservadas __let__ o __const__

  ```js
  // Definición (utilizando camelCase) e iniciación de una variable
  let newAge = age
  const PI = 3.1416
  ```

## console.log

Para depurar nuestro código y ver resultados como desarrolladores disponemos del uso de la consola. Hay varias opciones para lanzarla: 
- Comando __node__ si tenemos instalado __nodejs__
    node fichero.js
- Navegador, por ejemplo:
    - Escribir en la barra de direcciones __about:blank__ o abrir una pestaña del navegador en cualquier pestaña
    - Abrir el inspector e ir a la opción de la consola

## Enlaces de interés

- [Apuntes de Bluuweb](https://bluuweb.dev/04-javascript/javascript.html)
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide)
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

## [Estructura de control if]((https://www.freecodecamp.org/espanol/news/javascript-if-else-y-if-then-sentencias-condicionales-en-js/))

Con esta estructura de control podemos tomar decisiones. Esta estructura _no es un función_ a pesar de los paréntesis.

### Sintaxis
    
```js
if (condicion) {
  sentencias
} else {
  sentencias
}
```

### Explicación rápida

El __if...else__ es un __tipo de instrucción condicional__ que ejecutará un bloque de código cuando la condición de la instrucción if sea _veraz_ __truthy__. Si la condición es _falsa_ __falsy__, se ejecutará el bloque else.

Los valores veraces truthy y falsos falsy __se convierten en verdaderos__ true o falsos false en las sentencias if.

Ejemplo: En lógica cualquier número diferente de 0 es __truthy__ por tanto en una instrucción if se convierte a true. Ejemplo

```js
if (3) { // 3 es truthy y por tanto se convierte en true
  console.log('No es un cero')
} else {
  console.log('Es un cero') // Nunca se cumple esta sentencia
}
```
Aquí hay una lista de valores falsos falsy:

- false
- 0 ('number')
- -0 (cero negativo)
- 0n (BigInt cero)
- "", '', \`\`  (empty string)
- null
- undefined
- NaN (Not a Number)

## <abbr title="Not a Number">NaN</abbr>

Esta __expresión literal__ se muestra cuando la __expresión__ <strong>NO</strong> es un número

```js
console.log(0 / 0) 
// -> NaN. Puesto que esta operación no es posible
```

  ⚠️⚠️⚠️ No sirve para que evaluar puesto que:

  ```js
  NaN ===NaN // >> false
  ```

Para ello existe una función para saber si una expresión se trata de un __Not a Number__:  isNaN()

```js
console.log(isNaN('Xurxo')) 
// -> true. Puesto que 'Xurxo' no es un número
```
__isNaN()__ es útil con estructras de control como __if__ que veremos pronto pronto pronto que es ya
  
## Estructuras de control. Bucles

Las estructuras denominadas __bucles__ nos permiten realizar tareas repetitivas mientras que una __condición sea truthy__. A continuación mostramos dos de las más comunes.

### while

```js
let name = 'George' // Declaración e incialización de variables
let size = name.length // tamaño de un string
let i = 0 // Una variable que sirve de índice para recorrer el string

// Bucle while
while ( i < size) { // Mientra que la condición sea truthy dará vueltas // ⚠ OJO a los BUCLES INFINITOS
  console.log(name[i])
  i++ // incrementamos índice
}
```

## for
Nos facilita las cosas

```js
let name = 'George' // Declaración e incialización de variables
for (let x = 0; x < name.length; x++) {
   console.log(name[x])
}
```

## Datos no primitivos o mutables

### Arrays, vectores, listas o matrices

Nos permiten coo indica su nombre guardar colección de datos primitivo o no pritivos.
A continuación algunas de las operaciones que podemos realizar con los arrays.

```js
// Inicializar una lista, vector o array
const newArray = []

// Array con datos
const names = ['Xurxo', 'Irene', 'Manuel']

// Recorrido de un array
for (let i = 0; i < names.length; i++) {
  console.log(names[i])
} // >> 'Xurxo', 'Irene', 'Manuel'

// Añadir un elemento a un array
newArray.push(1) // >> [1]
newArray.push(2) // >> [1, 2]

// Eliminar último elemento de un array
const removedItem = names.pop() // >> ['Xurxo', 'Irene']
```

## Funciones

La sintaxis tradicional es: 

```js
function miFuncion (parameter1, parameter2, parameterN) {
  
  // instrucción 1
  // instrucción 2
  // instrucción n

  return valor // Si no hay retorno la función pasa a llamarse "Procedimiento"
}
```

Sintáxis desde __ES6__

```js
const miFuncion = (parameter1, parameter2, parameterN) => {  // No olvides el operador flecha =>

  // instrucción 1
  // instrucción 2
  // instrucción n

  return valor // Si no hay retorno la función pasa a llamarse "Procedimiento"
}
```
### Higher Order Function (HOF) y callback  

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

### Recursividad

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

## Capturar elementos del <abbr title="Document Object Model">DOM</abbr>

A la hora de capturar elementos del <abbr title="Document Object Model">DOM</abbr> disponemos de varíos __métodos__
  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByTagName

Para saber como funcionan y otros métodos de captura disponemos de la guía online de __MDN__, por ejemplo, [querySelectorAll](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)

```js
// Captura de un botón cuyo atributo id es "btn"
const btn = document.querySelector('#btn')
```

## Importación y exportación de módulos

En __Vanilla JavaScript__ para que un fichero JavaScript (js) importado desde la __etiqueta__ _script_ pueda importar __módulos__ desde otros ficheros js hay que utilizar el atributo y valor __type="module"__

```html
<script src="script.js" type="module"></script>
```

Más información en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#aplicar_el_m%C3%B3dulo_a_tu_html)

## Ejercicios básicos

1. [x] Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
2. [x] Realiza el mismo ejercico que el anterior pero mostrándolo en una variable
3. [x] Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
4. [x] Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
5. [x] Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
6. [x] Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
7. [x] Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
![Mayor de 3](./assets/mayor_de_tres.jpg)
8. [x] Escribe un programa que pida un número y diga si es divisible por 2
9. [x] Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a (No hay que escribir acentos)
10. [x] Escribe un programa que pida una frase y escriba las vocales que aparecen (No hay que escribir acentos y sólo minúsculas)
11. [x] Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales (No hay que escribir acentos)
12. [x] Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
13. [x] Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
14. [x] Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
15. [x] Escribir un programa que escriba en pantalla los divisores de un número dado
16. [x] Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
17. [x] Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
18. [x] Realizar un programa que acepte dos números obtenidos de sendos controles de formuario de tipo _text_ y reste simpre el mayor de los dos


## Sesión 7


## Ejercicio de refuerzos


- [Ejercicios de DOM](https://github.com/webferrol/dom-js-newbie)
- [Ejercicios de repaso](https://github.com/webferrol/js-repaso-newbie)