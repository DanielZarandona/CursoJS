// for (let i = 1; i <= 10; i++) {
//     console.log(`Número: ${i}`);
// }

// for (let i = 1; i <= 20; i++) {
//    if (i % 2 === 0) {
//         console.log(`El número ${i} es par\n`);
//    }else{
//     console.log(`El número ${i} es impar`);
//    }
// }     

const carrito = [
    {nombre:'cpu', precio:200},
    {nombre:'lap', precio:200},
    {nombre:'monitor', precio:200},
    {nombre:'mouse', precio:200},
    {nombre:'tablet', precio:200}
];

for (let index = 0; index < carrito.length; index++) {
    const element = carrito[index];
    console.log(element);
}