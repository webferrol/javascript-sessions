# Promesas

## API Fetch
Esta __API__ nos devuelve una _promesa_ de un servidor externo que nos permite obtener información en textos planos sobre todo pensado para formatos __json__

### then / catch

```js
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ce841c1c&s=matrix'

fetch(url)
  .then(response => response.json())
  .then(data => console.log)
  .catch(error=>console.log)
```

### async / await

```js
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=ce841c1c&s=matrix'

async function getMatrixMovies () {
  try {
    const response = await fetch(url)
    const data = await response.json()    
  } catch(error) {
    console.log(error)
  }  
}
(async () => {
  console.log(await getMatrixMovies())  
})()
```