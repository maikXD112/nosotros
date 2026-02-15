const playlist = [
  "/public/musica/yung kai - blue (official music video) [IpFX2vq8HKw].mp3",
  "/public/musica/Stephen Sanchez - Until I Found You (Official Video) [GxldQ9eX2wo].mp3",
  "/public/musica/yung kai - wildflower (official lyric video) [CuT0bF03mGg].mp3",
  "musica4.mp3",
];

let currentSong = 0;
const music = document.getElementById("music");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current-time");
const duration = document.getElementById("duration");

// Función para cargar canción
function loadSong(index) {
  music.src = playlist[index];
  music.load();
}

// Formato mm:ss
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? "0" + s : s}`;
}

// Reproducir y pausar
playBtn.addEventListener("click", () => music.play());
pauseBtn.addEventListener("click", () => music.pause());

// Actualizar barra y tiempo
music.addEventListener("loadedmetadata", () => {
  progress.max = music.duration;
  duration.textContent = formatTime(music.duration);
});

music.addEventListener("timeupdate", () => {
  progress.value = music.currentTime;
  currentTime.textContent = formatTime(music.currentTime);
});

// Cambiar posición de la música al mover la barra
progress.addEventListener("input", () => {
  music.currentTime = progress.value;
});

// Al terminar una canción, pasar a la siguiente
music.addEventListener("ended", () => {
  currentSong++;
  if (currentSong >= playlist.length) currentSong = 0; // volver al inicio
  loadSong(currentSong);
  music.play();
});

// Cargar la primera canción al inicio
loadSong(currentSong);
