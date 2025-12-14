class Coche extends Vehiculo {
    constructor(marca, modelo, numPuertas){
        super(marca,modelo);
        this.numPuertas = numPuertas;
    }
}

class Bicicleta extends Vehiculo{
    encenderMotor(){
        console.log("La bici no tiene motor");
    }
}

//test
const coche1 = new Coche("Toyota", "Corolla",4);
const bici1 = new Bicicleta("BH", "Mountain");

console.log("------------------ejercicio 2-----------------------")
coche1.encenderMotor();
coche1.acelerar(50);

console.log("-----------------------------------------")
bici1.encenderMotor();
bici1.acelerar(10);