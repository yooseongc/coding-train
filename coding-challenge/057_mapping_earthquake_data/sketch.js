
// https://www.usgs.gov/natural-hazards/earthquake-hazards/data-tools
// https://en.wikipedia.org/wiki/Web_Mercator_projection
// https://docs.mapbox.com/playground/static/

const ww = 1024;
const hh = 512;
const zoom = 1;
const clon = 0;
const clat = 0;

let img;
let earthquakes;

const mercX = (lon) => {
    lon = radians(lon);
    const a = (256 / PI) * pow(2, zoom);
    const b = lon + PI;
    return a * b;
};

const mercY = (lat) => {
    lat = radians(lat);
    const a = (256 / PI) * pow(2, zoom);
    const b = tan(PI / 4 + lat / 2);
    const c = PI - log(b);
    return a * c;
};

function preload() {
    img = loadImage('map.png');
    earthquakes = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.csv');
}

function setup() {
    createCanvas(ww, hh);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(img, 0, 0);

    const cx = mercX(clon);
    const cy = mercY(clat);

    // i = 0 --> csv header
    for (let i = 1; i < earthquakes.length; i++) {
        const data = earthquakes[i].split(/,/);
        // time,latitude,longitude,depth,mag,magType ...
        const lat = data[1];
        const lon = data[2];
        let mag = data[4];
        let x = mercX(lon) - cx;
        let y = mercY(lat) - cy;

        // longitude wrapping
        if (x < - width / 2) {
            x += width;
        } else if (x > width / 2) {
            x -= width;
        }
        mag = pow(10, mag);
        mag = sqrt(mag);
        const magmax = sqrt(pow(10, 10));
        const d = map(mag, 0, magmax, 0, 180);
        
        stroke(255, 0, 255);
        fill(255, 0, 255, 200);
        ellipse(x, y, d, d);
    }
}

