// second map scripts

let x = screen.width;
let mymap = true;
if (x > 650) {
  mymap = L.map('mapid').setView([37.242437, -95.868468], 3.73);
} else {
  mymap = L.map('mapid').setView([37.242437, -95.868468], 3.4);
}

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiaGVjaHRidyIsImEiOiJja2k3dDM4YmkwOXF0MzVxbDUyYWtneTJ2In0.4ZKkCdSwt4DF5fn--S-S_A'
}).addTo(mymap);



for (let i = 0; i < places.length; i++) {
  L.marker([places[i].latitude, places[i].longitude])
    .bindPopup('<h3>' + places[i].school + '</h3>' + '<h3>' + places[i].nameCity + '</h3>' + '<h4>' + 'Capacity: ' + places[i].capacity + '</h4>')
    .addTo(mymap)
}


function checkSize() {
  if (x < 650) {
    x = screen.width;
    mymap.setZoom(3.4);
  } else {
    x = screen.width
    mymap.setZoom(3.73);
  }
}

window.onresize = checkSize;
