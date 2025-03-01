const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText);//si en CSS esta hidden no lo va a encontrar
// console.log(encabezado.textContent);//este es el bueno
// console.log(encabezado.innerHTML);// se trae el html

// document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

const img = document.querySelector('.card img');
console.log(img);