const carrito = [];

//definir producto
const producto = {
    nombre: 'monitor',
    precio: 400
}

const producto2 = {
    nombre: 'cel',
    precio: 400
}

carrito.push(producto)

carrito.unshift(producto2);

console.table(carrito);