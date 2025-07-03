
// Variables globales
let vidaOtaku = 100;
let puntosRomance = 0;
let exp = 0;
let personaje1 = "Don Ramon";
let personaje2 = "Hatsune Miku";
let etapa = 0;

function guardarNombreYContinuar() {
    const nombreInput = document.getElementById("inputNombre").value.trim();
    if (nombreInput === "") return;
    personaje1 = nombreInput;
    document.getElementById("inputNombre").style.display = "none";
    siguienteEtapa();
}

function guardarEnLocalStorage() {
    const datos = {
        nombre: personaje1,
        exp,
        puntosRomance,
        etapa
    };
    localStorage.setItem("partidaDonRamon", JSON.stringify(datos));
}

function mostrarStats() {
    document.getElementById("stats").innerHTML = `
        <span>👤 ${personaje1}</span> &nbsp;&nbsp;
        <span>⭐ Exp: ${exp}</span> &nbsp;&nbsp;
        <span>❤️ Romance: ${puntosRomance}</span>
    `;
    guardarEnLocalStorage();
}

function mostrarImagen(url) {
    document.getElementById("imagenEscena").innerHTML = `<img src="${url}" style="max-width:100%; border-radius: 15px;">`;
}


// Para darle estructura al juego
// Para darle estructura al juego
function siguienteEtapa() {
    etapa = etapa + 1;
    const historia = document.getElementById("historia");
    const controles = document.getElementById("controles");
    const resultado = document.getElementById("resultado");
    controles.innerHTML = "";
    resultado.textContent = "";

    if (etapa === 1) {
        Swal.fire({
            title: `¡Bienvenido, ${personaje1}!`,
            text: 'Estas son tus estadísticas iniciales ☝️',
            icon: 'info',
            confirmButtonText: 'Ver stats'
        }).then(() => {
            historia.textContent = `Te damos la bienvenida, ${personaje1}. Estas son tus estadísticas iniciales ☝️`;
            mostrarStats();
            controles.innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
        });
        return;
    }

    if (etapa === 2) {
        Swal.fire({
            title: '¡Batalla interdimensional!',
            text: 'Don Ramón está peleando contra los otakus del universo 1004...',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVVD075z2wLPuKwlhHYcVhNWS9bSMe_V2xKw&s', // imagenn
            imageWidth: 300,
            confirmButtonText: 'Continuar'
        }).then(() => {
            historia.textContent = `Don Ramón está peleando contra los otakus del universo 1004...`;
            controles.innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
        });
        return;
    }

    if (etapa === 3) {
        Swal.fire({
            title: '¡Hechizo Otaku!',
            text: 'Un Otaku de nivel 2 lanza un hechizo hediondo... ¡Lanza el dado para defenderte!',
            
            imageUrl: 'https://cdna.artstation.com/p/assets/images/images/035/602/008/large/rigviel-art-sailor-zakel.jpg?1615393848', // imagenn
            icon: 'warning',
            confirmButtonText: 'Lanzar dado'
        }).then(() => {
            historia.textContent = "Cuando se encuentra con un Otaku de nivel 2 que le lanza un hechizo hediondo... ¡Lanza el dado para derrotarlo!";
            controles.innerHTML = '<button id="btnDado" onclick="lanzarDado()">Lanzar Dado</button>';
            anime({
                targets: '#btnDado',
                scale: [0.9, 1.1],
                duration: 800,
                easing: 'easeInOutSine',
                direction: 'alternate',
                loop: true
            });

        });
        return;
    }

    if (etapa === 4) {
        historia.textContent = `Después de derrotar al Otaku, Don Ramon sigue explorando...`;
        controles.innerHTML = '<button onclick="primeraDecision()">Responder</button>';
    }

    //siguientes etapads directas
    if (etapa === 5) {
        segundaDecision();
    } else if (etapa === 6) {
        segundaBatalla();
    } else if (etapa === 7) {
        terceraDecision();
    } else if (etapa === 8) {
        evaluarStats();
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
        mostrarImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSjyHyjxJ27MzV0ifwtXaiJCfNWZNQ0xeZw&s"); // imagenn
    } else {
        puntosRomance -= 5;
        historia.textContent = `${personaje2} está decepcionada. Tal vez aún no confía en ti.`;
        mostrarImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSjyHyjxJ27MzV0ifwtXaiJCfNWZNQ0xeZw&s"); // imagenn

    }
    mostrarStats();
    document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
    
}

function segundaDecision() {
    mostrarImagen("");
    const historia = document.getElementById("historia");
    historia.textContent = "Un cienciólogo se cruza en tu camino. ¿Intentas razonar o atacas?";
    const controles = document.getElementById("controles");
    controles.innerHTML = `
        <button onclick="eleccionDecision2(true)">Razonar</button>
        <button onclick="eleccionDecision2(false)">Tirarle un libro de psiquiatría</button>
    `;
}

function eleccionDecision2(decision) {
    const historia = document.getElementById("historia");
    if (decision) {
        exp += 10;
        historia.textContent = "El cienciologo accede a ayudarte con la condición de que leas su folleto.";
    } else {
        exp -= 5;
        historia.textContent = "Te hace un drama de por qué la psiquiatría es un invento del gobierno y te intenta convencer de que vas a reencarnar en una cucaracha. Te debilitas.";
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
        resultado.textContent += `¡Has vencido a Temach y Miku te abraza para celebrar! 🎉 Has ganado 50 puntos de experiencia.\n`;
        mostrarStats();
        document.getElementById("controles").innerHTML = '<button onclick="siguienteEtapa()">Siguiente</button>';
    }
}

function terceraDecision() {
    const historia = document.getElementById("historia");
    historia.textContent = "Te enfrentas a que la misión terminó, ¿Don Ramón debería quedarse en el planeta un poco más conociendo a Miku o viajas al siguiente planeta?";
    const controles = document.getElementById("controles");
    controles.innerHTML = `
        <button onclick="eleccionFinal(true)">Quedarse</button>
        <button onclick="eleccionFinal(false)">Seguir con otra misión</button>
    `;
}

function eleccionFinal(decision) {
    const historia = document.getElementById("historia");
    if (decision) {
        puntosRomance += 20;
        historia.textContent = `Te quedas con ${personaje2}. Conversan del día a día y la cercanía comienza, le pides que te ayude con tu siguiente misión mientras están mirando un directo de Aimep3 en tu Peraphone. ❤️`;
    } else {
        exp += 10;
        historia.textContent = `Decides mirar tu peraphone, con los datos de la siguiente misión, te despides de Miku pero no sin antes intercambiar una conexión con sus peraphones📲🍐`;
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

//el json
let enemigos = [];

fetch("enemigos.json")
    .then(res => res.json())
    .then(data => enemigos = data)
    .catch(error => console.error("Error cargando enemigos:", error));
