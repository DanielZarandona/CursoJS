const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//foreach
let res = '';
carrito.forEach((producto, index) => {
    if (producto.nombre === 'Tablet') {
        res = carrito[index];
    }
});
console.log(res);

//.find
const res2 = carrito.find(producto => producto.nombre === 'Tablet');
console.log(res2);