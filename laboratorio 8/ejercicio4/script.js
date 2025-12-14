function inspeccionarVehiculo(Vehiculo){
    Vehiculo.mostrarInformacion();
}

//test

console.log("------------------ejercicio 4-----------------------");
const coche3 = new Coche("Ford", "Focus", 4);

const bici3 = new Bicicleta("Trek", "Mountain");


inspeccionarVehiculo(coche3);
inspeccionarVehiculo(bici3);