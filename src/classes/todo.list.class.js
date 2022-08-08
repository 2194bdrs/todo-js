import { Todo } from "./todo.class";

export class TodoList {

    constructor(){

        // this.todos = []; // aqui estan las tareas 
        this.cargarLocalStorage();
    }

    nuevoTodo( todo ){
        this.todos.push( todo );  // inserta las tareas al arreglo 
        this.guardarLocalStorage();
    }

    eliminiarTodo( id ){
        this.todos = this.todos.filter( todo => todo.id != id )  // callback regresa todos excluyendo el id que coincida
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){
        for( const todo of this.todos ){
            if (todo.id == id){
                todo.completado = !todo.completado; // si el primero es true, el otro es falso
                this.guardarLocalStorage();
                break
            }
        }

    }

    elmiinarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado )
        this.guardarLocalStorage();
    }


    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos)); //el JSON convierte el arrreglo de todos a un JSON perfecto

    }

    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo') ? JSON.parse (localStorage.getItem('todo')) : this.todos = []);

        this.todos = this.todos.map( obj => Todo.fromJason(obj) ); // barrer los elementos de de un arreglo y devolver un arrrglo con los objetos mutados

    }
}