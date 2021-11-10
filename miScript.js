//Alert de bienvenida
alert("¡Bienvenidos a piedra, papel, tijera!\n(v0.0.0.estoyAprendiendoJs)") 

//Array de almacenamiento de datos del jugador mediante su instanciamiento a traves de funcion constructora
const jugador = [];
jugador.push({nombre: prompt("Ingrese su nombre"), edad: prompt("Ingrese su edad")})

//Alert con instrucciones de juego
alert("INSTRUCCIONES: En su teclado numerico, ingrese 1 para seleccionar 'Piedra', 2 para 'Papel' o 3 para 'Tijera'")

//Array correspondiente al sistema (maquina) como contrincante del jugador + funciones de interaccion
const maquina = [{
    nombre: "Z1 (Sistema)", 
    edad: 83,
    celebrar: function() {alert("¡Ha! ¡Ha! ¡Te gane!")},
    abuchear: function() {alert("Te odio, ¡eres mi nuevo enemigo!")},
    agitar: function() {alert("Jueguemos nuevamente si eres tan listo...")},
}];

//Array de almacenamiento de puntajes
let puntajes = [{puntosMaquina: 0, puntosJugador: 0, partidasMaquina: 0, partidasJugador: 0, partidasEmpatadas: 0}]

//Variable donde pregunta y almacena el modo de juego elegido
let modoJuego = prompt("Elije tu modo de juego ingresando 'P' para partida, o 'C' para campeonato.\nRecuerda que el campeonato son 6 partidas seguidas y no podras abandonar.").toLowerCase()

//Condicional que evalua la respuesta ingresada segun el modo de juego elegido y envia los parametros a la funcion correspondiente
if (modoJuego == "p") {
    partida (jugador[0], maquina[0])
} else {
    campeonato (jugador[0], maquina[0])
}

//Bucle para constatar que la respuesta ingresada sea correcta
while (modoJuego !== "p" && modoJuego !== "c") {
    alert("Ingresa un valor correcto")
    modoJuego = prompt("Elije tu modo de juego ingresando 'P' para partida, o 'C' para campeonato.\nRecuerda que el campeonato son 6 partidas seguidas y no podras abandonar.").toLowerCase()
}

//Funcion principal con el algoritmo base que emplean ambos modos de juego
function partidaMain (elJugadorPartida, laMaquinaPartida) {

    //Variables que almacenan y generan las jugadas
    let jugada = parseInt(prompt("Ingrese su jugada"))
    let jugadaMaquina = Math.round(Math.random()*(3 - 1) + 1)

    //Bucle para constatar que la respuesta ingresada sea correcta
    while (jugada != 1 && jugada != 2 && jugada != 3) {
    alert("Ingrese una jugada valida")
    jugada = parseInt(prompt("Ingrese su jugada"))
    }

    //Condicional que evalua y compara las jugadas entre el jugador y la maquina
    if (jugada == jugadaMaquina) {
        alert("¡Empate! " + laMaquinaPartida.nombre + " y " + elJugadorPartida.nombre + " eligieron el mismo elemento")
        puntajes[0].puntosMaquina ++
        puntajes[0].puntosJugador ++
    } else if (jugada == 1) {
        if (jugadaMaquina == 2) {
            alert("¡Papel vence piedra! " + laMaquinaPartida.nombre + " gana la jugada y suma +1")
            puntajes[0].puntosMaquina ++
        } else {
            alert("¡Piedra vence tijera! " + elJugadorPartida.nombre + " gana la jugada y suma +1")
            puntajes[0].puntosJugador ++
        }
    } else if (jugada == 2) {
        if (jugadaMaquina == 1) {
            alert("¡Papel vence piedra! " + elJugadorPartida.nombre + " gana la jugada y suma +1")
            puntajes[0].puntosJugador ++
        } else {
        alert("¡Tijera vence papel! " + laMaquinaPartida.nombre + " gana la jugada y suma +1")
        puntajes[0].puntosMaquina ++
        }
    } else if (jugada == 3) {
        if (jugadaMaquina == 1) {
            alert("¡Piedra vence tijera! " + laMaquinaPartida.nombre + " gana la jugada y suma +1")
            puntajes[0].puntosMaquina ++
        } else {
        alert("¡Tijera vence papel! " + elJugadorPartida.nombre + " gana la jugada y suma +1")
        puntajes[0].puntosJugador ++
        }
    }
}

