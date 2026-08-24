// Objeto literal
// let person = {
//     name: 'Franco',
//     age: 22,
//     isActive: true,
//     hobbies: ['Programing', 'Play video games', 'Socialize'],
//     toString ( printAll: boolean ) {
//         let stringMessage = this.name + ' ' + this.age + ' ' + this.hobbies[2];
//         console.log(stringMessage.toUpperCase());
//     }
// } 

// // person.toString(false);


let car = {
    brand: 'TOYOTA',
    doors: 4,
    hasAlarm: true,
    color: 'White',
    chairs: ['Piloto', 'Copiloto', 'Pasarejos']
}

let smarTV = {
    color: 'Black',
    brand: 'TLC',
    hasControl: false,
    mainChannels: ['TRO', 'RCN', 'Señal Colombia'],
    sizeInches: 90
}

let youtubeVideo = {
    title: 'Programacion para principiantes',
    likes: 10000,
    dislikes: 500,
    videoRecommended: true,
    coments: ['Buen video', 'El mejor de todos', 'Super'],
    author: 'Fernando Herrera'
}

// console.log(car);
// console.log(smarTV);
// console.log(youtubeVideo);


interface Person {
    name: string;
    age: number;
    isActive: boolean;

}

let franco: Person = {
    name: 'Franco',
    age: 22,
    isActive: true
}

let yadira: Person = {
    name: 'Yadira',
    age: 24,
    isActive: false
}

let juan: Person = {
    name: 'Juan',
    age: 21,
    isActive: true
}

let people: Person[] = [franco, yadira, juan];

for ( let i: number = 0; i < people.length; i++ ) {
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}


// Ejercicio para entender las clases y constructores + metodos
class producto {
    nombre1: string;
    precio: number;
    cantidad: number;

    constructor(nombre:string, precio:number, cantidad:number) {
        this.nombre1 = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre1}
Precio: ${this.precio}
Cantidad: ${this.cantidad}`);
    }
}

const producto1 = new producto("Teclado", 500, 2);
const producto2 = new producto("Audifonos", 250, 5);

producto1.mostrarInformacion();
producto2.mostrarInformacion();