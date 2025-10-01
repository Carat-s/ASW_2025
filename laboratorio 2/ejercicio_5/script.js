class Alumno{
    constructor(nombre,edad,nota){
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    //boolean
    estaAprobado(){
        if (this.nota >= 5) {
            return true;
        } else {
            return false;
        }
    }

    presentacion(){
        let estado;
    if (this.estaAprobado()) {
      estado = "Aprobado";
    } else {
      estado = "Suspenso";
    }
    return "Soy " + this.nombre + ", tengo " + this.edad + " años y mi nota es " + this.nota + " (" + estado + ").";
  }
}

class AlumnoBecado extends Alumno{
    constructor(nombre, edad, nota, beca) {
    super(nombre, edad, nota);
    this.beca = beca;
    }

    presentacion(){
        let estado;
    if (this.estaAprobado()) {
      estado = "Aprobado";
    } else {
      estado = "Suspenso";
    }
    return "Soy " + this.nombre + ", tengo " + this.edad + " años, mi nota es " + this.nota +
           " (" + estado + ") y mi beca es " + this.beca + "€.";
  }
}

//test

const alumno1 = new Alumno("Anqi",20,7);
const alumno2 = new Alumno("Cristina",20,7);
const alumno3 = new Alumno("Mari",21,4);

console.log(alumno1.presentacion());
console.log(alumno2.presentacion());
console.log(alumno3.presentacion());