import { person } from "./sections/object-literal";
// PROGRAMACION ORIENTADA A OBJETOS (POO)

// La programacion orientada a objetos es basicamente la suposicion abstracta sobre cosas que existen en la vida real

// Es una representacion abstracta de algo que existe en la vida real

// TEMAS PUNTUALES:

// Objetos literales

// Clases
//  |__ Niveles de acceso
//    |__ Constructores
//      |__ Creacion de instancias

// (A) OBJETOS LITERALES

// Se ven de esta forma:

let moto = {
  marca: "honda",
  color: "rojo",
  cilindraje: 150,
};

// Lo que esta dentro del objeto se le puede llamar propiedad o clave

// La forma de usar o consultar una propiedad en especifico es de esta forma:

console.log(moto.marca); // Como si fuera un metodo

// ----------------------------

let persona = {
  name: "Franco",
  age: 22,
  isActive: true,
  hobbies: ["video games", "Study", "Work"],

  concatString() {
    const fullCaracters = `${this.name} ${this.age}`;
    console.log(fullCaracters);
  },
};

// console.log(persona.name.);
persona.concatString();

// ----------------------------

let keyboard = {
  keys: 104,
  color: "Negro",
  rgb: false,
  useBattery: true,
  bluetooth: false,
  brand: "Redragon",
};

let phone = {
  cameras: 3,
  color: "Negro y gris",
  itsLoaded: true,
  brand: "POCO",
  levelBattery: 95,
  bluetoothOn: false,
};

let monitor = {
  buttons: ["Menu", "ON", "Volumen", "Brillo"],
  color: "Gris",
  isRotary: false,
  inches: 24,
  hertz: 60,
  brand: "BenQ",
};

// console.log(keyboard);
// console.log(phone);
// console.log(monitor);

// ----------------------------

interface Persona {
  // Se aplica el UpperCamelCase
  name: string;
  age: number;
  isActive: boolean;
}

let franco: Persona = {
  name: "Jhan Franco",
  age: 22,
  isActive: true,
};

let yadira: Persona = {
  name: "Yadira Verjel",
  age: 24,
  isActive: false,
};

let rocky: Persona = {
  name: "Principe hermoso",
  age: 6,
  isActive: false,
};

let personas = [franco, yadira, rocky];

for (let i = 0; i <= personas.length - 1; i++) {
  let persona = personas[i];
  console.log(persona.name + " " + persona.age);
}

// (B) CLASES

// Es igual a los objetos, son representaciones abstractas de cosas

// Se basan en la creacion de la clase, la creacion del contructor y sus metodos (Siendo este ultimo basicamente funciones dentro de la clase)

class Motocicleta {

    // private -> Solo se puede usar dentro de un metood de la clase 
    // public -> Consultable y Editable
    // readonly -> Consultable
    // static -> Se añade dentro de la clase como una propiedad nueva y se consulta desde afuera de clase invocando la clase y luego la nueva propiedad: Motocicleta.newMotorcicle // Aunque tambien sirve para las propiedades y metodos que ya existen, solo que se requiere llamar a la clase primero para ser visibles


    // readonly -> Solo sirve para las propiedades y la unica forma de actulizar los valores de esas propiedades es en el constructor

  static newMotorcicle = 'Motico'
  public readonly brand: string;
  public fuelThank: number;
  public isRunning: boolean;
  public type: string;
  public color: string;
  public cc: number;

  public readonly createdAt: number;

  constructor( brand: string, type: string ) {
    this.brand = brand;
    this.fuelThank = 0;
    this.isRunning = false;
    this.type = type;
    this.color = "Negro";
    this.cc = 600;

    this.createdAt = 20261102;
  }

  turnOn() {
    if (this.isRunning) {
      console.log(`La moto ya estaba encendida`);
      return;
    }

    if (this.fuelThank <= 0) {
      console.log(`La moto no tiene gasolina`);
      return;
    }

    this.isRunning = true;
    console.log(`La moto está encendida`);
  }

  fillTank(gas: number = 0) {

    if ( gas <= 0 ) {
        throw new Error(`Debes hecharle algo de gasolina`);
        return;
    }

    let newfuelThank = this.fuelThank + gas;

    if ( newfuelThank >= 100 ) {
        newfuelThank = 100;
    }
        this.fuelThank = newfuelThank
  }
}

let myMotorcicle = new Motocicleta('Honda', 'Chopper'); // Argumentos para el constructor, esto sirve para no crear instancias iguales, ya que al ser todo heredado se pueden crear 100 motos con las mismas propiedades, con esto podemos determinar los datos diferenciadores

myMotorcicle.brand; // public readonly
console.log(Motocicleta.newMotorcicle); // static

// myMotorcicle.fillTank(50);
// myMotorcicle.fillTank(20);
// myMotorcicle.turnOn();
// console.log(myMotorcicle);

