var app = new Vue({
    el: '#app',
    data: {
        seccion: "UE"
    }
})

function cambiarSeccion(nuevaSeccion){
  app.seccion = nuevaSeccion;
}
