// Temas puntuales de la sección
// En esta sección empezaremos nuestro camino aprendiendo sobre:

// Tipos de variables
// Números
// Booleanos
// Strings / Cadenas de caracteres

// Estructuras de control de flujo

// if
// if else
// else if

// ciclos o loops

// While
// Do While
// For

// Es una sección fundamental en el camino de todo desarrollador.


//COMENZAMOS DESDE AQUI :

// 1) TIPOS DE VARIABLES


// (A) Es muy importante no declarar variables con palabras reservadas del lenguaje de programacion, por ejemplo:

// let for = 'Hola';


// (B) Otra cosa importante y es nombrar tus varibles con base a los que se va a almacenar, basicamente que tenga sentido todo y que no comience con numeros, por ejemplo:

// let nombre1; let nombre_1; -> OK
// let 1nombre; let nombre@; -> X


// (C) Usar el CamelCase:

// let nombreCompleto; let direccionCasa;

// (D) Usar UpperCamelCase:

// let RegistroContable;


// 2) TIPOS DE DATOS:

// let salario = 1500; -> number
// let promedioNotas:number = 85; -> number
// let nombre:string = 'Franco'; -> String
// let activo:boolean = true; -> boolean

// Para el caso de los booleanos lo mejor es usar nombre de variables a corde a la lectura del valor de la variable, siempre debe leerse en positov, por ejemplo:

// let activo = true; -> OK
// let noActivo = false -> X


// PRACTICA CON LOS 3 TIPOS DE DATOS MENCIONADOS ANTERIORMENTE

let firstName: string = 'Jhan';
let lastName: string = 'Franco';

let fullName: string = firstName + ' ' + lastName;

console.log(fullName);

let number1: number = 10;
let number2: number = 20;

let number: number = number1 + number2;

console.log(number);
console.log(number1 + number2);


let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

console.log('isActive', isActive );
console.log(`isActive ${isActive}`);
console.log('isRunning', isRunning);
console.log('hasKids' + hasKids);



// 3) ESTRUCTURAS DE CONTROL

// Es la forma de tomar deciciones con base a condiciones

// IF <- Has esto
// ELSE <- Si no has esto

// Se pueden anidar varios IF - ELSE, pero no es lo comun y no es lo recomdable

// SWITCH <- Realiza multiples deciciones de forma limpia

// SWITCH (VARIABLE O EXPRESION A EVALUAR)
// CASE 1: "Hoy es lunes";
//          BREAK;
// CASE 2: "Hoy es martes";
//          BREAK;
// DEFAULT: "Hoy no es ni lunes, ni martes..."


// (A) IF

console.log('#### Inicio de programa ####');

// let isTired: boolean = true;

// if ( isTired ) {
//     console.log('Tomar cafe');
// } else {
//     console.log(`Tomar agua`);
// }

let grade: number = 100;

if ( grade >= 60 ) {
    console.log('Aprueba la clase');
} else if ( grade >= 50 ) {
    console.log('Por favor estudie mas');
} else {
    console.log('No aprueba la clase');
}



console.log('#### Fin de programa ####');



console.log('########');

let note: number = 70;
let gradeLetter: string;

if ( note >= 90 && note < 100) {
    gradeLetter = 'A';
} else if ( note >= 80 ) {
    gradeLetter = 'B';
} else if ( note >= 70 ) {
    gradeLetter = 'C';
} else if ( note >= 60 ) {
    gradeLetter = 'D';
} else {
    gradeLetter = 'F';
}

console.log(`La nota del estudiante es: ${gradeLetter}`);

console.log('########');


