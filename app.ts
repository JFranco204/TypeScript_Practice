 
 class Car {
    brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    createdAt: number;

        constructor (){
            this.brand = 'No brand';
            this.doors = 0;
            this.fuelTank = 100;
            this.isRunning = false;
            this.type = 'no type';
            this.createdAt = 123456789;
        }

        turnON() {

            if ( this.isRunning ) {
                console.log('El carro ya estaba encendido.... se daó el motor');
                return;
            }

            if( this.fuelTank <= 0 ) {
                console.log('El carro no tiene gasolian');
                return;
            }

            this.isRunning = true;
            console.log('El carro esta encendido');
        }

        fillTank( gas: number ) {
            if ( gas  ) {

            }
        }
 }


 let myMazda = new Car();

 console.log(myMazda);
 myMazda.turnON();
 console.log(myMazda);