const texto = `Desde que llegaste a mi vida, todo cambia de la froma de ver el amor, el respeto y los mas importante
la confianza de ambos, revivistes algo de mi que pensaba que nunca volveria a sentir con alguien que es, amar a alguien de verdad.
Eres mi sol, mi luna, mi estella brillante, mi niña, mi mujer, mi amor, mi compañera de vida, eres mi todo.
Eres como una flor que florece en primavera 🌸, porque eres delicada pero a la vez bella y por eso yo soy el encargado de que
esa bellesa y debil flor deba ser protegida y amada con todo mi ser.
Tu sonrisa ilumina mis días y tu voz calma mi corazón.
Gracias por existir y por compartir tu luz conmigo.
Siempre serás mi persona especial. 愛してる💖`;

let i = 0;
let escribiendo = false;

function efectoMaquina() {
  if (i < texto.length) {
    document.getElementById("textoCarta").innerHTML += texto.charAt(i);
    i++;
    setTimeout(efectoMaquina, 40);
  }
}

function abrirCarta() {
  document.getElementById("carta").classList.add("activa");
  document.getElementById("overlay").classList.add("activo");

  if (!escribiendo) {
    escribiendo = true;
    efectoMaquina();
  }
  if (!musicaActiva) {
    toggleMusica();
  }
}

function cerrarCarta() {
  document.getElementById("carta").classList.remove("activa");
  document.getElementById("overlay").classList.remove("activo");
}

/* 🎵 PLAYLIST AUTOMÁTICA */

let musicaActiva = false;
const audio = document.getElementById("musica");
const botonMusica = document.querySelector(".music-btn");

// Lista de canciones
const playlist = [
  "/public/musica/beabadoobee - Glue Song (Official Music Video) [y1cBhJLNNXU].mp3",
  "/public/musica/Beabadoobee - the perfect pair (Official Live Video) [3WpdCZC9q6w].mp3",
];

let indiceActual = 0;

// Función fade-in
function fadeInAudio() {
  audio.volume = 0;
  audio.play().catch(() => {}); // evita errores de autoplay en algunos navegadores

  let fade = setInterval(() => {
    if (audio.volume < 0.9) {
      audio.volume += 0.05;
    } else {
      clearInterval(fade);
    }
  }, 200);
}

// Botón ON/OFF
function toggleMusica() {
  if (!musicaActiva) {
    // Si no hay src, cargamos la primera canción
    if (!audio.src) {
      audio.src = playlist[indiceActual];
    }
    fadeInAudio();
    botonMusica.textContent = "🎵 Música OFF";
    musicaActiva = true;
  } else {
    audio.pause();
    botonMusica.textContent = "🎵 Música ON";
    musicaActiva = false;
  }
}

// 🔁 Playlist automática
audio.addEventListener("ended", () => {
  indiceActual++;
  if (indiceActual >= playlist.length) indiceActual = 0;

  audio.src = playlist[indiceActual];
  fadeInAudio();
});

// 🔹 Cuando se abre la carta, iniciamos música si no está activa
function abrirCarta() {
  document.getElementById("carta").classList.add("activa");
  document.getElementById("overlay").classList.add("activo");

  if (!escribiendo) {
    escribiendo = true;
    efectoMaquina();
  }

  if (!musicaActiva) {
    // Cargamos primera canción si no hay ninguna
    audio.src = playlist[indiceActual];
    toggleMusica();
  }
}

/* Pétalos */
function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.classList.add("petalo");
  petalo.innerHTML = "🌸";
  petalo.style.left = Math.random() * 100 + "vw";
  petalo.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.body.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 10000);
}

setInterval(crearPetalo, 500);

const intro = document.getElementById("intro");
let inicioRealizado = false;
const videosContainer = document.getElementById("videosContainer");

document.addEventListener("click", function iniciarIntro() {
  if (inicioRealizado) return;
  inicioRealizado = true;

  // Inicia música si no está activa
  if (!musicaActiva) {
    toggleMusica();
  }

  // Fade out intro
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "auto";

    // Mostrar videos después de la intro
    videosContainer.style.display = "flex";

    // Mostrar videos con animación
    videosContainer.classList.add("show");

    // Reproducir cada video muteado
    const videos = videosContainer.querySelectorAll("video");
    videos.forEach(v => {
      v.currentTime = 0;
      v.play().catch(() => {}); // evita errores por autoplay
    });

  }, 2000);
});
