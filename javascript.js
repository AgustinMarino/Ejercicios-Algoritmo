//1)
function ej1(){
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log(meses);
    console.log(" ");
    }
    //2)
    function ej2(){
    var valores = [true, 5, false, "hola", "adios", 2];
    var aux = [];
    for (let i = 0; i < valores.length; i++) {
        if(typeof valores[i] == "string"){
            aux.push(valores[i]);
        }   
    }
    for (let i = 0; i < aux.length -1; i++) {
        if(aux[i] > aux[i + 1] && i + 1 < aux.length){
            posicion = i;
            valores = aux[i + 1];
        }
    }
    if (valores[3].length > valores[4].length) {
        console.log("hola en mayor");
    }else{
        console.log("adios en mayor")
    }
    }
    console.log(" ");
    //3)
    function ej3(){
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    if(numero1<numero2){
        console.log("numero1 no es mayor que numero2");
    }
    if(numero2 >= 0){
        console.log("numero2 es positivo");
    }
    if(numero1 <= -1){
        console.log("numero1 es negativo o distinto de cero");
    }
    if(numero1 + 1 < numero2){
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
    console.log(" ");
    }
    //4)
    function ej4(){
    var DNI = document.getElementById("DNI").value;
    var prediccion = document.getElementById("letra").value; 
    var prediccionM = prediccion.toUpperCase();
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    if (DNI > 0 && DNI <= 99999999){
        var asignar = DNI % 23;
        console.log("Su letra asignada es: " + letras[asignar]);
        if(prediccionM == letras[asignar]){
            console.log(prediccion + "=" + letras[asignar])
            console.log("Ha predecido su letra correctamente!")
        }
        else{
            console.log(prediccion + "≠" + asignar)
            console.log("Lo siento! Usted ha fallado.")
        }
    }
    else{
        console.log("El número proporcionado no es válido.");
    }
    console.log(" ");
    }
    //5)
    function ej5() {
        var entero = document.getElementById("entero").value;
        var aux = 1;
        for (let i = entero; i > 0; i--) {
            aux = aux * i;
        }
        console.log(aux);
    }
    console.log(" ");
    //6)
    function ej6(params) {
        var num = document.getElementById("numeropoi").value;
        if (num % 2 == 0) {
            console.log("El número es par");
        } else {
            console.log("El número es impar");
        }
    }
    console.log(" ");
    //7)
    function ej7(){
    var cadena = document.getElementById("cadena").value;
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
    console.log(" ");
    //8)
    function ej8(params) {
        let cadena = document.getElementById("capicua").value;
        let sinEspacio = cadena.split(" ").join("").toUpperCase();
        let cadenaReversa = sinEspacio.split("").reverse().join("").toUpperCase();
    
        if (sinEspacio == cadenaReversa) {
            console.log("Es capicua");
        }else {
            console.log("No es capicua");
        }
    }
    console.log(" ");
    //9)
    function Persona(nombre,edad,genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    
    Persona.prototype.obtDetalles = function () {
        console.log("Mi nombre es "+this.nombre +" y tengo "+this.edad + " año de edad y mi genero es "+ this.genero);
    }
    
    function Estudiante(nombre,edad,genero,curso, grupo) {
        Persona.call(this,nombre,edad,genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    
    Estudiante.prototype = Object.create(Persona);
    
    Estudiante.prototype.registrar = function () {
        console.log("El alumno "+this.nombre +" de "+this.edad + " año de edad y genero "+ this.genero+", a sido resgistrado en el curso "+ this.curso +" y en el grupo "+this.grupo);
    }
    
    function Profesor(nombre,edad,genero,asignatura, nivel) {
        Persona.call(this,nombre,edad,genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }
    
    Profesor.prototype = Object.create(Persona);
    
    Profesor.prototype.asignar = function () {
        console.log("El Profesor "+this.nombre +" de "+this.edad + " de edad y genero "+ this.genero+" a sido asignado a la asignatura "+ this.asignatura +" y en el nivel "+this.nivel);
    }
    
    function EstudianteInstancia() {
        let nombre = document.querySelector("#Nombre").value;
        let edad = document.querySelector("#Edad").value;
        let genero = document.querySelector("#Genero").value;
        let curso = document.querySelector("#Curso").value;
        let grupo = document.querySelector("#Grupo").value;
    
        let estudiante = new Estudiante(nombre,edad,genero,curso,grupo);
    
        console.log(estudiante.registrar());
    }
    
    function ProfesorInstancias() {
        let nombre = document.querySelector("#NombreP").value;
        let edad = document.querySelector("#EdadP").value;
        let genero = document.querySelector("#GeneroP").value;
        let asignatura = document.querySelector("#Asignatura").value;
        let Nivel = document.querySelector("#Nivel").value;
    
        let profesor = new Profesor(nombre,edad,genero,asignatura,Nivel);
    
        console.log(profesor.asignar());
    }
    console.log(" ");
    //10)
    function ej10() {
        let valores = [0,0,0,0,0,0,0,0,0,0,0,0,0];
    
        for (let i = 1; i < 36000; i++) {
            let dado1 = Math.round(Math.random() * (6-1)+1);
            let dado2 = Math.round(Math.random() * (6-1)+1);
            let numeroObtenido = dado1 + dado2;
            valores[numeroObtenido]++;
        }
        for (let i = 2; i < valores.length; i++) {
            console.log("El numero "+ i + " aparecio "+ valores[i] + " veces.");
        }
    }