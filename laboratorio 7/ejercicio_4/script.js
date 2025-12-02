const radio = document.getElementById("condicional");

if(localStorage.getItem("acepto") === "true"){
    radio.checked = true;
    document.body.style.backgroundColor = "green";

}else if(localStorage.getItem("acepto") === "false"){
    document.body.style.backgroundColor ="red";
}


radio.addEventListener("change",function(){
    if(radio.checked){
        document.body.style.backgroundColor = "green";
        localStorage.setItem("acepto", "true");
    }else{
        document.body.style.backgroundColor = "red";
        localStorage.setItem("acepto", "false");
    }
});

console.log("Ejercicio 4:");
console.log("Radio seleccionado:", radio.checked);