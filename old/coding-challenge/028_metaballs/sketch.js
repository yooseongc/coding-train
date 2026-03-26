
// https://en.wikipedia.org/wiki/Metaballs

const blobs = [];

function setup() {
    createCanvas(400, 200);
    colorMode(HSB);
    for (let i = 0; i < 10; i++) {
        blobs.push(new Blob(random(0, width), random(0, height)));
    }
}

function draw() {
    background(51);
    loadPixels();
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            let sum = 0;
            for (const blob of blobs) {
                const xdiff = x - blob.x;
                const ydiff = y - blob.y;
                const d = sqrt((xdiff * xdiff) + (ydiff * ydiff));
                sum += 10 * blob.r / d;
            }
            set(x, y, color(sum, 255, 255));
        }
    }
    updatePixels();
    
    for (const blob of blobs) {
        // blob.show();
        blob.update();
    }
}
