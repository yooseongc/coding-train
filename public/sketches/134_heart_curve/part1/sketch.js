
// https://mathworld.wolfram.com/HeartCurve.html
// x = 16 sin^3(t)
// y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)

function heartCurve(t) {
    const x = 16 * pow(sin(t), 3);
    const y = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
    return createVector(x, y);
}

const r = 10;
const heartCurves = [];
let angle = 0;

function setup() {
    createCanvas(400, 400);
    const restartBtn = createButton('Restart');
    restartBtn.mouseClicked(() => {
        heartCurves.length = 0;
        angle = 0;
        loop();
    });
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    scale(1, -1);
    stroke(255);
    strokeWeight(4);
    fill(150, 0, 100);

    heartCurves.push(heartCurve(angle).mult(r));

    beginShape();
    for (const curve of heartCurves) {
        vertex(curve.x, curve.y);
    }
    endShape();

    if (angle > TWO_PI) {
        noLoop();
    }
    angle += 0.1;
}
