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


// Segunda practica de CLASES fuera del curso de UDEMY

class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor ( titular:string, saldo:number ) {
        this.titular = titular;
        this.saldo = saldo;
    }

    mostrarSaldo():void {
        console.log(`TITULAR: ${this.titular} SALDO: ${this.saldo}`);
    }

    depositar(deposito:number):number {
        return this.saldo + deposito;
    }

    retirar(retirarSaldo:number):number {
        this.depositar(deposito);
        if(retirarSaldo > deposito) {
            console.log(`Saldo Insuficiente`);
        }
        return deposito - retirarSaldo;
    }
}

const cuenta1 = new CuentaBancaria("Carlos", 100000);
cuenta1.mostrarSaldo();

const deposito = cuenta1.depositar(50000);
console.log(deposito);

const retiro = cuenta1.retirar(160000);
console.log(retiro);



//RECORDERIS DE COMO SE CREA UN OBJETO CON CLASS Y CONSTRUCTOR EN TS

class Libro {
    titulo: string;
    autor: string;
    paginas: number;
    prestado: boolean;

    constructor(
        titulo: string,
        autor: string,
        paginas: number,
        prestado: boolean = false
    ) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.prestado = prestado;
    }

    mostrarInformacion(): void {
        console.log(`
Título: ${this.titulo}
Autor: ${this.autor}
Páginas: ${this.paginas}
Prestado: ${this.prestado}
        `);
    }

    prestar(): void {
        if (this.prestado) {
            console.log("El libro ya está prestado");
        } else {
            this.prestado = true;
            console.log("Libro prestado correctamente");
        }
    }

    devolver(): void {
        if (this.prestado) {
            this.prestado = false;
            console.log("Libro devuelto correctamente");
        } else {
            console.log("El libro ya estaba disponible");
        }
    }
}

const libro1 = new Libro("El Hobbit", "Tolkien", 310);

libro1.mostrarInformacion();

libro1.prestar();

libro1.mostrarInformacion();

libro1.prestar();

libro1.devolver();

libro1.mostrarInformacion();


const libro2 = new Libro("Clean Code", "Robert Martin", 450);

libro2.mostrarInformacion();

libro2.prestar();

libro2.mostrarInformacion();

libro2.prestar();

libro2.devolver();

libro2.mostrarInformacion();


















