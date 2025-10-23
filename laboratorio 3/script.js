// localStorage
function guardar(){
    const nike = document.getElementById('nikeName').value;
    const color = document.getElementById('bgcolor').value;
    
    var patron = /^[A-Z][a-z0-9]{4,}$/;
    if(!patron.test(nick)){
        alert("Nickname inválido: debe empezar con mayúscula y tener al menos 5 caracteres.");
        return;
    }

    // guardar en localStorage

    localStorage.setItem("nike",nike);
    localStorage.setItem("color",color);
    alert("Guardado correctamente.");

}


function aplicar(){
    
}

