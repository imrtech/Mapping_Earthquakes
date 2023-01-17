// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    Street: streets,
    Dark: dark
  };

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [30, 30],
    zoom: 2,
    layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/imrtech/Mapping_Earthquakes/Mapping_GeoJSON_Points/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);

  // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// Grabbing our GeoJSON data.
L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup( "<h2>" + "Airport Code: "+ feature.properties.faa + "</h2>" + "<hr>" 
                   + "<h2>" + "Airport Name: " + feature.properties.name + "</h2>")
    }
  
  }).addTo(map);
  });

// Coordinates for each point to be used in the polyline starting with LA airport.
// let line = [
//     [33.9416, -118.4085],
//     [37.6214, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Coordinates for each point to be used in the polyline starting with San Francisco airport.
// let line = [
//     [37.6214, -122.3790],
//     [30.1975, -97.6663058],
//     [43.6772222, -79.630556],
//     [40.641766,	-73.780968]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     dashArray: '20,15',
//     color: "blue"
//   }).addTo(map);


// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//     color: "yellow"
//   }).addTo(map);

//  Add a marker to the map for Los Angeles, California.
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillcolor: '#ffffa1'
//  }).addTo(map);

// An array containing each city's location, state, and population.

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/200000,
//         color: "orange",
//         lineweight: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });
  
 

