const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];
//cuanto mide el arreglo
//console.log(meses.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
}

console.log("\n");

carrito.forEach(element =>{
    console.log(`${element.nombre} - Precio ${element.precio}`);
});