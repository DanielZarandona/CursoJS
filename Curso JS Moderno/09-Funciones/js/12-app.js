const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];


carrito.forEach(element => console.log(`${element.nombre} - Precio ${element.precio}`));

console.log('\n');

//.map puede crear un nuevo arreglo y foreach no
carrito.map(carrito => console.log(`${carrito.nombre} - Precio ${carrito.precio}`));