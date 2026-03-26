


/*
    3D Earthquake Data Visualization

    ref) https://visibleearth.nasa.gov/collection/1484/blue-marble
    ref) https://ko.wikipedia.org/wiki/%EA%B5%AC%EB%A9%B4%EC%A2%8C%ED%91%9C%EA%B3%84
    ref) https://github.com/JacobGeoGeek/covid-19-visualisation-3D/blob/master/sketch.js
*/

let cam;
let earth;
let table;

let angle = 0;
const r = 200;

function preload() {
    earth = loadImage('earth.jpg');
    table = loadTable(
        'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.csv',
        'header'
    );
}
    
function setup() {
    const canvas = createCanvas(600, 600, WEBGL);
    // disable right button
    canvas.elt.oncontextmenu = () => false;
    cam = createEasyCam({ distance: 600 });
}

function ll2xyz(lat, lon) {
    const theta = radians(lat);
    const phi   = radians(lon) + PI;
    const x = r * cos(theta) * sin(phi);
    const y = -r * sin(theta);
    const z = r * cos(theta) * cos(phi);
    return [x, y, z];
}

function draw() {
    background(51);
    lights();
    debugMode();
    fill(200);
    noStroke();
    texture(earth);
    sphere(r);

    for (const row of table.rows) {
        const lat = row.getNum('latitude');
        const lon = row.getNum('longitude');
        const mag = row.getNum('mag');

        const [x, y, z] = ll2xyz(lat, lon);
        const pos = createVector(x, y, z);
        const h = map(pow(10, mag), 0, pow(10, 7), 10, 100);
        const xaxis = createVector(1, 0, 0);
        const angleb = abs(xaxis.angleBetween(pos));
        const raxis = xaxis.cross(pos);
        push();
        translate(x, y, z);
        // apply normal vector
        rotate(angleb, raxis);
        fill(255);
        box(h, 5, 5);
        pop();
    }
    
    
}
