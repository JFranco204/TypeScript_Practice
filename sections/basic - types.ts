//Ejemplo con tipo de dato string o cadena de caracteres
export let firstName:string = 'Jhan';
let lastName:string = 'Franco';
let fullName:string = firstName + lastName;
let fullNameSpace:string = firstName + ' ' + lastName;

console.log(fullNameSpace);

//Ejemplo con tipos de datos numericos
let number1:number = 10;
let number2:number = 20;

console.log(number1 + number2);


//Ejemplo con tipos de datos booleanos
let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

isActive = !isActive; //Cambia el valor de la variable con negacion !

console.log('isActive', isActive);
console.log('isRunning', isRunning);
console.log('hasKids', hasKids);