//3. Prototype

// 3.1. Adición de un Método al Prototype

console.log("Ejercicio 3.1: Adición de un Método al Prototype");

Array.prototype.obtenerUltimoElemento = function(){
    
    console.log("Usando 'this' parra acceder al array : " +this);
    return this[this.length -1];

}

//3.2 Verificación del Nuevo Método

console.log("Ejercicio 3.2: Verificación del Nuevo Método");

var nuemros = [18, 2 , 0 ,49 , 5 ];
console.log("Ultio elementos : " + nuemros.obtenerUltimoElemento());
console.log("logitud del array : " + nuemros.length);