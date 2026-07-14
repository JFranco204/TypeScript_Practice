//Ejercicio 1

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

//Ejercicio 2

console.log(`Acceso a Evento VIP`);

let nombre:string = "Franco";
let edad:number = 15;
let tieneCredencialVIP: boolean = true;
let esInvitadoEspecial: boolean = false;

if ( edad >= 18) {
    if ( tieneCredencialVIP ) {
        console.log(`Acceso permitido a la zona VIP.`);
    }
} else if ( edad < 18 ) {
        if ( esInvitadoEspecial ) {
            console.log(`Acceso permitido a la zona VIP.`);
        }
} else {
    console.log(`Acceso denegado.`);
}



