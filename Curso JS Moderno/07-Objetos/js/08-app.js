"use strict";

const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true
}

//prohibir modificar objetos
Object.freeze(producto);

console.log(Object.isFrozen(producto));