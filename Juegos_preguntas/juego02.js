//Juego de preguntas, te respondera si aciertas y te pondra un puntaje

// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
//Las preguntas se realizan en forma lista y se tiene que utilizar el corchete por ser una lista.
//Dentro del corchete escribimos las preguntas con la comilla y luego colocamos una coma donde colocaras las respuestas dentro de la comilla despues de la coma.
let preguntas = [                              //Preguntas           //Respuesta
    ["Cuantos departamentos hay en el perú", "24"],      //[0] [0]               //[0] [1]
    ["En que año se creo la primera bandera de peru", "1821"], //[0] [0]    //[0][1]
    ["¿Quién pintó Las meninas?", "DIEGO VELAZQUESZ"],
    ["Aproximadamente, ¿cuántos huesos tiene el cuerpo humano?", "300 HUESOS"],
    ["Quien canto el himno nacional por primera vez en peru", "Rosa Merino"],
    ["Cuantos rios existen", "246"],
    ["¿Cuantos planetas hay en el sistema solar?","8 PLANETAS"],
    ["Cual es el rio mas largo del mundo", "RIO AMAZONAS"],
]

//Variables para el programa

let pregunta, respuesta

let formuladas = 0 //Cuantas preguntas se van dando
let acertadas = 0 //Cuantas fueron buenas respondidas

hazpregunta()

//Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta


document.getElementById("boton").addEventListener("click",function(){
    //Extraer imforamcion del usuario
    //Value sirve para obtener el dato
    var entrada = document.getElementById("dato").value

    //Se compara las variables para saber si ambas dicen lo mismo
    if (entrada == respuesta){
        acertadas++//El "+" Sirve para que se incremente de 1 en 1
    }
    //Cuantas se formularan
    if (formuladas < 8 ){
        hazpregunta()
    }

    else{
        Muestraresultado();
    }

})

//Formula una pregunta la usuario

function hazpregunta(){
    let e //Variable auxiliar

    //Se extrae una pregunta/ Resputa al azar del array

    e = preguntas.splice(numAleat(0, preguntas.length-1), 1) //Con este metodos llamamos a las preguntas para crear un funcion aleatoria

     //.splice(numAleat(0, preguntas.length-1), 1)"Es un codigo para que tome cualquiera de los numeros"

    //Se guardan las preguntas y respuestas
    pregunta = e [0] [0];
    respuesta = e [0] [1];

    //pregunta que separo aparecera en la pantalla
    document.getElementById("pregunta").innerHTML=pregunta

    //value=""(Para que el dato quede vacio)
    document.getElementById("dato").value=""

    formuladas++ // Sumara cada pregunta que realize de uno en uno
    
//Va de la mano con numAleat
}

function Muestraresultado(){
    let resultado //Variable auxiliar
    
    switch (acertadas) {
        case 0:
            resultado= "Esstas grave"
            break;
        case 1:
            resultado= " Estudia mas"
            break;
        case 2:
            resultado= "Mejor ponte a estudiar"
            break;
        case 3:
            resultado="Almenos lo intentaste"
            break;
        case 4:
            resultado= "Sigue estudiando estas mejorando"
            break;
        case 5:
            resultado= "Andas mejorando"
            break;
        case 6:
            resultado= "A la proxima lo lograras todo"
            break;
        case 7:
            resultado= " Muy bien"
            
        default:
            resultado="Felicidades supiste todas las respuestas"
            break;
    }

    document.getElementById("salida").innerHTML=resultado
}


//Devuelve un numero aleatorio entero entre el "min" y "max"(anbos inclusive)
function numAleat(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;

}
