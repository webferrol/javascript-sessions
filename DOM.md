# Capturar elementos del <abbr title="Document Object Model">DOM</abbr>

A la hora de capturar elementos (__nodos__) del <abbr title="Document Object Model">DOM</abbr> disponemos de varíos __métodos__

Ahora un repaso a los más comunes.

## Creación, eliminación o modificación de nodos

1. Seleccionar un elemento del DOM

```js
const app = document.querySelector('#app')
```
2. Crear un nodo

```js
const btnEL = document.createElement('button')
```

3. Añadir un nodo a otro

```js
const app = document.querySelector('#app')
const btnEL = document.createElement('button')
btnEl.value = 'Púlsame'
btn.classList.add('btn','btn-primary')

app.appendChild(btnEl) // Añadimos aquí. También tenemos método append()
```

## Métodos y propiedades aplicados a nodos del DOM
1. Añadir una clase a un nodo

```js
btn.classList.add('btn') // para eliminar sería. btn.classList.remove('btn')
```

[Volver](README.md)