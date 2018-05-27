/*
Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. 
Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: 
toddler, preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.

Si la persona ingresa un dato que no es un número entero 
(por ejemplo: un string, un número decimal, un cero, o un campo vacío),
la web debe dar un mensaje de error.

*/
window.onload = function (question) {

    //Pregunta
    var age = prompt("¿Cuaĺ es tu edad?");

    const mensajeUNo = " You are a toddler";
    const mensajeDos = "You are preschooler";
    const mensajeTres = "You are a gradeschooler";
    const mensajeCuatro = "You are a teenager";
    const mensajeCinco = "You are a young adult";
    const mensajeSeis = "You are an adult";

//Condiciones y clasificación de edades
   
    if (age % 1 !== 0 || age === "0" || age === NaN || age === "") {
        alert("Error: sólo ingresar números enteros.");   
    
    } else if (age >= 1 && age <= 3) {
         alert(mensajeUNo);
    } else if (age > 3 && age <= 5) {
         alert(mensajeDos);
    } else if (age > 5 && age <= 12) {
         alert(mensajeTres);
    } else if (age > 12 && age <= 18) {
         alert(mensajeCuatro);
    } else if (age > 18 && age <= 21) {
         alert(mensajeCinco);
    } else if(age > 21) {
         alert(mensajeSeis);
    }

}

