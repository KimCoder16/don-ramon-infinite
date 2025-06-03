
// Variables globales
let vidaOtaku = 100;
let puntosRomance = 0;
let exp = 0;
let personaje1 = "";
let personaje2 = "Don Ramón";
let etapa = 0;

function guardarNombreYContinuar() {
    const nombreInput = document.getElementById("inputNombre").value.trim();
    if (nombreInput === "") return;
    personaje1 = nombreInput;
    document.getElementById("inputNombre").style.display = "none";
    siguienteEtapa();
}

function siguienteEtapa() {
    etapa++;
    const historia = document.getElementById("historia");
    const controles = document.getElementById("controles");
    const resultado = document.getElementById("resultado");
    controles.innerHTML = "";
    resultado.textContent = "";

    switch (etapa) {
        case 1:
            historia.textContent = `Hola ${personaje1}. Estas son tus estadísticas iniciales:`;
            mostrarStats();
            controles.innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
            break;
        case 2:
            historia.textContent = `En un mundo interdimensional, Don Ramón lucha contra villanos cuando, de repente, conoce a Hatsune Miku. Conforme avanzas en el juego, deberás derrotar a los enemigos y tomar decisiones que afectarán el desenlace de su relación y la historia.`;
            controles.innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
            break;
        case 3:
            historia.textContent = "¡Comienza la batalla contra el Otaku nivel 2 del universo 1004!";
            controles.innerHTML = '<button onclick="lanzarDado()">Lanzar Dado</button>';
            break;
        case 4:
            historia.textContent = `Después de derrotar al Otaku,\n${personaje1} sigue adentrándose en el planeta TungTungTungSahur dentro del universo 1004. Cuando escucha una voz... ¡Es LupitaTiktok malvada atacando a ${personaje2}}!`;
            controles.innerHTML = '<button onclick="primeraDecision()">Responder</button>';
            break;
        case 5:
            segundaDecision();
            break;
        case 6:
            segundaBatalla();
            break;
        case 7:
            terceraDecision();
            break;
        case 8:
            evaluarStats();
            break;
    }
}

function lanzarDado() {
    const resultado = document.getElementById("resultado");
    const dado = Math.floor(Math.random() * 6) + 1;
    resultado.textContent += `Tiraste el dado: ${dado}\n`;

    if (dado % 2 === 0) {
        vidaOtaku -= 20;
        resultado.textContent += `¡Le has bajado el 20%! Vida restante: ${vidaOtaku}%\n`;
    } else {
        resultado.textContent += "Fallaste. No bajas vida esta vez.\n";
    }

    if (vidaOtaku <= 0) {
        exp = Math.floor(Math.random() * 50) + 50;
        resultado.textContent += `¡Has derrotado al Otaku! 🎉 ¡Has ganado ${exp} puntos de experiencia!\n`;
        mostrarStats();
        document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
    }
}

function mostrarStats() {
    document.getElementById("stats").textContent = `Usuario: ${personaje1}\nVida Otaku: ${vidaOtaku}%\nExperiencia: ${exp}\nRomance: ${puntosRomance}`;
}

function primeraDecision() {
    const historia = document.getElementById("historia");
    historia.textContent = "¿Qué haces?";
    const controles = document.getElementById("controles");
    controles.innerHTML = `
    <button onclick="eleccionDecision(true)">Proteger a ${personaje2}</button>
    <button onclick="eleccionDecision(false)">Ignorar y seguir peleando</button>
    `;
}

function eleccionDecision(decision) {
    const historia = document.getElementById("historia");
    if (decision) {
        puntosRomance += 10;
        historia.textContent = `${personaje2} está sorprendida por tu valentía.`;
    } else {
        puntosRomance -= 5;
        historia.textContent = `${personaje2} está decepcionada. Tal vez aún no confía en ti.`;
    }
    mostrarStats();
    document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
}

function segundaDecision() {
    const historia = document.getElementById("historia");
    historia.textContent = "Un androide se cruza en tu camino. ¿Intentas razonar o atacas?";
    const controles = document.getElementById("controles");
    controles.innerHTML = `
    <button onclick="eleccionDecision2(true)">Razonar</button>
    <button onclick="eleccionDecision2(false)">Atacar</button>
    `;
}

function eleccionDecision2(decision) {
    const historia = document.getElementById("historia");
    if (decision) {
        exp += 10;
        historia.textContent = "El androide accede a ayudarte y comparte información valiosa.";
    } else {
        exp -= 5;
        historia.textContent = "Lo derrotas, pero pierdes tiempo y energía valiosa.";
    }
    mostrarStats();
    document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
}

function segundaBatalla() {
    const historia = document.getElementById("historia");
    historia.textContent = "¡La batalla final contra Temach ha comenzado!";
    const controles = document.getElementById("controles");
    controles.innerHTML = '<button onclick="finalBattle()">Lanzar Dado</button>';
    vidaOtaku = 80;
    document.getElementById("resultado").textContent = "";
}

function finalBattle() {
    const resultado = document.getElementById("resultado");
    const dado = Math.floor(Math.random() * 6) + 1;
    resultado.textContent += `Dado final: ${dado}\n`;

    if (dado >= 4) {
        vidaOtaku -= 40;
        resultado.textContent += `¡Golpe crítico! Vida restante: ${vidaOtaku}%\n`;
    } else {
        resultado.textContent += "Temach esquivó el ataque.\n";
    }

    if (vidaOtaku <= 0) {
        exp += 50;
        resultado.textContent += `¡Has vencido a Temach! 🎉 Has ganado 50 puntos de experiencia.\n`;
        mostrarStats();
        document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
    }
}

function terceraDecision() {
    const historia = document.getElementById("historia");
    historia.textContent = "¿Te quedas en este universo con Don Ramón o regresas al tuyo?";
    const controles = document.getElementById("controles");
    controles.innerHTML = `
    <button onclick="eleccionFinal(true)">Quedarse</button>
    <button onclick="eleccionFinal(false)">Regresar</button>
    `;
}

function eleccionFinal(decision) {
    const historia = document.getElementById("historia");
    if (decision) {
        puntosRomance += 20;
        historia.textContent = `Te quedas con ${personaje2}. ¡Feliz para siempre! ❤️`;
    } else {
        exp += 10;
        historia.textContent = `Decides regresar a tu mundo, con recuerdos valiosos.`;
    }
    mostrarStats();
    document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Finalizar</button>';
}

function evaluarStats() {
    const historia = document.getElementById("historia");
    historia.textContent = `Estadísticas finales de ${personaje1}`;
    mostrarStats();
    document.getElementById("controles").innerHTML = '<button onclick="location.reload()">Reiniciar</button>';
}
