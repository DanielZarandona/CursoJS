const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
    informacion: {
        peso: '1kg',
        medida: '1m'
    }
}

const {nombre, informacion:{peso}} = producto;

console.log(nombre);
console.log(peso);   