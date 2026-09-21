 
 export class Car {

//HERENCIA: Se pueden aplicar a las propiedades o metodos del objeto
// PUBLIC <- Permite acceder a todas propiedades de la clase, estando fuera de la misma, ya sea consulta, crecion o modificacion.
// PRIVATE <- No permite el uso externo de las propeidades de la clase, solo cuando se modifica una dentro del objeto.
// READONLY <- Se puede convinar con el PUBLIC y el PRIVATE, otorgando solo lectura denpendiendo si se consulta dentro o fuera de la clase.
// STATIC <- Este sirve para volver una o mas propiedades en valores globales, su forma de invocarlo en llamando directamente el nombre de la clase = Car.propiedad

    static nameTest = 'Mazda';
    public readonly brand: string;
    public doors: number;
    public fuelTank: number;
    public isRunning: boolean;
    public type: string;

    private readonly createdAt: number;

        constructor ( brand: string, type: string ){
            this.brand = brand;
            this.doors = 0;
            this.fuelTank = 0;
            this.isRunning = false;
            this.type = type;
            this.createdAt = 123456789;
        }

        turnON() {

            if ( this.isRunning ) {
                console.log('El carro ya estaba encendido.... se dañó el motor');
                return;
            }

            if( this.fuelTank <= 0 ) {
                console.log('El carro no tiene gasolina');
                return;
            }

            this.isRunning = true;
            console.log('El carro esta encendido');
        }

        fillTank( gas: number ) {
           if ( gas <= 0 ) {
            console.log(`El gas tiene que ser positivo`);
            return;
           }

           let newFuelTank = this.fuelTank + gas;
           if ( newFuelTank >= 100 ) {
                newFuelTank = 100;
           }

           this.fuelTank = newFuelTank;
        }
 }


 let myMazda = new Car( 'Mazda', 'Sedan' );

 console.log(myMazda);
 myMazda.fillTank(50);
 myMazda.fillTank(120);
 myMazda.turnON();
 console.log(Car.nameTest);
 console.log(myMazda);