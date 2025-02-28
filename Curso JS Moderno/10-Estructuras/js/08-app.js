const autenticado = true;

if (autenticado) {
    console.log('si');
}

const puntuaje = 500;

function revisar(){
    if (puntuaje > 400) {
        console.log('excelente');
        return;
    } else if (puntuaje > 300) {
        console.log('buen puntuaje');
        return;
    }   
}

revisar();