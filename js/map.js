const apiLink = 'https://api.mapbox.com/styles/v1/andrey19634/ck2xkd2wh0y4f1cmwk3113p1c/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmV5MTk2MzQiLCJhIjoiY2syd2MyMWdxMDN3MDNqcHFwb2Jha2h4ZiJ9._ZXqxQsQbHYpkq-9PPxN0w'
let map;
let layer;
let layerLabels;

const labels = ['Oceans', 'Gray', 'DarkGray', 'ShadedRelief'];
const imageryLabels = ['Imagery', 'ImageryClarity', 'ImageryFirefly'];

function initBackButton() {
    $('#back-btn').on('click', event => {
        window.history.back();
        event.preventDefault();
    })
}

init();

function init() {
    constructor();
    initBackButton();
    handleMapSelection();
    addPointsToMap();
}

function constructor() {
    map = L.map('map').setView([61.6, 31.1], 8);
    layer = L.tileLayer(apiLink).addTo(map)
}

function handleMapSelection() {
    document.querySelector('.map-selector').addEventListener('change', event => {
        const chosenMap = event.target.value;
        changeMap(chosenMap);
    });
}

function changeMap(chosenMap) {
    clearMap();
    setMapLayer(chosenMap);

    chooseAndAddLayerLabelsToMap(chosenMap);
}

function clearMap() {
    if (layer) {
        map.removeLayer(layer);
    }

    if (layerLabels) {
        map.removeLayer(layerLabels);
    }
}

function setMapLayer(chosenMap) {
    if (chosenMap === 'Sortavala') {
        layer = L.tileLayer(apiLink);
    } else {
        layer = L.esri.basemapLayer(chosenMap);
    }

    map.addLayer(layer);
}
function chooseAndAddLayerLabelsToMap(chosenMap) {
    if (labels.includes(chosenMap)) {
        addLayerLabelsToMap(chosenMap + 'Labels');
    }
    else if (imageryLabels.includes(chosenMap)) {
        addLayerLabelsToMap('ImageryLabels');
    }
}

function addLayerLabelsToMap(labels) {
    layerLabels = L.esri.basemapLayer(labels);
    map.addLayer(layerLabels);
}
function addPointsToMap() {
    $.getJSON("data/data.json", point => {
        L.geoJSON(point, {
            pointToLayer: (feature, coordinates) => {
                return L.marker(coordinates).bindPopup(feature.properties.title)
            }
        }).addTo(map);
    });
}
var greenIcon = L.icon({
iconUrl: 'https://avatars.mds.yandex.net/get-pdb/903199/885c7ccc-707d-45af-9d46-3167475f9ce3/s1200',

iconSize: [50, 95], // size of the icon
iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([61.694623, 31.311748], {icon: greenIcon}).addTo(map);
var popup = L.popup()
.setLatLng([61.954623, 31.311748])
.setContent("Привет! Приезжай сюда, чтобы изучать природу!")
.addTo(map);
var greenIcon = L.icon({
iconUrl: 'https://avatars.mds.yandex.net/get-pdb/903199/885c7ccc-707d-45af-9d46-3167475f9ce3/s1200',

iconSize: [50, 95], // size of the icon
iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([61.361537, 30.074038], {icon: greenIcon}).addTo(map);
var popup = L.popup()
.setLatLng([61.56537, 30.074038])
.setContent("Привет! Приезжай сюда, чтобы изучать природу!")
.addTo(map);
var greenIcon = L.icon({
iconUrl: 'https://avatars.mds.yandex.net/get-pdb/903199/885c7ccc-707d-45af-9d46-3167475f9ce3/s1200',

iconSize: [50, 95], // size of the icon
iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([61.645019, 30.553691], {icon: greenIcon}).addTo(map);
var popup = L.popup()
.setLatLng([61.855019, 30.553691])
.setContent("Привет! Приезжай сюда, чтобы изучать природу!")
.addTo(map);
var polygon = L.polygon([
    [61.35, 30.38],
    [61.52, 30.02],
    [61.73, 30.52],
    [61.80, 30.77],
	[61.65, 31.61],
    [61.44, 31.37],
	[61.58, 30.89],
	[61.49, 30.64]
]).addTo(map);