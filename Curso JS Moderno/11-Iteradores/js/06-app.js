const pendientes = ['tarea','comer','proyecto','estudiar'];

pendientes.forEach((element,index) => {
    console.log(`${index} ${element}`);
});

console.log('\n');

const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200, descuento: true},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];

carrito.forEach((producto) => {
    console.log(`${producto.nombre} ${producto.precio}`);
});

console.log('\n');

const nuevoArreglo = carrito.map((producto) => {
    console.log(`${producto.nombre} ${producto.precio}`);
    
});