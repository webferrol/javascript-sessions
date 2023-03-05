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

[Volver](README.md)