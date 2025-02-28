const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true
}

function  Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

const res = console.log(new Producto("perro", "100"));