import * as maplibregl from "https://cdn.skypack.dev/maplibre-gl";

const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://tiles.openfreemap.org/styles/liberty', // style URL
    center: [4.80841, 56.213070], // starting position [lng, lat]
    // The Cobler or Ben Arthur 56.21307° N, 4.80841° W
    zoom: 8 // starting zoom
});