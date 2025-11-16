import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
    center: [0, 0], // starting position [lng, lat]
    zoom: 6 // starting zoom
});