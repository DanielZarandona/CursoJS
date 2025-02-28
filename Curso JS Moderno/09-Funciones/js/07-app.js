IniciarApp();

function IniciarApp(){
    console.log('Iniciando App...');
    SegundaFuncion();
}

function SegundaFuncion(){
    console.log('Segundaaaaaa');
    usuarioAutenticado('Daniel')
}

function usuarioAutenticado(usuario = 'Sin nombre'){
    console.log('Autenticando usuario...');
    console.log(`Usuario Autenticado exitosamente: ${usuario}`);
}