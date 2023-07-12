function Ejercicio7() {
    var cadena = document.querySelector("#Cadena").value;
    let minuscula = 0;
    let mayuscula = 0;
   
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.charCodeAt(i) > 64 && cadena.charCodeAt(i) < 91) {
            mayuscula++;
        } else if (cadena.charCodeAt(i) > 96 && cadena.charCodeAt(i) < 122){
            minuscula++;
        }
    }

    if (mayuscula > 0 && minuscula > 0) {
        console.log("Es una mezcla de ambas.")
    }else if (mayuscula == 0 && minuscula > 0) {
        console.log("Formado sólo por minúsculas.")
    }else if (mayuscula > 0 && minuscula == 0) {
        console.log("Formado sólo por mayusculas.")
    }
}