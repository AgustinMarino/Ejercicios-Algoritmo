function Ejercicio8(params) {
    let cadena = document.querySelector("#palindromo").value;
    let sinEspacio = cadena.split(" ").join("").toUpperCase();
    let cadenaReversa = sinEspacio.split("").reverse().join("").toUpperCase();

    if (sinEspacio == cadenaReversa) {
        console.log("Es un palindromo");
    }else {
        console.log("No es un palindromo");
    }
}
