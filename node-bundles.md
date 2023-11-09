## Importación y exportación de módulos

En __Vanilla JavaScript__ para que un fichero JavaScript (js) importado desde la __etiqueta__ _script_ pueda importar __módulos__ desde otros ficheros js hay que utilizar el atributo y valor __type="module"__

```html
<script src="script.js" type="module"></script>
```

Más información en [MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules#aplicar_el_m%C3%B3dulo_a_tu_html)

## node

[Node.js®](https://nodejs.org/es/) es un __entorno de ejecución__ para JavaScript construido con __V8__, __motor de JavaScript de Chrome__.
Esto no quiere más que decir que puedes ejecutar JavaScript en cualquier entorno además del __browser__

Para iniciar node:

```sh
npm init -y
```

El fichero característico de este __entorno__ es el archivo llamado __package.json__
Esto nos abre la oportunidad de instalar un montón de librerías en __JavaScript__ que nos permite realizar múltiples aplicaciones tanto del lado cliente como del servidor

## Vite

[Vite](https://es.vitejs.dev/) es una __herramienta frontend__

Si quieres saber para qué nos sirve todo mira este [enlace](https://es.vitejs.dev/guide/why.html)

Para inciciar vite con __npm__

```sh
npm create vite@latest
```
Por cierto el creador del __bundle__ o empaquetador __Vite__ así como el creador de la _librería_ de __Vue__ fue un tal __Evan You__

![Evan You](https://images.ctfassets.net/s5uo95nf6njh/2fEr6ctL9FxPtOPhUcM4FA/773007e573bfa16aebdb736f767b45fa/evan-you-hero.jpg)


[Volver](README.md#tabla-de-contenidos)