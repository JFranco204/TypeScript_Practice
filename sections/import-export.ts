import { 
    addTwoNumbers, 
    substractTwoNumbers, 
    timesTwoNumbers, 
    divideTwoNumbers 
}   from "../helpers/math-helpers";


let number1 = 10;
let number2 = 20;

let total1: number = addTwoNumbers(number1, number2);
let total2: number = substractTwoNumbers(number1, number2);
let total3: number = timesTwoNumbers(number1, number2);
let total4: number = divideTwoNumbers(number1, number2);


console.log('Add: ', total1);
console.log('Substract: ', total2);
console.log('Times: ', total3);
console.log('Divide: ', total4);



//let firstName = 'FRANCO'; // No estamos cambiandole el nomnbre a la funcion
// Solo que al poner dentro de la funcion algo que se va a tomar como el 
//Primer argumento, basicamente FirstName va a ser tomado como un string
//Y no como la variable que importamos

//greet(firstName);


