

function setup() {
    createCanvas(600, 600);
}

function drawCircle(x, y, d) {
    ellipse(x, y, d);
    if (d > 2) {
        const halfD = d / 2;
        drawCircle(x + halfD, y, halfD);
        drawCircle(x - halfD, y, halfD);
    }
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    drawCircle(300, 300, 600);
    noLoop();
}
