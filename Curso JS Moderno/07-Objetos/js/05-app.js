const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
}

console.log(producto.informacion.peso);
console.log(producto.informacion.medida);