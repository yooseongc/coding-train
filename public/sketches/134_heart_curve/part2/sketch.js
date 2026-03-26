
// https://mathworld.wolfram.com/HeartCurve.html
// x = 16 sin^3(t)
// y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)

function heartCurve(t) {
    const x = 16 * pow(sin(t), 3);
    const y = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
    return createVector(x, y);
}

function setupGif(callback) {
    gif = new GIF({ workers: 2, quality: 40, workerScript: '../libraries/gif.worker.js' });
    gif.on('finished', (blob) => {
        callback();
        window.open(URL.createObjectURL(blob));
        setupGif(callback);
    });
    return gif;
}

const heartCurves = [];
const totalFrame = 240;
let counter = 0;
let recording = false;
let recordingInProgress = false;
let gif;
let cnv;
let button;
let recordingFrame = 0;

function setup() {
    cnv = createCanvas(400, 400);

    button = createButton('Save to GIF');
    button.mouseClicked(() => {
        button.attribute('disabled', '');
        button.html('Recording...');
        recordingInProgress = false;
        recordingFrame = 0;
        recording = true;
    });
    gif = setupGif(() => {
        recordingFrame = 0;
        recording = false;
        button.removeAttribute('disabled');
        button.html('Save to GIF');
    });
}

function draw() {
    const beat = (counter++ % totalFrame) / totalFrame;
    background(51);
    translate(width / 2, height / 2);
    scale(1, -1);
    stroke(255, 0, 200);
    strokeWeight(4);
    fill(150, 0, 100);

    if (beat < 0.5) {
        const angle = map(beat, 0, 0.5, 0, TWO_PI);
        heartCurves.push(heartCurve(angle));
    } else {
        heartCurves.splice(0, 1);
    }

    beginShape();
    for (const curve of heartCurves) {
        const angle = map(beat, 0, 1, 0, TWO_PI * 2);
        const r = map(sin(angle), -1, 1, height / 70, height / 35);
        vertex(r * curve.x, r * curve.y);
    }
    endShape();

    if (recording && beat === 0) {
        recordingInProgress = true;
        gif.addFrame(cnv.elt, { delay: 1, copy: true });
        recordingFrame++;
    }
    if (recording && recordingInProgress) {
        recordingFrame++;
        gif.addFrame(cnv.elt, { delay: 1, copy: true });
        if (recordingFrame === totalFrame) {
            recordingInProgress = false;
            recording = false;
            gif.render();
        }
    }
}
