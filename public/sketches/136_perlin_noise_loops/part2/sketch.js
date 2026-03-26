
class NoiseLoop {

    constructor(diameter, min, max) {
        this.diameter = diameter;
        this.min = min;
        this.max = max;
        this.cx = Math.random(1000);
        this.cy = Math.random(1000);
    }

    value(angle) {
        const xoff = map(cos(angle), -1, 1, this.cx, this.cx + this.diameter);
        const yoff = map(sin(angle), -1, 1, this.cy, this.cy + this.diameter);
        const r = noise(xoff, yoff);
        return map(r, 0, 1, this.min, this.max);
    }

}

class Particle {

    constructor() {
        this.xNoise = new NoiseLoop(0.5, -width, width * 2);
        this.yNoise = new NoiseLoop(0.5, -height, height * 2);
        this.dNoise = new NoiseLoop(7, 10, 120);
        this.rNoise = new NoiseLoop(7, 100, 255);
        this.bNoise = new NoiseLoop(7, 100, 255);
    }

    render(angle) {
        noStroke();
        fill(this.rNoise.value(angle), 50, this.bNoise.value(angle), 200);
        ellipse(this.xNoise.value(angle), this.yNoise.value(angle), this.dNoise.value(angle));
    }

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

let particles;
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

    particles = new Array(100).fill(0).map(() => new Particle());
}

function draw() {
    background(51);

    const percent = (counter++ % totalFrame) / totalFrame;
    const angle = percent * TWO_PI;
    particles.forEach(particle => particle.render(angle));

    if (recording && percent === 0) {
        recordingInProgress = true;
        gif.addFrame(cnv.elt, { delay: 1000 / frameRate(), copy: true });
        recordingFrame++;
    }
    if (recording && recordingInProgress) {
        recordingFrame++;
        gif.addFrame(cnv.elt, { delay: 1000 / frameRate(), copy: true });
        if (recordingFrame === totalFrame) {
            recordingInProgress = false;
            recording = false;
            gif.render();
        }
    }
}
