
// Variables globales
let vidaOtaku = 100;
let vidaTemach = 120;
let puntosRomance = 0;
let exp = 0;
let personaje1 = "Don Ramón";
let personaje2 = "Hatsune Miku";

// Utilidades DOM
const resultado = document.getElementById('resultado');
const historia = document.getElementById('historia');
const decisiones = document.getElementById('controles');

// Tirar dado
function tirarDado() {
    return Math.floor(Math.random() * 12) + 1;
}

// Guardar partida
function guardarPartida() {
    const partida = { vidaOtaku, vidaTemach, puntosRomance, exp };
    localStorage.setItem('partida', JSON.stringify(partida));
}

// Cargar partida
function cargarPartida() {
    const data = localStorage.getItem('partida');
    if (data) {
        const partida = JSON.parse(data);
        vidaOtaku = partida.vidaOtaku;
        vidaTemach = partida.vidaTemach;
        puntosRomance = partida.puntosRomance;
        exp = partida.exp;
    }
}

function actualizarStats() {
    resultado.textContent = `EXP: ${exp}\nRomance: ${puntosRomance}\nVida Otaku: ${vidaOtaku}\nVida Temach: ${vidaTemach}`;
}

// 1ra Batalla
function iniciarBatalla() {
    let log = `¡Comienza la batalla contra el Otaku nivel 2 del universo 1004!\n`;
    vidaOtaku = 100;
    let contadorDados = 0;

    while (vidaOtaku > 0) {
        const dado = tirarDado();
        contadorDados++;
        log += `Tiraste el dado: ${dado}\n`;

        if (dado % 2 === 0) {
            vidaOtaku -= 20;
            if (vidaOtaku > 0) {
                log += `¡Le bajaste 20%! Vida restante: ${vidaOtaku}%\n`;
            } else {
                log += "¡Has derrotado al Otaku! 🎉\n";
                exp = 100 - contadorDados;
                log += `¡Has ganado ${exp} puntos de experiencia!\n`;
                guardarPartida();
                break;
            }
        } else {
            log += "Fallaste. No lograste dañar esta vez.\n";
        }
    }

    historia.textContent = `Después de derrotar al Otaku,\n${personaje1} sigue adentrándose en el planeta TungTungTungSahur dentro del universo 1004. Cuando escucha una voz... ¡Es LupitaTiktok malvada atacando a ${personaje2}!`;
    resultado.textContent = log;
}

// Primera decisión
function primeraDecision() {
    historia.innerHTML = `LupitaTiktok Malvada ataca. ¿Qué haces?`;
    decisiones.innerHTML = `
    <button onclick="decision1(true)">Proteger a Hatsune Miku</button>
    <button onclick="decision1(false)">Ignorarla y seguir peleando</button>
  `;
}

function decision1(proteger) {
    if (proteger) {
        historia.textContent = `${personaje2} está sorprendida por tu valentía.`;
        puntosRomance += 10;
    } else {
        historia.textContent = `${personaje2} está decepcionada. Tal vez aún no confía en ti.`;
        puntosRomance -= 5;
    }
    actualizarStats();
}

// Segunda decisión
function segundaDecision() {
    historia.innerHTML = `Lanzas el hechizo de la bondad contra LupitaTiktok Malvada. Lo que la vuelve a hacer buena. ¿Le perdonas la vida?`;
    decisiones.innerHTML = `
    <button onclick="decision2(true)">Sí</button>
    <button onclick="decision2(false)">No</button>
    `;
}

function decision2(perdonar) {
    if (perdonar) {
        historia.textContent = `${personaje2} te mira con respeto.`;
        puntosRomance += 5;
    } else {
        historia.textContent = `No muestras compasión. ¿Será que estás demasiado concentrado en ganar experiencia?`;
        puntosRomance -= 5;
    }
    actualizarStats();
}

