document.addEventListener("DOMContentLoaded", () => {
  // ====================
  // ELEMENTOS HEADER/NAV
  // ====================
  const header = document.querySelector("#menu .jp-header");
  const nav = document.querySelector("#menu .jp-nav");
  const links = nav.querySelectorAll("a");
  const indicator = nav.querySelector(".jp-indicator");
  const button = header.querySelector(".jp-btn");

  // ====================
  // ELEMENTOS FOOTER
  // ====================

  // ====================
  // FUNCIONES MODULARES
  // ====================

  /* ===== INDICADOR NAV ===== */
  function setupNavIndicator() {
    function moveIndicator(el) {
      indicator.style.width = el.offsetWidth + "px";
      indicator.style.left = el.offsetLeft + "px";
    }

    moveIndicator(links[0]); // indicador inicial
    links.forEach((l) => {
      l.addEventListener("mouseenter", () => moveIndicator(l));
      l.addEventListener("click", () => moveIndicator(l));
    });
  }

  /* ===== PÉTALOS 100% JS ===== */
  function startSakura() {
    function createSakura(parent, size = 14, maxHeight = null) {
      const sakura = document.createElement("span");
      sakura.style.position = "absolute";
      sakura.style.top = "-10px";
      sakura.style.left = Math.random() * parent.offsetWidth + "px";
      sakura.style.width = size + "px";
      sakura.style.height = size + "px";
      sakura.style.background = "pink";
      sakura.style.borderRadius = "50% 50% 50% 0";
      sakura.style.transform = "rotate(45deg)";
      sakura.style.opacity = 0.8;
      sakura.style.pointerEvents = "none";
      parent.appendChild(sakura);

      let top = -10;
      let rotation = 0;
      const fallSpeed = 1 + Math.random() * 2;
      const rotateSpeed = 1 + Math.random() * 5;

      const max = maxHeight || parent.offsetHeight;

      const interval = setInterval(() => {
        top += fallSpeed;
        rotation += rotateSpeed;
        sakura.style.top = top + "px";
        sakura.style.transform = `rotate(${rotation}deg)`;
        sakura.style.opacity = 1 - top / max;

        if (top > max) {
          clearInterval(interval);
          sakura.remove();
        }
      }, 16);
    }

    // Crear pétalos solo en el header
    setInterval(() => createSakura(header, 14), 600);

    // Comentado para quitar los pétalos del footer
    // setInterval(() => createSakura(footer, 10, footer.offsetHeight), 800);
  }

  /* ===== NAV STICKY ===== */
  function setupStickyNav() {
    const navTop = nav.offsetTop;
    window.addEventListener("scroll", () => {
      nav.classList.toggle("sticky", window.scrollY >= navTop);
    });
  }

  /* ===== PARALLAX ===== */
  function setupParallax() {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (window.innerWidth >= 768) {
        header.style.backgroundPosition = `center ${scroll * 0.5}px`;
      } else {
        header.style.backgroundPosition = `top center`;
      }
    });
  }

  /* ===== BOTÓN ===== */
  function setupButtonEffect() {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.1)";
      button.style.boxShadow = "0 0 25px crimson, 0 0 50px crimson";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
      button.style.boxShadow = "none";
    });
  }

  /* ===== FOOTER ===== */
  function setupFooterEffect() {
    footer.addEventListener("mouseenter", () => {
      footer.style.backgroundColor = "#222";
      footer.style.boxShadow = "0 -0 20px crimson";
      footer.style.transition = "all 0.4s ease";
    });
    footer.addEventListener("mouseleave", () => {
      footer.style.backgroundColor = "#333";
      footer.style.boxShadow = "none";
    });
  }

  // ====================
  // INICIALIZAR TODAS LAS FUNCIONES
  // ====================
  setupNavIndicator();
  startSakura();
  setupStickyNav();
  setupParallax();
  setupButtonEffect();
  setupFooterEffect();
});
