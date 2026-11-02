import { resultado } from './refuerzoCurso';
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

// Para el caso de los booleanos lo mejor es usar nombre de variables a corde a la lectura del valor de la variable, siempre debe leerse en positivo, por ejemplo:

// let activo = true; -> OK
// let noActivo = false -> X


// PRACTICA CON LOS 3 TIPOS DE DATOS MENCIONADOS ANTERIORMENTE

let firstName: string = 'Jhan';
let lastName: string = 'Franco';

let fullName: string = firstName + ' ' + lastName;

console.log('TIPOS DE DATOS/STRING:', fullName);

let number1: number = 10;
let number2: number = 20;

let number: number = number1 + number2;

//console.log(number);
console.log('TIPOS DE DATOS/NUMBER: ' + number1 + number2);


let isActive: boolean = true;
let isRunning: boolean = false;
let hasKids: boolean = true;

console.log('TIPOS DE DATOS/BOOLEAN: ' + 'isActive', isActive );
console.log(`TIPOS DE DATOS/BOOLEAN: isActive ${isActive}`);
console.log('TIPOS DE DATOS/BOOLEAN: isRunning', isRunning);
console.log('TIPOS DE DATOS/BOOLEAN: ' + 'hasKids' + hasKids);



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

console.log(`------ IF -----`);

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



console.log(`------ IF -----`);



console.log(`------ IF ANIDADO -----`);

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

console.log(`------ IF ANIDADO -----
    `);


// (B) SWITCH
console.log(`------ SWITCH -----`);

let day: number = 10;

if ( day <= 0 ) {
    throw new Error(`Dia de la semana no permitido`);
}

switch ( day ) {
    case 1:
        console.log(`Es lunes`);
        break;
    
    case 2:
        console.log(`Es martes`);
        break;
    
    case 3:
        console.log(`Es miercoles`);
        break;

    case 4:
        console.log(`Es jueves`);
        break;

    case 5:
        console.log(`Es viernes`);
        break;

    default:
        console.log(`No es ningun día entre semana`);
}

console.log(`------ SWITCH -----
    
    `);





// 3) CICLOS y LOOPS

// Estos son basicamente herramientas que nos permiten
// ejecutar las mismas lineas de codigo una y otra vez
// de una forma consecutiva


// (A) WHILE

// Este ciclo es util cuando no conocemos la cantidad de 
// veces que necesitamos ejecutar el codigo

// while ( condicion ) {

//}

// (B) FOR

// Este loop es util cuando sabemos cuantas veces
// necesitamos que nuestro codigo se ejecute

// for ( let variableControl = 1; variableControl <= 10; variableControl ++ ) {

//}


// (C) DO WHILE

// Es basicamente lo mismo que el WHILE solo que 
// el DO se pone al inicio y la condicion a lo ultimo cerrando las llaves
// Con este siempre se garantiza que se vaya a ejecutar almenos 1 sola vez



console.log(`------ CICLOS O LOOPS -----`);

/////////////////////////////////////

console.log(`
    WHILE
    `
);
let gasolina: number = 5;

while ( gasolina > 0 ) {
    console.log('Gasolina restante', gasolina);
    gasolina--;
}

console.log('Ya no hay gasolina');

/////////////////////////////////////

console.log(`
    DO WHILE
    `);

let gasolina2: number = 5;

do {
    console.log('Gasolina restante', gasolina2);
    gasolina2--;
} while ( gasolina2 > 0 )

/////////////////////////////////////

console.log(`
    FOR
    `);

for( let i = 0; i <= 10; i++ ) {

    if ( i === 5 ) {
        continue;
    }

    console.log('let i: ', i);

    if ( i === 5 ) {
        break;
    }
}


/////////////////////////////////////

console.log(`
    PRACTICA DE LOS LOOPS/CICLOS
    `);

let base:number = 10;
let limi:number = 5;
let i:number = 1;

// CON WHILE

// while ( i <= limi ) {
//     console.log(base, ' X ', i, ' = ', base * i);
//     i++;
// }

// CON DO WHILE

// do {
//     console.log(base, ' X ', i, ' = ', base * i);
//     i++;
// } while ( i <= limi )

// CON FOR

for ( let i:number = 1; i <= limi; i++ ) {
    console.log(base, ' X ', i, ' = ', base * i);
}

// for( let i = 1; i  )

console.log(`------ CICLOS O LOOPS -----
    `);