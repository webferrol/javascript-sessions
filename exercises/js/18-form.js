'use strict'

const formEL = document.querySelector('#form-18')

// Functions && precedures

function restarMinuendoMayorSiempre (number1, number2) {
  if (number1 < number2) {
    return number2 - number1
  } 
  return number1 - number2
}


// Event
formEL.addEventListener(
  'input',
  () => {
    if (isNaN(formEL.number1.value) || isNaN(formEL.number2.value)) return

    const result = restarMinuendoMayorSiempre(
      Number(formEL.number1.value),
      Number(formEL.number2.value)
    )
   
    formEL.result.value = result
  }
)