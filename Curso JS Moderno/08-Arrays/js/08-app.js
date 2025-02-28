const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
}

//const nombre = producto.nombre;

//destructuring
const {nombre} = producto;


console.log(nombre);


//destructuring con arreglos
const numeros = [10,20,30,40,50];

const [cero, uno, dos, tres, cuatro, cinco] = numeros;


console.log(cero);
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);

const numeros1 = [10,20,30,40,50];

const [,,,num] = numeros;
console.log(num);