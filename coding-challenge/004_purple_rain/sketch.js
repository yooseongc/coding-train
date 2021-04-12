
let droplets = [];

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 500; i++) {
        droplets.push(new Drop(random(width), random(-200, height)));
    }
}

function draw() {
    background(230, 230, 250);
    for (const droplet of droplets) {
        droplet.fall();
        droplet.show();
    }
}
