

const totalFrames = 360;
const increment = 0.03;
let noise;

function setup() {
    createCanvas(400, 400);
    noise = new OpenSimplexNoise(Date.now());
    colorMode(HSB);
}

function draw() {
    const angle = (frameCount % totalFrames) / totalFrames * TWO_PI;
    const uoff = cos(angle) + 1;
    const voff = sin(angle) + 1;

    let xoff = 0;
    for (let x = 0; x < width; x++) {
        let yoff = 0;
        for (let y = 0; y < height; y++) {
            const n = noise.noise4D(xoff, yoff, uoff, voff);
            stroke(color(map(n, -1, 1, 0, 255), 255, 255));
            point(x, y);
            yoff += increment;
        }
        xoff += increment;
    }
}
