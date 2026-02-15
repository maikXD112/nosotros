const textarea = document.getElementById("gustos-texto");
const savedMsg = document.getElementById("saved-msg");

// Cargar texto guardado
const textoGuardado = localStorage.getItem("gustosTexto");
if (textoGuardado) {
  textarea.value = textoGuardado;
}

// Guardar mientras escribe
textarea.addEventListener("input", () => {
  localStorage.setItem("gustosTexto", textarea.value);
  savedMsg.style.opacity = "1";

  setTimeout(() => {
    savedMsg.style.opacity = "0.6";
  }, 800);
});

// Audio en fotos
document.querySelectorAll(".play-audio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const audio = btn.parentElement.querySelector(".photo-audio");
    if (audio.paused) {
      audio.play();
      btn.textContent = "⏸ Pausar";
    } else {
      audio.pause();
      btn.textContent = "🎵 Reproducir";
    }
  });
});