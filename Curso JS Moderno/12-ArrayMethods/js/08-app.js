const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

const prod = {nombre: 'HDD', precio: 1350};

const carrito2 = [...carrito, prod];
console.log(carrito2);
