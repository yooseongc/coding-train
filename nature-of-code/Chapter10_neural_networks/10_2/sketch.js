
let vehicle;
const targets = [];

function setup() {
    createCanvas(640, 360);
    for (let i = 0; i < 8; i++) {
        targets.push(createVector(random(width), random(height)));
    }
    vehicle = new Vehicle(random(width), random(height), targets.length);
}

function mousePressed() {
    targets.length = 0;
    for (let i = 0; i < 8; i++) {
        targets.push(createVector(random(width), random(height)));
    }
}

function draw() {
    background(255);
    
    // draw goal (center)
    stroke(0);
    strokeWeight(2);
    fill(0, 100);
    ellipse(width / 2, height / 2, 36, 36);  

    // draw targets
    for (const target of targets) {
        noFill();
        stroke(0);
        strokeWeight(2);
        ellipse(target.x, target.y, 16, 16);
        line(target.x, target.y - 16, target.x, target.y + 16);
        line(target.x - 16, target.y, target.x + 16, target.y);
    }

    vehicle.steer(targets);
    vehicle.update();
    vehicle.show();

}
