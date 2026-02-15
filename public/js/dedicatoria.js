 const petalsContainer = document.querySelector('.petals-container');

  function createPetal() {
    const petal = document.createElement('span');
    petal.style.left = Math.random() * 100 + '%';
    petal.style.width = 10 + Math.random() * 10 + 'px';
    petal.style.height = 10 + Math.random() * 10 + 'px';
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
  }

  setInterval(createPetal, 500);