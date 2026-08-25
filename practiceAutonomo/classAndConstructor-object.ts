// Ejercicio para entender las clases y constructores + metodos
// El nombre de la clase, debe comenzar con mayuscula, esto por reglas del lenguaje, se llama PascalCase
class Producto {
    nombre: string;
    precio: number;
    cantidad: number;

    constructor(nombre:string, precio:number, cantidad:number) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    mostrarInformacion(): void {
        console.log(`Producto: ${this.nombre}
Precio: ${this.precio}
Cantidad: ${this.cantidad}`);
    }

    calcularTotal(): number {
        return this.precio * this.cantidad;
    }
}

const producto1 = new Producto("Teclado", 500, 2);

producto1.mostrarInformacion();
const total = producto1.calcularTotal();

console.log(`El total es: ${total}`);