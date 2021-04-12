
// Blobby!

/* 

ellipse ==> beginShape, vertex, endShape

1) using SPRINGS
2) perlin noise and polar coordinate <- use this!

*/

let zoff= 0.0;
let phase = 0;
const radius = 150;
const noiseMax = 5;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    noStroke();
    beginShape();
    for (let i = 0; i < 100; i++) {
        const a = TWO_PI / 100 * i;
        const xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
        const yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
        const offset = map(noise(xoff, yoff, zoff), 0, 1, -25, 25);
        curveVertex((radius + offset) * cos(a), (radius + offset) * sin(a));
    }
    
    endShape(CLOSE);
    zoff += 0.01;
}

