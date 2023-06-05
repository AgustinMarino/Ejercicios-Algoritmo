function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios",2,"gjdjdflk"];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof(valores[i]) == "string") {
            if (valores[i].length > valor.length) {
            valor = valores[i];
        }
    }
}

    console.log("el mayor es "+valor);

    //comparacion directa
if (valores[3].length > valores[4].length) {
    console.log("hola en mayor");
}else{
    console.log("adios en mayor")
}
}



