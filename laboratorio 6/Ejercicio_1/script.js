// Apartado 1 – Definición de la clase y propiedades

class Pais{

    constructor(nombre,poblacion,area, ciudades){
        this.nombre = nombre; // strinng
        this.poblacion = poblacion; // numero
        this.area = area; // numero km2
        this.ciudades = ciudades || [] ; // array
    }


    /*------------------------------------------------------*/
    // Apartado 2 – Métodos con operadores básicos y acumulativos

    incrementarPoblacion(cantidad){
        this.poblacion += cantidad;
    }

    densidad(){
        return this.poblacion / this.area;
    }


    /*------------------------------------------------------*/
    // Apartado 3 – Operadores comparativos y ternario

    compararArea(otroPais){
        /*
        if(this.area > otroPaid.area){
            return this.nombre + "es más grande que " + otroPais.nombre;
        }else{
            return otroPais.nombre + "es más grande que " + this.nombre;
        }
        */

       return this.area > otroPais.area ? this.nombre + " es más grande que " +otroPais.nombre //true : false
       : otroPais.nombre + "es más grande que " + this.nombre;

    }


    /*------------------------------------------------------*/
    //Apartado 4 – Trabajo con listas y bucles anidados

    mostrarCiudades(){

        console.log("Ciudades de " + this.nombre + " : ");

        for(let i = 0; i < this.ciudades.length; i++){
            console.log(this.ciudades[i]);
        }

    }


    mostrarCiudadesPorLetra(){
        console.log("Letra de las ciudades de " + this.nombre + " : ");
        for (let i = 0; i < this.ciudades.length ; i++){
            let ciudad = this.ciudades[i];// Extraer el nombre de cada ciudad

            for(let j = 0 ; j < ciudad.length; j++){
                console.log(ciudad[j]); // Es la j-ésima letra de la ciudad.
            }
        }

    }

}




/*------------------------------------------------------*/
// Apartado 5 – Prueba del código

var pais_1 = new Pais("Espanya" , 48200000 , 505990, ["Barcelona","Tarragona", "Valencia","Madrid"]);
var pais_2 = new Pais("United Kingdom", 67000000, 243610, ["London", "Birminghan", "Manchester", "Glasgow"]);

console.log("--------------------------------");
console.log("Comparar : ");
console.log(" ");
console.log(pais_1.compararArea(pais_2));


console.log("--------------------------------");
console.log("Densidad");
console.log(" ");
console.log(pais_1.densidad());


console.log("--------------------------------");
console.log("Incrementa poblacion");
console.log(" ");
console.log(pais_1.incrementarPoblacion());


console.log("--------------------------------");
console.log("Mostrar ciudad por Letra");
console.log();
pais_1.mostrarCiudadesPorLetra();
