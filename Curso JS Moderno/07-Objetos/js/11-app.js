const producto = {
    nombre: "monitor",
    precio: 500,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}

producto.mostrarInfo();