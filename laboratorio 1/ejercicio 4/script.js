/*1. Pida el nombre y la edad al usuario.*/
var Name = prompt("¿Como te llamas ?");
var edad = prompt("¿Cuandos años tienes ?");

/*2. Muestre un saludo personalizado: "Hola Ana, tienes 20 años".*/
alert("Hola "+ Name +" , tienes " + edad + " años");

/*3. Si la edad es mayor de 18, mostrar "Puedes entrar", si no "Acceso denegado".*/
if(edad >= 18){
    alert("Puedes entrar");
}else{
    alert("Acceso denegado");
}