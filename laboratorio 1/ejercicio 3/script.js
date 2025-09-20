/*1. Pedir al usuario con prompt() su edad.*/
var edad = prompt("Introduce tu edad");

/*2. Usar if...else para mostrar si es mayor o menor de edad.*/
if(edad >= 18){
    console.log("Mayor");
}else{
    console.log("Menor");
}

/*3. Crear un for que muestre los números del 1 al 10 en consola.*/
for(i= 0; i<=10; i++){
    console.log(i);
}

/*Reto extra: usar un while para pedir contraseñas hasta que el usuario escriba "1234".*/
var password = "";
/*Cuando la contraseña que ingrese no sea igual a 1234, se le solicitará que la ingrese*/
while(password !== "1234"){
    password = prompt("Introduce la contraseña : ");
}
console.log("Correcto");