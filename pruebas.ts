//let persona: string [] = ['Franco','Maria', 'Melisa'];
//let flowers: string [] = ['Oriquidias','Girasoles'];

//console.log(persona[2]);
//console.log(flowers[1]);


let nameProduct: string = "Audifonos";
let price: number = 150000;
let stock: boolean = true;
let amount: number = 10;
let iva: number = 19;

console.log(`Producto: ${nameProduct} | Precio: ${price} | Stock: ${stock} | Cantidad: ${amount}`);



//Operadores

let finalPrice: number = price * ( 1 + (iva / 100) );

console.log(`Tu precio final con iva es: ${finalPrice}`);
//version sin necesidad de una variable
console.log(` Tu precio final con IVA es de: ${price * ( 1 + (iva / 100))}`);


const porcentajeIVA: number = iva / 100 + 1;
console.log(`${porcentajeIVA}`);

console.log(`Tu precio total + IVA es de: ${price * porcentajeIVA}`);

if ( finalPrice > 200000 ) {
    console.log(`Tu precio total es mayor`);
} else {
        console.log(`Tu precio total no es mayor`);
    }

if ( stock &&  amount > 5 ) {
    console.log(`Si tienes mas de ${amount} productos en stock`);
} else if ( !stock || amount <= 0 ) {
    console.log(`No tienes stock`);
}

console.log(`Tu precio con IVA es mayor a 200.000?. Mi precio total es de ${price * porcentajeIVA}`);
console.log(`Hay Stock del producto? ${stock&& amount > 5}`);


let precio: number = 30000;

 if ( precio >= 50000 && precio <= 99999 ) {
    const descuento1: number = 5;
    console.log(`Este producto aplica para un descuento del ${descuento1}%, quedaria en: ${precio * (1 - descuento1 / 100) }`);
} else if ( precio >= 100000 && precio <= 199999 ) {
    const descuento2: number = 10;
    console.log(`Este producto aplica para un descuento del ${descuento2}%, quedaria en: ${ precio * (1 - descuento2 / 100) }`);
} else if ( precio > 200000 ) {
    const descuento3: number = 15;
    console.log(`Este producto aplica para un descuento del ${descuento3}%, quedaria en: ${ precio * (1 - descuento3 / 100) }`);
} else {
    console.log(`Este producto no aplica para un descuento`);
}

//Ejemplo de como se puede hacer el calculo del IVA en consola sin necesidad de una variabla const
console.log(`Tu descuento es del 5%: ${ precio * (1 - 5 / 100) }`);
console.log(`Tu descuento es del 5%: ${ precio * (1 - 5 / 100) }`);


//Me quedo haciendo falta hacer que la variable let que debo crear para los porcentajes, se acutalice,
//Ya se como se hace esa cosa, dentro del IF es poner descuento = 5 cuando cumpla tal condicion, así
//se actualiza el valor dentro de esta.