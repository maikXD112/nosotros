// Crear mapa
const map = L.map("map").setView([40.4168, -3.7038], 6); // España por defecto

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap"
}).addTo(map);

// Cargar lugares guardados
const savedPlaces = JSON.parse(localStorage.getItem("places")) || [];

savedPlaces.forEach(place => {
  addMarker(place);
});

// Click en el mapa
map.on("click", function (e) {
  const name = document.getElementById("place-name").value;
  const note = document.getElementById("place-note").value;

  if (!name) {
    alert("Escribe el nombre del lugar 💌");
    return;
  }

  const place = {
    name,
    note,
    lat: e.latlng.lat,
    lng: e.latlng.lng
  };

  savedPlaces.push(place);
  localStorage.setItem("places", JSON.stringify(savedPlaces));

  addMarker(place);

  document.getElementById("place-name").value = "";
  document.getElementById("place-note").value = "";
});

// Función marcador
function addMarker(place) {
  L.marker([place.lat, place.lng])
    .addTo(map)
    .bindPopup(`<b>${place.name}</b><br>${place.note}`);
}
