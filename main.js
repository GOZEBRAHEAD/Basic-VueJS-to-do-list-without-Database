const app = new Vue({
    el: "#app",
    data: {
        tituloAPP: "Esta es una página de prueba",
        listaTareas: [],
        nuevaTarea: ""
    },
    methods: {
        agregarTarea () {
            this.listaTareas.push({
                nombre: this.nuevaTarea
            });

            this.nuevaTarea = "";
        },

        eliminarTarea (index) {
            this.listaTareas.splice(index, 1);
        }
    }
});