const carrito = [];

const producto = {
    nombre: 'tablet',
    precio: 200
}

const producto1 = {
    nombre: 'perro',
    precio: 200
}

const producto2 = {
    nombre: 'compu',
    precio: 200
}

let res;

res = [...carrito, producto];
res = [...res, producto1];
res = [producto2, ...res]

console.log(res);