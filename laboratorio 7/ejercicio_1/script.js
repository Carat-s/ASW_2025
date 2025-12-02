//Ejercicio 1: Creación de Array a partir de Cookies

console.log("Ejercicio 1: ")

document.cookie = "ususario = ana";
document.cookie = "idioma = es";
document.cookie = "tema = oscuro";

let cookiesArray = document.cookie.split("; ");

console.log("Array de cookirs: " , cookiesArray);