const enlace = document.createElement('A');

//agregandole el texto
enlace.textContent = 'nuevo enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';
enlace.target = "_blank";
enlace.setAttribute('data-enlace','nuevo-enlace');
enlace.classList.add('alguna-clase');
console.log(enlace);

enlace.onclick = miFuncion;

//seleccionar navegacion
const nav = document.querySelector('.navegacion');
nav.insertBefore(enlace, nav.children[1]);
console.log(nav.children);

function miFuncion () {
    alert('diste click');
}

//crear un card
const p1 = document.createElement('P');
p1.textContent = 'concierto';
p1.classList.add('categoria','concierto')

const p2 = document.createElement('P');
p2.textContent = 'concierto de corridos';
p2.classList.add('titulo')

const p3 = document.createElement('P');
p3.textContent = '$50000 por persona';
p3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

//crear la img
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
imagen.alt = 'texto alternativo';

//crear card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

// insertar en HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);