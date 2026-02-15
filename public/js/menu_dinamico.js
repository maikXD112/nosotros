const menu = document.getElementById("menu");

menu.innerHTML = `
  <header class="jp-header">
    <div class="jp-header-content">
      <h1 class="jp-title">私たちの歴史</h1>
      <p class="jp-subtitle">Nuestra historia</p>
    </div>
  </header>

  <nav class="jp-nav">
    <a href="index.html">Inicio</a>
    <a href="gustos.html">tus gusto</a>
    <a href="zona-ir.html">zonas para ir</a>
    <a href="cosa.html">??</a>
    <span class="jp-indicator"></span>
  </nav>
`;

const footerContainer = document.getElementById("footer");
footerContainer.innerHTML = `
    <footer class="jp-footer">
      <p>© <span id="year"></span> Tu pagina personable.</p>
      <p>Hecho con 💖 por [MAIK]</p>
    </footer>
  `;
const footer = footerContainer.querySelector(".jp-footer");
const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();
