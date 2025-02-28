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

const producto3 = {
    nombre: 'compu',
    precio: 200
}

let res;

res = [...carrito, producto];
res = [...res, producto1];
res = [producto2, ...res]
res = [producto3, ...res]

//eliminar ultimo elemento de un arreglo
res.pop();  

//eliminar del inicio del arreglo
res.shift();

//eliminar un elemento especifico
res.splice(0,1);

console.log(res);