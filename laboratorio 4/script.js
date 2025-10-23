//Parte 1: Conceptos Fundamentales de Arrays

console.log("En parte 1 --------------------");

const datosUsuario = ["Ana",18,true];

console.log("El segundo elemento del array es:", datosUsuario[1]);
console.log("El longitud de esta array es :",datosUsuario.length);




// Parte 2: Modificación de Arrays: Añadir y Eliminar Elementos
console.log("En parte 2 -------------------");
//1. Añadir al final: Utilizad el método push() 
//para añadir dos nuevos elementos al final del array datosUsuario.
//Mostrad la nueva longitud devuelta por el método.

let newData = datosUsuario.push("English","Programadora");
console.log("Después de push():", datosUsuario);
console.log("Nueva longitud del array:", newData);


//2. Eliminad del Final: Utilizad el método pop() 
//para obtener el último elemento añadido y eliminarlo del array. 
//Mostrad qué elemento fue devuelto.

let deleteF = datosUsuario.pop();
console.log("Elemento eliminado con pop():", deleteF);
console.log("Array actual:", datosUsuario);

//3. Añadid al Principio: Utilizad unshift() 
//para añadir un nuevo elemento al principio del array. 
//Verificad cómo este método desplaza todos los demás elementos y devuelve la nueva longitud.

let addIni = datosUsuario.unshift("Hi");
console.log("Después de unshift():", datosUsuario);
console.log("Nueva longitud tras unshift():", addIni);

//4. Eliminar del Principio: Utilizad shift() 
//para obtener y eliminar el primer elemento del array. 
//Verifique que los demás elementos se han desplazado.

let deleteFirst = datosUsuario.shift();
console.log("Elemento eliminado con shift():", deleteFirst);
console.log("Array actual:", datosUsuario);





//Parte 3: Métodos Avanzados de Arrays
console.log("En parte 3 -------------------");
//1. Concatenación
let arrayPalabra = ["A","B","C"];
let arrayTotal = datosUsuario.concat(arrayPalabra);

console.log("Array total (concatenado):", arrayTotal);

//2. Ordenación Simple
let numero = [10, 21, 2003,17];
console.log("Array original : ",numero);
numero.sort();
console.log("Array ordenado por defecto : ",numero);

//3. Ordenación Personalizada
//ASC
numero.sort(function(a,b){
    return a - b;// si a < b return negativo
});
console.log("Orden ascendente:", numero);

//DESC
numero.sort(function(a,b){
    return b - a;// si b < a return negativo
});

console.log("Orden descendente:", numero);

//4. Modificación de Contenido
console.log("ArrayTotal antes de splice", arrayTotal);

arrayTotal.splice(2,2,"hallo","good");//splice(donde empezar,cuanto,nuevoElemento...)
console.log("ArrayTotal después de splice:", arrayTotal);




//Parte 4: Funciones Predefinidas de validación y conversión
console.log("En parte 2 -------------------");
let cadena = "3.14159";
let text = "hola mundo";

// examinar numeros
console.log("¿'hola mundo' es NAN? : " ,isNaN(text));
console.log("¿'3.1415926' es NaN?:", isNaN(cadena));

//float<-->int

console.log("ParseInt 3.1415926 : " , parseInt(cadena));
console.log("ParseFloat 3.1415926 : " , parseFloat(cadena));


//numero ---> str
let number = 17;
let numberText = String(number);
let textNumber = Number(numberText);

console.log("Número convertido a cadena:", numberText);
console.log("Cadena convertida a número:", textNumber); 

