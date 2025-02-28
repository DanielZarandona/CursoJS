function sumar(a,b){
    return a+b;
}

const res = sumar(2,3);
console.log(res);

//ejemplo mas avanzado
let total = 0;

function carrito(precio){
    return total += precio;
}

function iva(total){
    return total * .10;
}

total = carrito(1000);
total = carrito(2000);
total = carrito(2000);
total = carrito(5000);

const precioFinal = iva(total);

console.log(`El total a pagar es: ${precioFinal+total}`);