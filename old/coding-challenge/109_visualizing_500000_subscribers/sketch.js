
// https://mappa.js.org/
// https://mappa.js.org/docs/simple-map.html
// https://github.com/CodingTrain/500k-Subscriber-Map

let youtubeData;
let countries;    // https://gist.github.com/sindresorhus/1341699

let trainMap;
let canvas;

const data = [];

const mappa = new Mappa('Leaflet');
const options = {
    lat: 0,
    lng: 0,
    zoom: 1.5,
    style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

function preload() {
    youtubeData = loadTable('subscribers_geo.csv', 'header');
    countries = loadJSON('countries.json');
}

function setup() {
    canvas = createCanvas(800, 600);
    trainMap = mappa.tileMap(options);
    trainMap.overlay(canvas);

    let maxSubs = 0;
    let minSubs = Infinity;
    for (let row of youtubeData.rows) {
        const country = row.get('country_id').toLowerCase();
        const latlon = countries[country];
        if (latlon) {
            const [lat, lon] = latlon;
            const count = Number(row.get('subscribers'));
            data.push({lat, lon, count});
            if (count > maxSubs) maxSubs = count;
            if (count < minSubs) minSubs = count;
        }
    }

    const minD = sqrt(minSubs);
    const maxD = sqrt(maxSubs);
    for (const country of data) {
        country.diameter = map(sqrt(country.count), minD, maxD, 1, 20);
    }
}

function draw() {
    clear();
    for (const country of data) {
        const loc = trainMap.latLngToPixel(country.lat, country.lon);
        fill(frameCount % 255, 0, 200, 100);
        const zoom = trainMap.zoom();
        const scale = pow(2, zoom);
        ellipse(loc.x, loc.y, country.diameter * scale);
    }
}

