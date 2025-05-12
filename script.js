
// Variables y constantes
const personaje1 = "Don Ramón";
const personaje2 = "Hatsune Miku";
let puntosRomance = 0; // Variable para medir el nivel de relación
let exp = 0; // Variable para medir los puntos de experiencia

//funcion tirar dado
function tirarDado() {
    return Math.floor(Math.random() * 12) + 1;
}


// Introducción y primera pelea
alert(`Bienvenido al mundo interdimensional.🛞 
    \n${personaje1} está peleando contra los otakus del universo 1004, gobierno galactico de Trump.`);
alert(`Otaku de nivel 2 lanza un hechizo hediondo, tiras el dado para derrotarlo...`);

let vidaOtaku = 100;
// Primera batalla
function primerabatalla() {
    alert("¡Comienza la batalla contra el Otaku nivel 2 del universo 1004!");

    while (vidaOtaku > 0) {
        let resultadoDado = tirarDado();
        alert(`Tiraste el dado: ${resultadoDado}`);

        if (resultadoDado % 2 === 0) {
            vidaOtaku -= 20;
            if (vidaOtaku > 0) {
                alert(`¡Le has bajado el 20% de vida! Le queda ${vidaOtaku}%`);
            } else {
                alert("¡Has derrotado al Otaku! 🎉");
                exp += 50; // Suma 50 puntos de experiencia
                alert(`¡Has ganado 50 puntos de experiencia! EXP total: ${exp}`);
                break;
            }
        } else {
            alert("¡Fallaste! No lograste reducir su vida esta vez.");
        }

        confirm("Presiona 'Aceptar' para lanzar el dado nuevamente.");
    }
}

// Iniciar batalla
primerabatalla();

// Introducción con alert
alert(`Despues de derrotar al Otaku, \n${personaje1} sigue adentrandose dentro del planeta TungTungTungSahur dentro del del universo 1004.  
    Cuando escuchas una voz... Es LupitaTiktok malvada atacando a ${personaje2}!`);

// Primera decision 
function primeraDecision() {
    let decision = prompt("LupitaTiktok Malvada ataca. ¿Qué haces?\n1. Proteger a Hatsune Miku\n2. Ignorarla y seguir peleando").trim();
    
    if (decision === "1") {
        alert(`${personaje2} está sorprendida por tu valentía.`);
        puntosRomance += 10;
    } else if (decision === "2") {
        alert(`${personaje2} está decepcionada. Tal vez aún no confía en ti.`);
        puntosRomance -= 5;
    } else {
        alert("Opción no válida, elige 1 o 2.");
        primeraDecision(); // Volver a solicitar entrada válida
    }
}

primeraDecision();

// Segunda decisiòn
function segundaDecision() {
    let decision = prompt("Lanzas el hechizo de la bondad contra LupitaTiktok Malvada. Lo que la vuelve a hacer buena.\n¿Le perdonas la vida? (Sí/No)").trim().toLowerCase();
    
    if (decision === "sí" || decision === "si") {
        alert(`${personaje2} te mira con respeto.`);
        puntosRomance += 5;
    } else if (decision === "no") {
        alert("No muestras compasión. ¿Será que estás demasiado concentrado en ganar experiencia?");
        puntosRomance -= 5;
    } else {
        alert("No tomas una decisión clara... simplemente te alejas.");
    }
}

segundaDecision();

// Segunda Batalla
function segundabatalla() {
    alert(`⚔️ Aparece el gran enemigo: TEMACH, el sensei de los simps redimidos.`);

    let vidaTemach = 120;
    const ataques = ["Discurso motivacional", "Golpe con libro de autoayuda", "Lluvia de críticas", "Misoginia camuflada"];
    
    while (vidaTemach > 0) {
        let resultadoDado = tirarDado();
        let ataqueElegido = ataques[Math.floor(Math.random() * ataques.length)];

        alert(`Temach lanza: "${ataqueElegido}"`);
        alert(`Tiras el dado... Resultado: ${resultadoDado}`);

        if (resultadoDado > 6) {
            let daño = resultadoDado * 2;
            vidaTemach -= daño;
            if (vidaTemach > 0) {
                alert(`¡Buen golpe! Le haces ${daño} de daño. Vida restante de Temach: ${vidaTemach}`);
            } else {
                alert("¡Derrotaste a Temach con sabiduría y fuerza! 🎯");
                exp += 100;
                puntosRomance += 10;
                alert(`Ganaste 100 EXP y 10 puntos de romance. EXP total: ${exp}, Romance: ${puntosRomance}`);
                break;
            }
        } else {
            alert("¡Temach te hace dudar de ti mismo! No logras dañar esta vez.");
        }

        confirm("Presiona 'Aceptar' para continuar la batalla.");
    }
}

segundabatalla();

// Tercera decisión
function terceraDecision() {
    let decision = prompt("Temach, derrotado, te ofrece unirte a su filosofía. ¿Qué eliges?\n1. Lo escuchas con respeto\n2. Le das un follow en TikTok\n3. Lo ignoras y abrazas a Hatsune Miku").trim();

    if (decision === "1") {
        alert("Has ganado sabiduría. EXP +20");
        exp += 20;
    } else if (decision === "2") {
        alert("Temach se siente validado, pero Hatsune Miku se pone celosa.");
        puntosRomance -= 5;
    } else if (decision === "3") {
        alert("Miku se sonroja. ❤️ Romance +10");
        puntosRomance += 10;
    } else {
        alert("No tomaste ninguna acción clara, pierdes la oportunidad.");
    }

    alert(`Estado actual: EXP: ${exp}, Romance: ${puntosRomance}`);
}

terceraDecision();


// Primer cierre
function evaluarstats() {
    alert(`Primer cierre, tus stats: 
        Nivel de romance: ${puntosRomance}
        EXP total: ${exp}`);

    if (puntosRomance >= 10) {
        alert(`¡La química entre ${personaje1} y ${personaje2} está creciendo! 💕`);
    } else {
        alert(`Parece que aún hay distancia entre ${personaje1} y ${personaje2}. ❄️`);
    }

    
}

evaluarstats();