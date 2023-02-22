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
  1. Primitivos o inmutables (number, string, boolean, bigint, undefind, Symbol)
  2. De referencia o mutables, en definitva todos los que no son primitivos
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
  
## Ejercicios básicos

- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
- Realiza el mismo ejercico que el anterior pero mostrándolo en una variable
- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
- Escribe un programa que pida un número y diga si es divisible por 2
- Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
- Escribe un programa que pida una frase y escriba las vocales que aparecen
- Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales
- Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)
- Escribir un programa que escriba en pantalla los divisores de un número dado
- Escribir un programa que escriba en pantalla los divisores comunes de dos números dados
- Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)


# Sesión 2

A ver que nos depara la vida