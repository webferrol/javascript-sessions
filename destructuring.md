# Destructuring

## Objects

```js
const xurxo = {
  nombre: 'Jorge',
  apellido1: 'González',
  apellido2: 'Tenreiro',
  fecha_nacimiento: '1973-06-04'
}

const { nombre, apellido1, apellido2 } = xurxo 

console.log(`Mi nombre es ${nombre + ' ' + apellido1 + ' ' + apellido2}`)
// >>'Mi nombre es Jorge González Tenreiro'


function mapper (xurxoMapping) {
  const { nombre, apellido1, apellido2, fecha_nacimiento } = xurxoMapping
  return {
    nombre,
    apellido1,
    apellido2,
    fechaNacimiento: fecha_nacimiento
  }
}

// Esto es lo mismo pero con destructuring como parámetro
// function mapper ({ nombre, apellido1, apellido2, fecha_nacimiento }) {
//   return {
//     nombre,
//     apellido1,
//     apellido2,
//     fechaNacimiento: fecha_nacimiento
//   }
// }

const { nombre:miNombre, fechaNacimiento } = mapper(xurxo)
console.log(`${miNombre} nació ${fechaNacimiento.split('-').reverse().join('-')}`)
// 'Jorge nació 04-06-1973'
```

## Arrays

```js
const fibonacci = [1, 1, 2, 3, 5, 8]
const [a, b] = fibonacci
console.log(a,b)
// >> 1 1

const [c, d, ...args] = fibonacci // rest operator
console.log(c, d, args)
// >> 1 1 [ 2, 3, 5, 8 ]


// Quedarse con el número mayor
const cualEsMayor = [1, 2]

let [arg1, arg2] = cualEsMayor

if (arg1 < arg2)
  [arg1 , arg2] = [arg2, arg1]

console.log(arg1)
// >> 2 
```
