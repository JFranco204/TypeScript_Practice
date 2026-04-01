// Imports
import { countAge,
        addTwocoins,
        divideTwocoins,
        substractTwocoins,
        timesTwocoins  } from '../helpers/helperPrueba';

// Ejemplo con funcion de correos
// let emails: string = addTwoEmails('yadira@gmail.com');

// console.log('Tus correos son: ', emails);


// Variables globales
let num1: number = 10;
let num2: number = 20;


let total1: number = addTwocoins(num1, num2);
let total2: number = substractTwocoins(num1, num2);
let total3: number = timesTwocoins(num1, num2);
let total4: number = divideTwocoins(num1, num2);

// Part ADD
console.log('Tu coin add es:', total1);

// Part Susbtract
console.log('Tu coin substract es:', total2);

// Part Times
console.log('Tu coin Times es:', total3);


// Part Divide
console.log('Tu coin Divide es:', total4);










console.log('---- Aqui inicia tu prueba propia ----');

let result: string = countAge('2025', '2026');
console.log('Tus años son: ', result);

console.log('---- Aqui finaliza tu prueba propia ----');
