let num = 7
let esPrimo = true // switch

if (num === 0 || num === 1) {
  esPrimo = false
} else {

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false
      break
    }
  }
}

if (esPrimo) {
  console.log(`${num} es primo`)
} else {
  console.log(`${num} NO es primo`)
}
