// (1) ARREGLOS

// Basicamente es un conjunto de valores dentro de un contenedor o algo que los almacene en memoria

// Es un conjunto de lineas de codigo que realizan una tarea especifica y pueden retornar algo

// El return es lo que obtenemos cuando la ejecucion de la funcion termine, en este caso podemos retornar un resultado, pero para verlo por consola, toca dentro de un log llamar a la funcion de lo contrario dentro del scope de la funcion deberá llevar un log

export function saludar( name:string = 'Franco' ) {
    
    console.log(`Hello ${name}`);

}

let firstName:string = 'Jhan'

saludar(firstName);
