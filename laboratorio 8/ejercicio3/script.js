class Coche extends Vehiculo {
  constructor(marca, modelo, numPuertas) {
    super(marca, modelo);
    this.numPuertas = numPuertas;
  }

  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("El coche usa el motor para acelerar");
  }

  mostrarInformacion() {
    console.log("Coche - Marca: " + this.marca + ", Modelo: " + this.modelo + ", Puertas: " + this.numPuertas
    );
  }
}

class Bicicleta extends Vehiculo {
  acelerar(incremento) {
    super.acelerar(incremento);
    console.log("La bicicleta acelera con fuerza humana");
  }

  mostrarInformacion() {
    console.log("Bicicleta - Marca: " + this.marca + ", Modelo: " + this.modelo);
  }
}


//test

const coche2 = new Coche("Honda", "Civic", 4);
const bici2 = new Bicicleta("Giant", "Road");

console.log("------------------ejercicio 3-----------------------")

coche2.acelerar(50);
console.log("--------------------------------------")
bici2.acelerar(15);

console.log("--------------------------------------")
coche2.mostrarInformacion();
bici2.mostrarInformacion();