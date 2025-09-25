/*1. Declara variables con var, let y const dentro de una función y dentro de un bloque if.*/

/*function*/
function testF(){
    var x = "var en function";
    let y = "let en function";
    const z = "conts en function";

    console.log("En function : ",x,y,z);
}

// console.log("Extra : ",x); Undefined!!
//!!Cuando se declara una variable con var dentro de una función, su alcance está únicamente dentro de esa función.

testF();

/*condicional*/
if(true){
    var a = "var en if";
    let b = "let en if";
    const c = "conts en if";

    console.log("En if : ",a,b,c);
}

console.log("Extra : ",a);//Se puede acceder, var no tiene alcance de bloque
//console.log("Extra : ",b);Error, let tiene alcance de bloque
//console.log("Extra : ",c);Error, const tiene alcance de bloque


// ¿Qué es hoisting y cómo afecta a var?

/*hoisting:Todas las declaraciones de variables 
y funciones se "elevaron" a la parte superior del alcance.

por ejemplo:

var x; declaración izada
console.log(x); indefinido
x = 5; la asignación permanece en su lugar
console.log(x); //5

*/

//¿Qué diferencias de alcance existen entre var, let y const?

/*
var: Ámbito de función o ámbito global, ignorando el ámbito de bloque { }

let: Ámbito de bloque {}

const: Ámbito de bloque, y no se puede reasignar

*/

//¿Qué significa que const no permite reasignación pero sí permite mutar objetos/arrays? (demuéstralo con código).

/*
const no se puede reasignar:
const x = 10;
x = 20; //Assignment to constant variable.

Pero si el contenido es un objeto o una matriz, puedes modificar el valor dentro :

const arr = [1, 2, 3];
arr.push(4); //Puedes modificar el contenido de la matriz
console.log(arr); // [1, 2, 3, 4]

arr[0] = 99; //Los elementos de la matriz se pueden modificar
console.log(arr); // [99, 2, 3, 4]

De manera similar, los objetos:

const obj = { name: "Anqi", age: 20 };
obj.age = 21;
console.log(obj); // { name: "Anqi", age: 21 }

*/