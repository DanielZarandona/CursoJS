const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
}

//const nombre = producto.nombre;

//destructuring
const {nombre, precio} = producto;


console.log(nombre);
console.log(precio);