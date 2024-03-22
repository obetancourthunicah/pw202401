
function btnProcesar_onClick(e){
    e.preventDefault();
    e.stopPropagation();
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const suma = num1 + num2;
    const respuesta = "La suma de " + num1 + " y " + num2 + " es igual a " + suma + ".";
    document.getElementById("mensaje").innerHTML = respuesta;
}

function onDocumentLoaded(){
    //Establecer el comportamiento del Menu
    const menuHamburguesa = document.querySelector("header .hamburger");
    menuHamburguesa.addEventListener("click", menuToggle );
    // Registrar los Eventos del Formulario
    document.getElementById("btnProcesar").addEventListener("click", btnProcesar_onClick);
}

function menuToggle(){
    const navMenu = document.querySelector("header nav");
    navMenu.classList.toggle('hide');
}

document.addEventListener("DOMContentLoaded", onDocumentLoaded);

// Intro a Sintaxis de javascript

//Variables

var intEdad = 1;
let strEdad = 1;
const arrEdades = [1,2,3,4,5];

// Operadores Aritmeticos, De Comparacion y Booleanos
let a = 0;
let b = 1;
let c = 10;

let result = a = b;
result = b - a;
reuslt = c * a;
result = c / 2;
result = c % 2;
result = c ^ 2;

result ++;
result --;

result += 3;
result -= 3;
result *= 3;

let isGreaterThan = a > b;
let isLessThan = a < b;
let isLessThanOrEqual = a <= b;
let isGreaterThanOrEqual = a >= b;

let isEqual = a == b;  // Compara valor comun
let isDeepEqual = a === b; // Compara Tipo y Valor


// Estructuras de Control
// Condicionantes

if (a == b) {
    // expresiones a ejecutar
} else {
    // expresiones sino
}

if (a == b ) {
    // Expresiones
} else if ( b == c) {
    // Expresiones
} else {
    //Expresiones
}
let option = 'A'
switch (option) {
    case "B":
        // Expresiones
        break;
    case "V":
        // Expresiones
        break;
    case "A":
        //Expresiones
        break;
    default:
        //Expresiones
}

// Condicionate Ternario
let strMayorDeEdadLabel = (intEdad > 60) ? "3ra Edad" : "Normal";

/*
let strMayorDeEdadLabel;
if (intEdad > 60) {
    strMayorDeEdadLabel = "3ra Edad";
} else {
    strMayorDeEdadLabel = "Normal";
}
*/
// Ciclos

for (let i = 0; i < 10; i++){
    // Itera 10 veces
    // la variables de control 9
    // 0 1 2 3 4 5 6 7 8 9
}

let controlA = 0;
while (controlA < 100) {
    //Expresions
    controlA += 5;
}
// Cuantas Iteraciones ? 20

let controlB = 0;

do {
    controlB += 10
} while ( controlB < 5);

// Cuantas Iteraciones ?

let arrNumeros = ["1", "5", "10", "15", "20"];

arrNumeros.forEach(function(currentElement){
    // Expresiones
});


// Funciones

function getSumOfNumbers(a, b) {
    return a + b;
}

// ES2015
const getDifferenceOfNumbers = (a, b) => {
    return a - b;
}



