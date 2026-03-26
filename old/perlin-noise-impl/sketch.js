
const w = 512;
const mw = 20;
const h = 512;

let perlinGridSize = 8;
let resolution = 128;

let randomGraphic;
let perlinGraphic;

function setup() {
    const canvas = createCanvas(w + mw + w, h);
    canvas.parent('#canvasDiv');
    noStroke();
    generateRandom();
    generatePerlin();
}

function regenerate() {
    background(255);
    generateRandom();
    Perlin2d.seed();
    generatePerlin();
}

function increaseResolution() {
    if (resolution === 512) return;
    resolution *= 2;
    regenerate();
}

function decreaseResolution() {
    if (resolution === 1) return;
    resolution /= 2;
    regenerate();
}

function increasePerlinGridSize() {
    if (perlinGridSize === 512) return;
    perlinGridSize *= 2;
    regenerate();
}

function decreasePerlinGridSize() {
    if (perlinGridSize === 1) return;
    perlinGridSize /= 2;
    regenerate();
}

function generateRandom() {
    const pixSize = w / resolution;
    for (let i = 0; i < perlinGridSize; i += perlinGridSize / resolution) {
        for (let j = 0; j < perlinGridSize; j += perlinGridSize / resolution) {
            const v = floor(random(255));
            fill(v);
            rect(i * (w / perlinGridSize), j * (w / perlinGridSize), pixSize, pixSize);
        }
    }
}

function generatePerlin() {
    const pixSize = w / resolution;
    push();
    translate(w + mw, 0);
    for (let i = 0; i < perlinGridSize; i += perlinGridSize / resolution) {
        for (let j = 0; j < perlinGridSize; j += perlinGridSize / resolution) {
            const v = map(Perlin2d.get(i, j), -1, 1, 0, 255);
            fill(v);
            rect(i * (w / perlinGridSize), j * (w / perlinGridSize), pixSize, pixSize);
        }
    }
    pop();
}