// Segunda Batalla
function segundaBatalla() {
    vidaTemach = 120;
    const ataques = ["Discurso motivacional", "Golpe con libro de autoayuda", "Lluvia de críticas", "Misoginia camuflada"];
    let log = `⚔️ Aparece el gran enemigo: TEMACH, el sensei de los simps redimidos.\n`;

    while (vidaTemach > 0) {
        const ataque = ataques[Math.floor(Math.random() * ataques.length)];
        const dado = tirarDado();
        log += `Temach lanza: \"${ataque}\"\n`;
        log += `Tiras el dado... Resultado: ${dado}\n`;

        if (dado > 6) {
            let daño = dado * 2;
            vidaTemach -= daño;
            if (vidaTemach > 0) {
                log += `¡Buen golpe! Le haces ${daño} de daño. Vida restante de Temach: ${vidaTemach}\n`;
            } else {
                log += "¡Derrotaste a Temach con sabiduría y fuerza! 🎯\n";
                exp += 100;
                puntosRomance += 10;
                log += `Ganaste 100 EXP y 10 puntos de romance.\n`;
                break;
            }
        } else {
            log += "¡Temach te hace dudar de ti mismo! No logras dañar esta vez.\n";
        }
    }

    resultado.textContent = log;
    actualizarStats();
}

// Tercera decisión
function terceraDecision() {
    historia.innerHTML = `Temach, derrotado, te ofrece unirte a su filosofía. ¿Qué eliges?`;
    decisiones.innerHTML = `
    <button onclick="decision3(1)">Escucharlo con respeto</button>
    <button onclick="decision3(2)">Darle follow en TikTok</button>
    <button onclick="decision3(3)">Ignorarlo y abrazar a Hatsune Miku</button>
    `;
}

function decision3(opcion) {
    if (opcion === 1) {
        historia.textContent = `Has ganado sabiduría. EXP +20`;
        exp += 20;
    } else if (opcion === 2) {
        historia.textContent = `Temach se siente validado, pero Hatsune Miku se pone celosa.`;
        puntosRomance -= 5;
    } else if (opcion === 3) {
        historia.textContent = `Miku se sonroja. ❤️ Romance +10`;
        puntosRomance += 10;
    }
    actualizarStats();
}

// Evaluación final
function evaluarStats() {
    let final = `Primer cierre, tus stats:\nNivel de romance: ${puntosRomance}\nEXP total: ${exp}\n`;
    if (puntosRomance >= 10) {
        final += `¡La química entre ${personaje1} y ${personaje2} está creciendo! 💕`;
    } else {
        final += `Parece que aún hay distancia entre ${personaje1} y ${personaje2}. ❄️`;
    }
    resultado.textContent = final;
    guardarPartida();
}

// Reiniciar
function reiniciarJuego() {
    localStorage.removeItem('partida');
    vidaOtaku = 100;
    vidaTemach = 120;
    puntosRomance = 0;
    exp = 0;
    resultado.textContent = 'Juego reiniciado.';
    historia.textContent = '';
    decisiones.innerHTML = '';
}

// Eventos
cargarPartida();
document.getElementById('btnIniciarBatalla').addEventListener('click', iniciarBatalla);
document.getElementById('btnDecision1').addEventListener('click', primeraDecision);
document.getElementById('btnDecision2').addEventListener('click', segundaDecision);
document.getElementById('btnSegundaBatalla').addEventListener('click', segundaBatalla);
document.getElementById('btnDecision3').addEventListener('click', terceraDecision);
document.getElementById('btnEvaluar').addEventListener('click', evaluarStats);
document.getElementById('btnReiniciar').addEventListener('click', reiniciarJuego);

//Funciones externas a la batalla
function actualizarStats() {
    document.getElementById('estadoJugador').innerHTML = `
        <strong>Vida del Otaku:</strong> ${vidaOtaku} <br>
        <strong>EXP:</strong> ${exp} <br>
        <strong>Puntos Romance:</strong> ${puntosRomance}
    `;
}

