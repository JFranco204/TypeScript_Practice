 
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
            this.fuelTank = 20;
            this.isRunning = false;
            this.type = 'no type';
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
            if ( gas > 100 ) {
                this.fuelTank = 100;
                console.log(`El tanque esta full`);
                return;
            }

            if ( gas <= 0 ) {
            console.log('El gas tiene que ser un número positivo');
            return;
            }

            if ( this.fuelTank >= 100 ) {
                console.log(`El tanque ya se encuentra lleno`);
                return;
            }

            let newFuelTank = this.fuelTank + gas;

            if ( newFuelTank > 100 ) {
                this.fuelTank = 100;
            } else {
                this.fuelTank = newFuelTank;
            }

            console.log(`Tu gasolina actual es ${this.fuelTank}`);


        }
 }


 let myMazda = new Car();

 console.log(myMazda);
 myMazda.fillTank(50);
 myMazda.turnON();
 console.log(myMazda);