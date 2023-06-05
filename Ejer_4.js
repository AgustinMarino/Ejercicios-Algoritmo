function Ejercicio4() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var dni = document.querySelector("#dni").value;
var letraUsuario = document.querySelector("#letra").value;
var letraUsuarioMayuscula = letraUsuario.toUpperCase();

if (dni > 0 && dni < 99999999) {
    var posicion = dni % 23;
    if (letras[posicion] == letraUsuarioMayuscula) {
        console.log("El número DNI y la letra son correctos");
    }else {
        console.log("La letra que ha indicado no es correcta");
    }
}else {
    console.log("El número proporcionado no es válido");
}

}

 