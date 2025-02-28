const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true
}

const medias = {
    nombre: "monitor",
    precio: 500,
    disponible: true
}

const res = {...producto, ...medias};

console.log(Object.assign(producto, medias));