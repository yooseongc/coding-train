

let sun;

function setup() {
    const canvas = createCanvas(600, 600, WEBGL);
    // disable right mouse button so the camera can use right mouse button
    canvas.elt.oncontextmenu = () => false;  
    createEasyCam({ distance: 500 });
    sun = new Planet(50, 0, 0);
    sun.spawnMoons(4, 1);
}

function draw() {
    background(0);
    lights();
    sun.show();
    sun.orbit();
}
