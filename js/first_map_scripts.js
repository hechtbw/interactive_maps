// first map scripts

let mymap = L.map('mapid').setView([29.616498, -81.873891], 7.51);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGVjaHRidyIsImEiOiJja2k3dDM4YmkwOXF0MzVxbDUyYWtneTJ2In0.4ZKkCdSwt4DF5fn--S-S_A'
}).addTo(mymap);

let marker1 = L.marker([28.917944, -82.469007]).addTo(mymap);
let marker2 = L.marker([30.333352, -81.609487]).addTo(mymap);
let marker3 = L.marker([29.655039, -82.344050]).addTo(mymap);
let marker4 = L.marker([29.151682, -82.172735]).addTo(mymap);

marker1.bindPopup("Beverly Hills, FL<br>This is the town I grew up in.");
marker2.bindPopup("Jacksonville, FL<br>I have lived in this city on two seperate occasions and in 4 seperate locations.");
marker3.bindPopup("Gainesville, FL<br>While moving all around Florida I always seem to end up back in Gainesville.");
marker4.bindPopup("Ocala, FL<br>I moved here from Jacksonville and then ended up moving right back to Jacksonville.");
