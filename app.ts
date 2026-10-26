function greet() {
    console.log('Hola mundo');
}

greet();

//1

let nombre:string = "Franco";
let edad:number = 22;
let cuentaActiva:boolean = true;
let saldoDisponible:number = 20000;

if (cuentaActiva) {
    console.log(`El es ${nombre}, tiene ${edad} años, actualmente su cuenta esta activa y su saldo es de ${saldoDisponible}`);
} else {
    console.log(`El es ${nombre}, tiene ${edad} años, actualmente su cuenta no esta activa y su saldo es de ${saldoDisponible}`);
}


//2

let producto:string = "Jabon de baño";
let precio:number = 5000;

const subtotal:number = precio;
const iva:number = 1.19;
const total:number = subtotal * iva;
const totalEnd:string = total.toFixed(2);

console.log(`${producto} con subtotal de ${subtotal}y aplicando el iva del ${iva} da un total de ${totalEnd}`);


//3

let edad2:number = 18;

if (edad2 < 18 ) {
    console.log(`Es menor de edad`);
} else if (edad2 > 18) {
    console.log(`Es mayor de edad`);
} else {
    console.log(`Tiene exactamente 18 años`);
}


//4 

let compra:number = 120000;

if ( compra >= 200000 ) {
    const descuento:number = 0.20;
    compra = compra - (compra * descuento);
    console.log(`Tu compra con 20% de descuento es de ${compra}`); 
} else if ( compra > 100000 ) {
    const descuento2:number = 0.10;
    compra = compra - (compra * descuento2);
    console.log(`Tu compra con 10% de descuento es de ${compra}`);
} else if ( compra <= 100000 ) {
    console.log(`No aplica descuento`);
}