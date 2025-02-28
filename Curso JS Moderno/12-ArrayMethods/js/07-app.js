const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

//.concat
const union = meses.concat(meses2);
console.log(union);

//spread
const union2 = [...meses, ...meses2];
console.log(union2);