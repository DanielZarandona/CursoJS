const pendientes = ['tarea','comer','proyecto','estudiar'];

for(let pendiente in pendientes){
    console.log(pendiente);
}

console.log('\n');

const auto = {
    modelo: 'Kia',
    year: 2023,
    motor: '1.6'
}

for (let [automovil, propiedad] of Object.entries(auto)) {
    console.log(automovil, propiedad);
}