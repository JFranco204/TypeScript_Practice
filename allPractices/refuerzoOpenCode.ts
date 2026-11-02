//Ejercicio 1
console.log(`###################`);

let peso:number = 60;
let altura:number = 1.85;

const IMC:number = peso / (altura * altura);
const formatedIMC:number = Number(IMC.toFixed(2));

if ( IMC < 18.5 ) {
    console.log(`Bajo Peso, tu IMC es de : ${formatedIMC}`);
} else if ( IMC >= 18.5 && IMC <= 24.9 ) {
    console.log(`Peso normal, tu IMC es de : ${formatedIMC}`);
} else if ( IMC >= 25 ) {
    console.log(`Sobrepeso, tu IMC es de : ${formatedIMC}`)
} 

console.log(`###################`);

//Ejercicio 2

let nombreProducto:string = "Bom Bom Bum";
let precioUnitario:number = 1500;
let cantidad:number = 30;
let envioExpress:boolean = true;
let costoEnvio:number = 0;

const subtotal:number = ( precioUnitario * cantidad );

if ( subtotal >= 150000 ) {
    costoEnvio = 0;
}
if ( subtotal < 150000 ) {
     costoEnvio = 10000;
}
if ( envioExpress ) {
     costoEnvio += 15000;
} 

const total: number = subtotal + costoEnvio;

console.log(`
      --- FACTURA DE COMPRA ---
    |Producto: ${nombreProducto}
    |Cantidad: ${cantidad}      
    |Subtotal: ${subtotal.toLocaleString('es-CO')}      
    |Costo envio: ${costoEnvio.toLocaleString('es-CO')} 
    |Total a Pagar: ${total.toLocaleString('es-CO')} 
    `);

console.log(`###################
    `);

//FASE 2

//Ejercicio 1

let calificacion:number = 150;
let letra: string = "";
let mensaje: string = "";

    switch (true) {
    case calificacion >= 90 && calificacion <= 100:
        letra = "A";
        mensaje = "Excelente desempeño";
        break;
    
    case calificacion >= 80 && calificacion < 90:
        letra = "B";
        mensaje = "Buen trabajo";
        break;
    
    case calificacion >= 70 && calificacion < 80:
        letra = "C";
        mensaje = "Rendimiento satisfactorio";
        break;

    case calificacion >= 60 && calificacion < 70:
        letra = "D";
        mensaje = "Necesitas mejorar";
        break;

    case calificacion < 60:
        letra = "F"
        mensaje = "Reprobado";
        break;

    default:
}

if ( letra === "" ) {
    console.log(`No hay Calificacion`);
}else {
    console.log(`Tu nota es ${letra}, ${mensaje}`);
}

console.log(`########################
    `);

//Ejercicio 2

console.log(`###################`);

console.log("Acceso a Evento VIP");

let nombre: string = "Franco";
let edad: number = 40;
let tieneCredencialVIP: boolean = false;
let esInvitadoEspecial: boolean = true;

let acceso: string = "";
let motivo: string = "";

if (esInvitadoEspecial) {

    acceso = "Acceso permitido a la zona VIP";
    motivo = "Es invitado especial.";

} else if (edad >= 18) {

    if (tieneCredencialVIP) {

        acceso = "Acceso permitido a la zona VIP";
        motivo = "Mayor de edad con credencial VIP.";

    } else {

        acceso = "Acceso denegado";
        motivo = "No posee credencial VIP.";

    }

} else {

    acceso = "Acceso denegado";
    motivo = "Es menor de edad.";

}

console.log(`
### SOLICITANTE A LA ZONA VIP ###

Nombre: ${nombre}
Edad: ${edad}
Estado de solicitud: ${acceso}
Motivo: ${motivo}
`);

console.log(`###################`);


//FASE 3

//EJERCICIO 1

console.log(`TABLA DE MULTIPLICAR CON "FOR"`);
let numero: number = 5;
let limite: number = 10;

