# Capturar elementos del <abbr title="Document Object Model">DOM</abbr>

A la hora de capturar elementos (__nodos__) del <abbr title="Document Object Model">DOM</abbr> disponemos de varíos __métodos__
  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByTagName

Para saber como funcionan y otros métodos de captura disponemos de la guía online de __MDN__, por ejemplo, [querySelectorAll](https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll)

Ahora un repaso a los más comunes.

## Creación, eliminación o modificación de nodos

1. Seleccionar un elemento del DOM

```js
const btn = document.querySelector('#btn')
```
2. Crear un nodo

```js
const btnEL = document.createElement('button')
```

## Métodos y propiedades aplicados a nodos del DOM
1. Añadir una clase a un nodo

```js
btn.classList.add('btn') // para eliminar sería. btn.classList.remove('btn')
```

[Volver](README.md)