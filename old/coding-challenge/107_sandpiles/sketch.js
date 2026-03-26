
// https://youtu.be/1MtEUErz7Gg
// https://en.wikipedia.org/wiki/Abelian_sandpile_model

const defaultColor = [255, 0, 0];
const colors = [
    [255, 255, 0],
    [0, 185, 63],
    [0, 104, 255],
    [122, 0, 229]
];

let sandpiles;
let nextpiles;

function setup() {
    createCanvas(400, 400);
    pixelDensity(1);
    
    sandpiles = new Array(width).fill().map(i => new Array(height).fill(0));
    nextpiles = new Array(width).fill().map(i => new Array(height).fill(0));
    sandpiles[width / 2][height / 2] = 1000000000;
    
    background(defaultColor[0], defaultColor[1], defaultColor[2]);
}

function topple() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            nextpiles[x][y] = sandpiles[x][y];
        }
    }
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const num = sandpiles[x][y];
            if (num >= 4) {
                nextpiles[x][y] -= 4;
                if (x + 1 < width)  nextpiles[x + 1][y]++;
                if (x - 1 >= 0)     nextpiles[x - 1][y]++;
                if (y + 1 < height) nextpiles[x][y + 1]++;
                if (y - 1 >= 0)     nextpiles[x][y - 1]++;
            }
        }
    }
    
    let temp = sandpiles;
    sandpiles = nextpiles;
    nextpiles = temp;
}

function render() {
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const num = sandpiles[x][y];
            let col = defaultColor;
            if (num >= 0 && num <= 3) {
                col = colors[num];
            } 
            const pix = (x + y * width) * 4;
            pixels[pix]   = col[0];
            pixels[pix+1] = col[1];
            pixels[pix+2] = col[2];
        }
    }
    updatePixels();
}

function draw() {
    render();
    for (let i = 0; i < 100; i++) {
        topple();
    }
}
