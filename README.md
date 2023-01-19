# Mapping_Earthquakes

## Project OVerview
The purpose of this project is to gather earthquake data, and create maps that show the relationship between earthquakes and tectonic plates around the world, as well as earthquakes with a magnitude greater than 4.5 on the map.

The datasources used included:
- Earthquakes GeoJSON: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
- Earthquakes above 4.5 magnitude GeoJSON: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson
- Tectonic Plate GeoJSON: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json

## Results

Our tools included:
- Mapbox API
- D3.js library
- Leaflet: an open-source Javascript library for mobile-friendly interactive maps
- HTML and CSS
- GeoJSON: used for encding geographic data structures.

We developed the HTML file and the css file to render our and style our page.
The HTML held the map, while the javascript file stored the code.

The code included:
- The three tile layers that would display the earthquake and tectonic plate data
- A base layer to hold all three maps
- Overlays for tectonic plate, the earthquakes and the major earthquakes
- A control that would allow a user to select a layer to be visible
- Functions for style, color and bind popup.
- A call to d3.json to retreive the earthquake GeoJSON data, the major earthquake GeoJSON data and the tectonic plates data.

Two layers: Earthquakes, Tectonic Plates - Streetview
![image](/Earthquake_Challenge/static/images/twolayers_streetview.png)

Three layers: Earthquakes, Tectonic Plates, all Major Earthquakes- Streetview
![image](/Earthquake_Challenge/static/images/threelayers_streetview.png)

One layers: Earthquakes - Satellite View
![image](/Earthquake_Challenge/static/images/earthquake_satellite%20view.png)

Three layers: Earthquakes, Tectonic Plates, all Major Earthquakes- Dark View
![image](/Earthquake_Challenge/static/images/threelayers_darkview.png)