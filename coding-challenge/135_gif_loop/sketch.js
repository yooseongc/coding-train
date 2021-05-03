

// https://github.com/jnordberg/gif.js/
// https://github.com/golanlevin/LoopTemplates
// https://easings.net/

let gif;
let recording = false;
let canvas;

const nFrames = 120;
let counter = 0;

function setupGif(callback) {
    gif = new GIF({ workers: 2, quality: 40, workerScript: 'libraries/gif.worker.js' });
    gif.on('finished', (blob) => {
        if (callback) callback();
        window.open(URL.createObjectURL(blob));
        setupGif(callback);
    });
    return gif;
}

function setup() {
    canvas = createCanvas(500, 200);

    const button = createButton('RECORD');
    button.mouseClicked(() => {
        recording = !recording;
        if (recording) {
            button.html('STOP');
        } else {
            gif.render();
            button.html('RECORD');
        }
    });
    setupGif();
}

function draw() {
    const fraction = (counter++ % nFrames) / nFrames;
    render(fraction);
    if (recording) {
        gif.addFrame(canvas.elt, { delay: floor(1000 / 60), copy: true });
    }
}

function render(fraction) {
    background(180);
    smooth();
    stroke(0);
    strokeWeight(2);

    // 1. rotating square and arm
    const cx = 100;
    const cy = 100;
    const radius = 80;
    const rotatingArmAngle = fraction * TWO_PI;
    const rotatingSquareAngle = fraction * TWO_PI * - 0.25;
    const px = cx + radius * cos(rotatingArmAngle);
    const py = cy + radius * sin(rotatingArmAngle);
    fill(255);
    line(cx, cy, px, py);
    ellipse(px, py, 20, 20);

    push();
    translate(cx, cy);
    rotate(rotatingSquareAngle);
    fill(255, 128);
    rect(-40, -40, 80, 80);
    pop();

    // 2. linearly moving square
    const squareSize = 20;
    const topY = 0 - squareSize - 2;
    const botY = height + 2;
    const squareFraction = (fraction + 0.5) % 1  // shifted by a half-loop
    const yPosition = map(squareFraction, 0, 1, topY, botY);
    fill(255);
    rect(230, yPosition, 20, 20);

    // 3. sigmoidally moving square
    let eased = doubleExponentialSigmoid(fraction, 0.7);
    eased = (eased + 0.5) % 1;
    const yPosition2 = map(eased, 0, 1, topY, botY);
    fill(255, 200, 200);
    rect(260, yPosition2, 20, 20);

    // 4. pulsating ellipse
    const ellipsePurse = sin(3 * fraction * TWO_PI);
    const ellipseW = map(ellipsePurse, -1, 1, 20, 50);
    const ellipseH = map(ellipsePurse, -1, 1, 50, 30);
    const ellipseCoor = map(ellipsePurse, -1, 1, 128, 255);
    fill(255, ellipseCoor, ellipseCoor);
    ellipse(350, cy, ellipseW, ellipseH);

    // 5. travelling sine wave
    stroke(0);
    for (let sy = 0; sy <= height; sy += 4) {
        const t = map(sy, 0, height, 0, 0.25);
        const sx = 450 + 25 * sin((t + fraction) * TWO_PI);
        ellipse(sx, sy, 1, 1);
    }

    // 6. text feedback
    fill(255, 0, 0);
    noStroke();
    textAlign(CENTER);
    text(nf(fraction, 1, 3), cx, cy - 15);

}

function doubleExponentialSigmoid(_x, _a) {
    if (!_a) _a = 0.75; // default

    var min_param_a = 0.0 + Number.EPSILON;
    var max_param_a = 1.0 - Number.EPSILON;
    _a = constrain(_a, min_param_a, max_param_a);
    _a = 1 - _a;

    var _y = 0;
    if (_x <= 0.5) {
        _y = (pow(2.0 * _x, 1.0 / _a)) / 2.0;
    }
    else {
        _y = 1.0 - (pow(2.0 * (1.0 - _x), 1.0 / _a)) / 2.0;
    }
    return (_y);
}
