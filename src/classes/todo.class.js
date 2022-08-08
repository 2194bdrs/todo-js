export class Todo{

    static fromJason( {id, tarea, completado, creado} ){

        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;  // igual al id que se recibibe
        tempTodo.completado = completado;
        tempTodo.creado     = creado;


        return tempTodo;

    }

    constructor( tarea ) { // recibe lo que tiene que hacer ej, "comprar leche"

        this.tarea      = tarea; // comprar leche
        
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }
}