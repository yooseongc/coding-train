
// https://en.wikipedia.org/wiki/Circle_packing

const circles = [];
const spots = [];
const total = 20;
const maxAttempts = 100;
let img;
let imgWidth;
let imgHeight;

function preload() {
    img = loadImage('image/2017.png');
}

function setup() {
    frameRate(20);
    pixelDensity(1);
    img.loadPixels();
    imgWidth = img.width;
    imgHeight = img.height;
    createCanvas(imgWidth, imgHeight);
    for (let x = 0; x < imgWidth; x++) {
        for (let y = 0; y < imgHeight; y++) {
            const index = (x + y * imgWidth) * 4;
            const r = img.pixels[index];
            const g = img.pixels[index + 1];
            const b = img.pixels[index + 2];
            const c = color(r, g, b);
            const brightness = c._getBrightness();
            if (brightness === 0) {
                spots.push(createVector(x, y));
            }
        }
    }
}

function newCircle() {
    const r = floor(random(0, spots.length));
    const {x, y} = spots[r];
    // const x = random(width);
    // const y = random(height);
    let valid = true;
    for (const circle of circles) {
        if (circle.r > dist(x, y, circle.x, circle.y)) {
            // when (x, y) is in a circle, this is invalid point of new circle.
            valid = false;
            break;
        }
    }
    return valid ? new Circle(x, y) : null;
}

function draw() {
    background(0);
    
    let count = 0;
    let attempts = 0;

    while(count < total) {
        const newC = newCircle();
        if (newC) {
            circles.push(newC);
            count++;
        }
        attempts++
        if (attempts > maxAttempts) {
            noLoop();
            console.log('Finished!');
            break;
        }
    }

    for (const circle of circles) {
        if (circle.growing) {
            if (circle.edges()) { 
                // check window edge
                circle.growing = false;
            } else {
                for (const other of circles) {
                    if (circle !== other) {
                        if (dist(circle.x, circle.y, other.x, other.y) < circle.r + other.r + 2) {
                            // two circles are too close. should not grow more.
                            circle.growing = false;
                            break;
                        }
                    }
                }
            }
        }

        circle.show();
        circle.grow();
    }


}
