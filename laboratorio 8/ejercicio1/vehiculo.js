class Vehiculo {
  #velocidad;
  #estadoMotor;

  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.#velocidad = 0;
    this.#estadoMotor = "apagado";
  }

  encenderMotor() {
    console.log("Antes: " + this.#estadoMotor);
    this.#estadoMotor = "encendido";
    console.log("Después: " + this.#estadoMotor);
  }

  acelerar(incremento) {
    console.log("Velocidad antes: " + this.#velocidad);
    this.#velocidad = this.#velocidad + incremento;
    console.log("Velocidad después: " + this.#velocidad);
  }
}

//test
const v = new Vehiculo("Toyota", "Corolla");
v.encenderMotor();
v.acelerar(30);
