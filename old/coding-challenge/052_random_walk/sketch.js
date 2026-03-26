
let x;
let y;

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
    background(51);
}

function draw() {
    stroke(255, 100);
    strokeWeight(2);
    point(x, y);

    switch (floor(random(4))) {
        case 0: x += 1; break;
        case 1: x -= 1; break;
        case 2: y += 1; break;
        case 3: y -= 1; break;
    }
}
