
// (1) FUNCIONES

// Es un conjunto de lineas de codigo que realizan una tarea especifica y pueden retornar algo

// El return es lo que obtenemos cuando la ejecucion de la funcion termine, en este caso podemos retornar un resultado, pero para verlo por consola, toca dentro de un log llamar a la funcion de lo contrario dentro del scope de la funcion deberá llevar un log

export function saludar( name:string = 'Franco' ) {
    
    console.log(`Hello ${name}`);

}
let firstName:string = 'Jhan'
saludar(firstName);

import { añadeDosNumeros, restaDosNumeros, multiplicaDosNumeros, divideDosNumeros } from '../helpers2/math-helper';

let num1:number = 10;
let num2:number = 20;

let suma:number = añadeDosNumeros(num1, num2);
let resta:number = restaDosNumeros(num1, num2);
let multiplicacion:number = multiplicaDosNumeros(num1, num2);
let division:number = divideDosNumeros(num1, num2);
console.log(`
    Suma: ${suma},
    Resta: ${resta},
    Multiplicacion: ${multiplicacion},
    Division: ${division}
    `);

console.log(`
    `);


// Invocacion de dos fucniones encontradas en ./helpers2/tablaMultiplicacion 

import { multipliFor, multipliWhile } from '../helpers2/tablaMultiplicacion';
import { employees } from '../sections/arrays';

let base1:number = 1;
let limite1:number = 10;

multipliFor(base1,limite1);
// multipliWhile(base1,limite1);




// (2) ARREGLOS

// Basicamente es un conjunto de valores dentro de un contenedor o algo que los almacene en memoria



let flowers: string [] = ['Rosa', 'Girasol', 'Lirio'];

for( let i = 0; i < flowers.length; i++ ) {
    let flower = flowers[i]
    console.log('Flor: ', flower);
}

let employees1: string [] = ['Franco', 'Yadira', 'Rocky'];
let salaries: number[] = [1500, 2400, 3200];

for( let i = 0; i <= employees1.length -1; i++ ) {
    let empleados1 = employees1[i];
    let salarios = salaries[i];

    console.log(`${empleados1} tiene un salario de ${salarios}`);
}