//Funcion modo de juego partida simple
function partida (elJugador, laMaquina) {

    //Bucle de 3 jugadas, cada conjunto de 3 jugadas corresponde a una partida
    for (i=0; i<3; i++) {

        //Llamado al algoritmo principal del juego
        partidaMain (elJugador, laMaquina)
    }

    //Condicional que evalua las puntuaciones de la partida y determina el ganador o anuncia el empate
    if (puntajes[0].puntosMaquina > puntajes[0].puntosJugador) {
        alert(laMaquina.nombre + " de " + laMaquina.edad + " años de edad, gana la partida a " + elJugador.nombre + " de " + elJugador.edad + " años de edad, por " + puntajes[0].puntosMaquina + " a " + puntajes[0].puntosJugador)
        laMaquina.celebrar()
        puntajes[0].puntosMaquina = 0
        puntajes[0].puntosJugador = 0
    } else if (puntajes[0].puntosJugador > puntajes[0].puntosMaquina) {
        alert(elJugador.nombre + " de " + elJugador.edad + " años de edad, gana la partida a " + laMaquina.nombre + " de " + laMaquina.edad + " años de edad, por " + puntajes[0].puntosJugador + " a " + puntajes[0].puntosMaquina)
        laMaquina.abuchear()
        puntajes[0].puntosMaquina = 0
        puntajes[0].puntosJugador = 0
    } else {
        alert("¡Finalmente es un empate! " + elJugador.nombre + " y " + laMaquina.nombre + " acumulan el mismo puntaje" )
        laMaquina.agitar()
        puntajes[0].puntosMaquina = 0
        puntajes[0].puntosJugador = 0
    }

    //Variable que almacena la respuesta ante el ofrecimiento de repetir el campeonato + bucle que evalua la misma y acciona en consecuencia
    let repetir = prompt("¿Deseas repetir la partida? Ingrese 'S' por si, o 'N' por no").toLowerCase()
    while (repetir != "s" && repetir != "n") {
        alert("Ingrese una respuesta valida")
        repetir = prompt("¿Deseas repetir la partida? Ingrese 'S' por si, o 'N' por no")
    }
    if (repetir == "s") {
        partida (elJugador, laMaquina)
    } else {
        alert("Sabía que eras un cobarde... ¡hasta luego!")
    }
}

//Funcion modo de juego campeonato
function campeonato (elJugador, laMaquina) {

    //Bucle de 6 partidas que corresponde al modo campeonato
    for (i=0; i<6; i++) {

        for (j=0; j<3; j++) {

            //Llamado al algoritmo principal del juego
            partidaMain (jugador[0], maquina[0])
        }

        //Condicional que evalua las puntuaciones de la partida y determina el ganador o anuncia el empate
        if (puntajes[0].puntosMaquina > puntajes[0].puntosJugador) {
            alert(laMaquina.nombre  + " gana la partida a " + elJugador.nombre + " por " + puntajes[0].puntosMaquina + " jugadas a " + puntajes[0].puntosJugador)
            puntajes[0].partidasMaquina ++
            puntajes[0].puntosMaquina = 0
            puntajes[0].puntosJugador = 0
        } else if (puntajes[0].puntosJugador > puntajes[0].puntosMaquina) {
            alert(elJugador.nombre + " gana la partida a " + laMaquina.nombre + " por " + puntajes[0].puntosJugador + " jugadas a " + puntajes[0].puntosMaquina)
            puntajes[0].partidasJugador++
            puntajes[0].puntosMaquina = 0
            puntajes[0].puntosJugador = 0
        } else {
            alert(elJugador.nombre + " y " + laMaquina.nombre + " han empatado la partida" )
            puntajes[0].partidasEmpatadas++
            puntajes[0].puntosMaquina = 0
            puntajes[0].puntosJugador = 0
        }
    }

    //Condicional que evalua las puntuaciones totales y determina el campeon o anuncia el empate
    if (puntajes[0].partidasMaquina > puntajes[0].partidasJugador) {
        alert("¡" + laMaquina.nombre  + " con " + laMaquina.edad + " años de edad es el campeón absoluto! Ha vencido a " + elJugador.nombre + " de " + elJugador.edad + " años de edad por " + puntajes[0].partidasMaquina + " partidas a " + puntajes[0].partidasJugador + ", habiendo empatado en " + puntajes[0].partidasEmpatadas + " oportunidad/es.")
        laMaquina.celebrar()
    } else if (puntajes[0].partidasJugador > puntajes[0].partidasMaquina) {
        alert("¡Felicitaciones " + elJugador.nombre + "! Con " + elJugador.edad + " de edad eres el campeón y amo absoluto del juego! Has vencido a " + laMaquina.nombre  + " de " + laMaquina.edad + " años de edad por " + puntajes[0].partidasJugador + " partidas a " + puntajes[0].partidasMaquina + ", habiendo empatado en " + puntajes[0].partidasEmpatadas + " oportunidad/es.")
        laMaquina.abuchear()
    } else {
        alert("¡Wow! ¡Que nivel, han empatado! Ambos son los campeones del piedra, papel o tijera")
        laMaquina.agitar()
    }

    //Variable que almacena la respuesta ante el ofrecimiento de repetir el campeonato + bucle que evalua la misma y acciona en consecuencia
    let repetir = prompt("¿Deseas repetir el campeonato? Ingrese 'S' por si, o 'N' por no").toLowerCase()
    while (repetir != "s" && repetir != "n") {
        alert("Ingrese una respuesta valida")
        repetir = prompt("¿Deseas repetir el campeonato? Ingrese 'S' por si, o 'N' por no")
    }
    if (repetir == "s") {
        campeonato (elJugador, laMaquina)
    } else {
        alert("Sabía que eras un cobarde... ¡hasta luego!")
    }
}
