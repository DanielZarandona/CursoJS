// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         console.log('cinco');
//         continue;
//     }
//     // continue;
//      console.log(`Número: ${i}`);
// }

const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200, descuento: true},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];

for (let index = 0; index < carrito.length; index++) {
    if (carrito[index].descuento) {
        console.log(`${carrito[index].nombre} TIENE DESCUENTO!`);
        continue;
    }
    console.log(carrito[index].nombre);
}