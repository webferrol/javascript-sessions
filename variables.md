# Variables
- Una __variable__ es un _contenedor de información_  que apunta a un lugar de memoria

- La variables que no pueden modificarse se llaman __constantes__
- Clasificación de variables según su tipo
  1. __Primitivos__ o __inmutables__ (number, string, boolean, bigint, undefind, Symbol)
  2. De __referencia__ o __mutables__, en definitiva todos los que no son primitivos
  3. No está en esta clasificación pero ponemos el caso raro o bug __null__
- Las __variables__ y __constantes__ se deben siempre declarar en ES6 con las palabras reservadas __let__ o __const__

```js
// Definición (utilizando camelCase) e iniciación de una variable
let newAge = age
const PI = 3.1416
```

# Primitivos

## string

Recordermos que por su naturaleza son inmutables.
```js
let nombre = 'Jorge'
console.log(nombre[0]) // >> 'J' Se pueden realizar operaciones de lectura
nombre[0] = 'X'
console.log(nombre) // >> 'Jorge' No admite operaciones de escritura. Inmutabilidad
```

A continuación nos centraremos en algunas __propiedades__ y __métodos__ que podemos realizar en las cadenas de texto.

### Propiedades sobre String

```js
let fullName = 'Xurxo González Tenreiro'
```

1. __Propiedad__ que indica el tamaño de una cadena de texto o __string__

```js
fullName.length // >> 23
```

### Métodos sobre String

2. __Método__ para obtener un __array__ de un string

```js
fullName.split(' ') // >> ['Xurxo', 'González', 'Tenreiro']
```

3. __string.replace__ Nos permite reemplazar subcadenas de texto

```js
'Xurxo,González,Tenreiro'.replace(',', ' ') // >> 'Xurxo González,Tenreiro' 
```
__Problema__: No podemos hacerlo __global__. Es decir sólo sustituye la primera coincidencia.

__Solución__: Expresiones regulares

```js
'Xurxo,González,Tenreiro'.replace(/,/g, ' ') // >> 'Xurxo González Tenreiro' 
```
4. __string.match__ Muy parecido al anterior pero busca las ocurrencias

```js
'Xurxo,González,Tenreiro'.match(/,/g) // [',', ',']
```
Si no encuentra ocurrencias devuelve __null__

```js
'Xurxo González Tenreiro'.match(/,/g) // null
```

# Inmutables

## Arrays, vectores, listas o matrices

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
```
<a name="arr"></a>
### Métodos y propiedades en arrays

```js
const numeros = [0, -1 , 1]
```

### Propiedades sobre Arreglos (también llamados arrays o vectores)

1. __Propiedad__ que indica el tamaño de un __array__

```js
numeros.length // >> 3
```

### Métodos sobre Arreglos (también llamados arrays o vectores)

1. __Método__ para añadir un elemento al __array__

```js
numeros.push(0) // >> [0, -1, 1, 0]
numeros.push(22) // >> [0, -1, 1, 0, 22]
```
2. __Método__ para eliminar el último elemento de un __array__

```js
const removedItem = numeros.pop() // >> [0, -1, 1, 0]
console.log(removedItem) // >> 22
```

3. Concatenar elementos de un array con un separador

```js
numeros.join('❤️') // >> '0❤️-1❤️1❤️0'
```

__A CONTINUACIÓN VEREMOS MÉTODOS AVANZADOS EN LOS ARRAYS__

4. array.prototype.reduce():  __función reductora__ sobre cada elemento de un array, devolviendo como resultado __un único valor__. Podemos ver más informacion en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

Deseamos obtener la suma total de los elementos contenidos en el siguiente __array__:

```js
const numeros = [1, 2, 3, 4]
```

Con un __ciclo for__ y un __acumulador__ podríamos obtener la suma total de los números del array:

```js
let addedNumbers = 0
for (let i = 0; i < numeros.length; i++) {
  addedNumbers += numeros[i]
}

console.log(numeros.join('+'),'=',addedNumbers) // >> '1+2+3+4' '=' 10
```
Podríamos obtener el mismo resultado con un __método__ o __función reductora__:

```js
const addedNumbers = numeros.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}) // Nótese que en la variable accumulator no me hizo falta iniciarlo a cero

console.log(numeros.join('+'),'=',addedNumbers) // >> '1+2+3+4' '=' 10
```

Otro ejemplo. Para calcular cúantos número positivos, negativos o ceros que hay en un array podemos realizarlo utilizando un __lenguaje imperativo__:

```js
const numeros = [0, 0, -3, 4]
```

```js
let pos = 0
let neg = 0
let zer = 0

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) pos++
  else if (numeros[i] < 0) neg++
  else zer++
}

console.log('Positives:',pos, 'Negatives:', neg, 'Zeros:',zer) // >> 'Positives:' 1 'Negatives:' 1 'Zeros:' 2
```

O de __manera declarativa__: 

```js
// contadores: [positives, negatives, zeros]
const contadores = numeros.reduce((previousValue, currentValue) => {
  if (currentValue > 0) previousValue[0]++
  else if (currentValue < 0) previousValue[1]++
  else previousValue[2]++
  return previousValue
}, [0,0,0])

console.log('Positives:',contadores[0], 'Negatives:', contadores[1], 'Zeros:',contadores[2]) // >> 'Positives:' 1 'Negatives:' 1 'Zeros:' 2
```

5. array.prototype.map

Nos permite iterar sobre cada elemento de un array y devolver un nuevo array con las operaciones realizada:

```js
const edades = [18, 15, 13, 1]

const mayorMenorEdades = edades.map((value) => {
  return value >= 18 ? 'Mayor de edad: ' + value : 'Menor de edad: ' + value
})

console.log(mayorMenorEdades) // >> [ 'Mayor de edad: 18', 'Menor de edad: 15', 'Menor de edad: 13', 'Menor de edad: 1' ]
```


__NO OBSTANTE NO HAY QUE OBSESIONARSE. LO QUE PRIMA COMO SIEMPRE ES LA LEGIBILIDAD DEL CÓDIGO__

[Volver](README.md#tabla-de-contenidos)