for (let i:number = 1; i <= limite; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

//EJERCICIO 2
console.log(`CUENTA REGRESICA PARA DESPEGUE CON "WHILE"`);

let inicio: number = 10;

while (inicio >= 0) {
    console.log(`Cuenta regresiva: ${inicio}`);
    if(inicio === 0) {
        console.log(`¡Despegue!`); 
    }
    --inicio;
}

// OTRA OPCION ES SOLO PONER ESTO CUANDO EL WHILE TERMINE console.log(`¡Despegue!`);

console.log(`#### CONTINUACION DEL CURSO COMO TAL`);


import { addTwoNumbers12 } from '../sections/jejej'
import { substractTwoNumbers12 } from '../sections/jejej'
import { timesTwoNumbers12 } from '../sections/jejej'
import { divideTwoNumbers12 } from '../sections/jejej'

let num1: number = 10;
let num2: number = 10;

let total1: number = addTwoNumbers12( num1, num2 );
let total2: number = substractTwoNumbers12( num1, num2 );
let total3: number = timesTwoNumbers12( num1, num2 );
let total4: number = divideTwoNumbers12( num1, num2 );

console.log(`Add: ${total1}`);
console.log(`Subs: ${total2}`);
console.log(`Times: ${total3}`);
console.log(`Divide: ${total4}`);


console.log(`#####################################`);

import { printMultiplication } from '../sections/jejej'
import { multiplicationTable } from '../helpers/multipliactionTablePrueba';

printMultiplication(10,20);


//FASE 4

//EJERCICIO 1

console.log(`#####################################`);

// Ejercicio 1: Función Básica de Saludo
// 1. Crea una función llamada saludar que reciba un nombre (string) como parámetro.
// 2. La función debe retornar un string: "Hola, [nombre]!".
// 3. Llama a la función y muestra el resultado en consola.


function saludar( nombre: string ): string {
    //console.log(`Hola ${nombre}`);
    return `Hola ${nombre}`;
}

let saludo: string = saludar('Franco');

//let action: string = saludar('Franco');

console.log(`${saludo}`);



// EJERCICIO 2: Función con Parámetros y Retorno (Calculadora)

// 1. Crea una función llamada sumar que reciba dos parámetros: a (number) y b (number).
// 2. La función debe retornar la suma de ambos números.
// 3. Crea otra función llamada multiplicar que reciba los mismos parámetros y retorne el producto.
// 4. Llama a ambas funciones y guarda los resultados en variables, luego imprímelos.
console.log(`#####################################`);

function sumar(a:number, b:number): number {
    return a + b;
}

function multiplicar(a:number, b:number): number {
    return a * b;
}

let suma:number = sumar(1,2);
let multiplicacion:number = multiplicar(1,2);

console.log(`Suma: ${suma}`);
console.log(`Multiplicación: ${multiplicacion}`);

const division = (a:number, b:number): number => {
    return a / b;
}

let divi:number = division(10,2);
console.log(`Division: ${divi}`);

console.log(`#####################################`);


// EJERCICIO 3: Funciones de Flecha (Arrow Functions)
// 1. Crea una función de flecha llamada esPar que reciba un número y retorne true si es par y false si no lo es.
// 2. Úsala dentro de un ciclo for para evaluar números del 1 al 10 y mostrar por consola: "El número [x] es par: [true/false]".

const esPar1 = (valor:number):boolean => {
    return valor % 2 === 0;
}

const esPar2 = (valor:number):boolean => valor % 2 === 0;
let jijiji:boolean = esPar2(2);
console.log(`${jijiji}`);

// let resultado: boolean = esPar1(8);
// console.log(`Tu numero es: ${resultado}`);

for(let i:number = 0; i <= 10; i++) {
    let resultado:boolean = esPar1(i);
    console.log(`Tu numero ${i} es par:${resultado}`);
}
