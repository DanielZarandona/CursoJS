const reproductor = {//metodo de propiedad
    reproducir: function(name){
        console.log(`> Reproduciendo la cancion: ${name}`);
    },
    pausar: function(){
        console.log('pausando');
    },
    borrar: function(name){
        console.log(`Borrando: ${name}`);
    },
    crearPlaylist: function(name){
        console.log(`Creando la playlist de ${name}`);
    },
    repriducirPlaylist: function(name){
        console.log(`Reproduciendo la playlist: ${name}`);
    }
}

reproductor.reproducir('Por tu pugidos nos cacharon');
reproductor.reproducir('El ansioso');
reproductor.pausar();
reproductor.borrar(`El ansioso`);
reproductor.crearPlaylist('Corridos');
reproductor.crearPlaylist('Techno');
reproductor.repriducirPlaylist('Corridos');
