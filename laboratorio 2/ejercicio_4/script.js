alert("Hii , welcome to my web");

console.log("Ancho de la pantalla :" + window.innerWidth);
console.log("Alto de la pantalla : " + window.innerHeight);

let nom = prompt("¿Como te llamas?");
document.write("Hola, " + nom + "<br/>");

let pantallaN = 0;

function abrirPantalla(){
    pantallaN = window.open("https://www.google.com","_blank", "width=800,height=600");

    let cerrar = confirm("Quieres cerrar la pantalla?");
    if(cerrar){
        pantallaN.close();
    }
}