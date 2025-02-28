"use strict";

const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true
}

//prohibir modificar objetos
Object.seal(producto);

console.log(Object.isSealed(producto));