//Ejercicio 1

let peso:number = 77;
let altura:number = 1.70;

const IMC:number = peso / (altura * altura);

if ( IMC < 18.5 ) {
    console.log(`Bajo Peso`);
} else if ( IMC >= 18.5 && IMC <= 24.9 ) {
    console.log(`Peso normal`);
} else if ( IMC >= 25 ) {
    console.log(`Sobrepeso`)
} else {
    console.log(`Tu IMC es de: ${IMC}`);
}


//Ejercicio 2

let nombreProducto:string = "Crema Colgate";
let precioUnitario:number = 2500;
let cantidad:number = 5;
let envioExpress:boolean = true;

const subtotal:number = ( precioUnitario * cantidad );

console.log(`subtotal: ${subtotal}`); //Es solo para ver que retorna
