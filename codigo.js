const app = Vue.createApp({
    
    data(){
        return {
            titulo: "Lista de nombres",
            arrayDatos: [],
            ingresoNom: '',
            ingresoEdad: '',
            // Ver o no ver el formulario de actualizar
            formEditar: false,

            // La posición de tu lista donde te gustaría actualizar 
            idEditar: -1,

            // Input nombre dentro del formulario de actualizar
            cambiarNom: '',

            // Input edad dentro del formulario de actualizar
            cambiarEdad: ''       
        }
    },
    methods:{
        guardarDato(){
            this.arrayDatos.push({
                nombre: this.ingresoNom,
                edad: this.ingresoEdad
            });
            console.log(this.ingresoNom, this.ingresoEdad);
            this.ingresoNom = '';
            this.ingresoEdad = '';
            localStorage.setItem('lista-vue', JSON.stringify(this.arrayDatos));
        },
        borrar(index){
            this.arrayDatos.splice(index, 1);
            localStorage.setItem('lista-vue', JSON.stringify(this.arrayDatos));
        },
        edit(index){
            localStorage.setItem('lista-vue', JSON.stringify(this.arrayDatos));
        },
        verFormEdit(index) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.idEditar = index;
            this.cambiarNom = this.arrayDatos[index].nombre;
            this.cambiarEdad = this.arrayDatos[index].edad;
            
            // Mostramos el formulario
            this.formEditar = true;
        },
            
        guardarEdicion(index) {
            // Ocultamos nuestro formulario de actualizar
            this.formEditar = false;
            
            // Actualizamos los datos
            this.arrayDatos[index].nombre = this.cambiarNom;
            this.arrayDatos[index].edad = this.cambiarEdad;
            localStorage.setItem('lista-vue', JSON.stringify(this.arrayDatos));
        }
        
    },
    created() {
        let todosDatos = JSON.parse(localStorage.getItem('lista-vue'));
        if(todosDatos === null){
            this.arrayDatos = [];
        }else{
            this.arrayDatos = todosDatos;
        }
    }
});