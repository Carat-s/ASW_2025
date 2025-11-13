//1.1. Creación de una Matriz
console.log("Ejercicio 1.1 : Creación de una Matriz");
let inventario = [
    ["Agua", 110 , 1.8],
    ["Manzana", 80 , 0.8],
    ["Pollo", 180 , 5.9]
];

console.log("Matriz inventario creada: " , inventario);


//1.2. Acceso y Modificación Matricial

console.log("Ejercicio 1.2: Acceso y Modificación Matricial");

console.log("Productos: " ,inventario[1][0], "Precio : ", inventario[1][2]);

console.log("Numero total de filas : ",inventario.length);
console.log("Numero de elementos en la primera fila: ", inventario[0].length);

//1.3. Recorrido Simple 

console.log("Ejercicio 1.3: Recorrido Simple");

for(let i =0; i< inventario.length;i++){

    console.log("Elemento " + (i + 1) + ": " + inventario[i][0]);

};
