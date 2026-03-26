

let sun;

let sunTexture;
const textures = [];

function preload() {
    sunTexture = loadImage('data/sun.jpg');
    textures.push(loadImage('data/mars.jpg'), loadImage('data/earth.jpg'), loadImage('data/mercury.jpg'))
}

function setup() {
    const canvas = createCanvas(600, 600, WEBGL);
    // disable right mouse button so the camera can use right mouse button
    canvas.elt.oncontextmenu = () => false;  
    createEasyCam({ distance: 500 });
    sun = new Planet(50, 0, 0, sunTexture);
    sun.spawnMoons(4, 1, textures);
}

function draw() {
    background(0);
    ambientLight(255, 255, 255);
    pointLight(255, 255, 255, 0, 0, 0);
    sun.show();
    sun.orbit();
}
