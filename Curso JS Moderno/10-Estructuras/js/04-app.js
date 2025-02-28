//else if
const dinero = 500;
const totalPago = 235;
const tarjeta = true;

if (dinero >= totalPago && tarjeta) {
    console.log('Pagable con o sin tarjeta');
} else{
    console.log('No pagable');
}