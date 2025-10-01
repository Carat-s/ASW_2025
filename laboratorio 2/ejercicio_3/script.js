let fechaNacer =  prompt("Introduce tu fecha de nacimiento(DD/MM/AAAA): ");

// check
let partes = fechaNacer.split("/");

if(partes.length !==3){
    alert("Formato invalido !! DD/MM/AAAA");
}else{
    let dia = parseInt(partes[0]);
    let mes = parseInt(partes[1]) - 1;
    let any = parseInt(partes[2]);

    let fecha = new Date(any,mes,dia);

    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();

    if(hoy.getMonth() < mes || (hoy.getMonth() === mes && hoy.getDate() < dia)){
        edad = edad -1;
    }

    alert("Tienes " + edad + " años.");
}