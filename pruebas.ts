//let persona: string [] = ['Franco','Maria', 'Melisa'];
//let flowers: string [] = ['Oriquidias','Girasoles'];

//console.log(persona[2]);
//console.log(flowers[1]);



let nameProduct: string = 'Audifonos';
let price: number = 150000;
let stock: boolean = true;
let amount: number = 8;
const iva: number = 19;

console.log(`Producto: ${nameProduct} | Precio: $${price} | Stock: ${stock} | Cantidad: ${amount}`);

let porcentajeFinal: number = iva / 100 + 1; //opcion con una variable que se encarga del calculo del IVA

console.log(`Precio final del producto + IVA: ${price * porcentajeFinal}`);
console.log(`Precio final del producto + IVA: ${price * ((iva / 100) + 1) }`);

let resultado: number = price * porcentajeFinal;

if ( resultado > 200000 ) {
    console.log(`El total del producto si es mayor a $200.000`);
} else {
    console.log(`No es mayor`);
}

console.log(`¿Precio con IVA mayor a $200.000? ${resultado > 200000}`);

//No se como hacer la validacion del precio total en un console.log, por eso use un IF

if ( stock && amount > 5 ) {
    console.log(`Si hay stock y si hay mas de 5 productos`);
} else {
    console.log(`No hay lo que pides`);
}

console.log(`¿Hay stock y más de 5 unidades? ${stock && amount > 5}`);

//Tampoco sabria resolver esto en un console.log
