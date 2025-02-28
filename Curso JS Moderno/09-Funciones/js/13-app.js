const reproductor = {//metodo de propiedad
    cancion: '',
    reproducir:  name => console.log(`> Reproduciendo la cancion: ${name}`),
    pausar: () => console.log('pausando'),
    borrar: name => console.log(`Borrando: ${name}`),
    crearPlaylist: name => console.log(`Creando la playlist de ${name}`),
    repriducirPlaylist: name => console.log(`Reproduciendo la playlist: ${name}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo: ${cancion}`);
    },
    get obtenerCancion(){
        console.log(this.cancion);
    }
}

reproductor.nuevaCancion = 'RR';
reproductor.obtenerCancion;

reproductor.reproducir('Por tu pugidos nos cacharon');
reproductor.reproducir('El ansioso');
reproductor.pausar();
reproductor.borrar(`El ansioso`);
reproductor.crearPlaylist('Corridos');
reproductor.crearPlaylist('Techno');
reproductor.repriducirPlaylist('Corridos');