const pendientes = ['tarea','comer','proyecto','estudiar'];

const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200, descuento: true},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto);
}