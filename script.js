// Create map
var map = L.map('map').setView([0, 0], 2);

// Load tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Marker
var marker = L.marker([0, 0]).addTo(map);

function showLocation() {
  var lat = document.getElementById("lat").value;
  var lng = document.getElementById("lng").value;

  if (lat === "" || lng === "") {
    alert("Enter both values");
    return;
  }

  lat = parseFloat(lat);
  lng = parseFloat(lng);

  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);
}
