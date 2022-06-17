let preguntas = [                              //Preguntas           //Respuesta
    ["Cuantos departamentos hay en el perú", "24"],      //[0] [0]               //[0] [1]
    ["En que año se creo la primera bandera de peru", "1821"], //[0] [0]    //[0][1]
    ["Que es h2o", "Agua"],
    ["De que color es la bandera de mexico", "Blanco verde y rojo"],
    ["Quien canto el himno nacional por primera vez en peru", "Rosa Merino"],
    ["Cuantos rios existen", "246"],
    ["Jesus a los cuantos dias resucito","3 dias"],
    ["Cual es el rio mas largo del mundo", "El rio amazonas"],
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
            resultado= "Estudia mas bestia"
            break;
        case 1:
            resultado= "Tas mal"
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
            resultado= "Andas mejorando"
            break;
        case 7:
            resultado= "A la proxima lo lograras todo"
            
        default:
            resultado="Felicidades supiste todas las respuestas eres un crack"
            break;
    }

    document.getElementById("salida").innerHTML=resultado
}


//Devuelve un numero aleatorio entero entre el "min" y "max"(anbos inclusive)
function numAleat(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;

}
