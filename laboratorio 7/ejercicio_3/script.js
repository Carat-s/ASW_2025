let li = document.createElement("li");

li.textContent = "Nuevo mensaje";

let p = document.getElementById("mensaje");

p.innerHTML = "";
p.appendChild(li);

console.log("Ejercicio 3 :");
console.log("Modo creado: ",li);

console.log("Contenido del párrafo: ", p.innerHTML);