function Ejercicio5() {
    var entero = document.querySelector("#entero").value;
    var aux = 1;
    for (let i = entero; i > 0; i--) {
        aux = aux * i;
    }
    console.log(aux);
}


function Ejercicio6(params) {
    var num = document.querySelector("#parOImpar").value;
    if (num % 2 == 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
