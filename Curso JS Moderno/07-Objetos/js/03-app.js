//un objeto agrupa todo en una variable
const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
}

//agregar mas propiedades
producto.imagen = "imagen.jpg";

//eliminar mas propiedades
delete producto.disponible;
console.log(producto);
