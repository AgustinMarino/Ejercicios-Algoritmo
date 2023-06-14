function Ejercicio5() {
    var entero = document.querySelector("#entero").value;
    var aux = 1;
    for (let i = entero; i > 0; i--) {
        aux = aux * i;
    }
    console.log(aux);
}

