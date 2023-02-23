'use strict'

/**
 * Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
 */

let n1 = prompt('Dame un número')


if (n1 !== null) {

  if (!isNaN(n1)) { // Empiezo con el segundo número
    let n2 = prompt('Dame otro número')

    if (n2 !== null) {
      if (!isNaN(n2)) {
        // todo está ok podemos comparar
        let n1Number = Number(n1)
        let n2Number = Number(n2)
        if (n1Number > n2Number) {
          alert(`${n1} es mayor que ${n2}`)
        } else if (n1Number === n2Number) {
          alert(`${n1} son iguales`)
        } else {
          alert(`${n1} es menor que ${n2}`)
        }
      } else {
        alert(`"${n2}" no es un número válido`)
      }
    }

  } else {
    alert(`"${n1}" no es un número válido`)
  }

}