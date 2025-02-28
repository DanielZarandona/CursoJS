const efectivo = 300;
const credito = 400;
const disp = efectivo + credito;
const totalPagar = 600;

if (credito >= totalPagar || efectivo >= totalPagar || disp >= totalPagar) {
    console.log('si puedes comprar');
} else {
    console.log('No puedes comprar');
}