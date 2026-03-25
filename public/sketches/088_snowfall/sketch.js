
const snow = [];
const snowCount = 400;
let gravity;
let zOff = 0;

let spriteSheet;
const textures = [];


function preload() {
    spriteSheet = loadImage('flakes32.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.3);

    // texture processing
    for (let x = 0; x < spriteSheet.width; x += 32) {
        for (let y = 0; y < spriteSheet.height; y += 32) {
            const img = spriteSheet.get(x, y, 32, 32);
            textures.push(img);
        }
    }

    for (let i = 0; i < snowCount; i++) {
        snow.push(new Snowflake(random(width), random(height), random(textures)));
    }
}

function draw() {
    background(0);

    zOff += 0.1;
    for (const flake of snow) {
        const xOff = flake.pos.x / width;
        const yOff = flake.pos.y / height;
        const wAngle = noise(xOff, yOff, zOff) * TWO_PI;
        const wind = p5.Vector.fromAngle(wAngle);
        wind.mult(0.1);
        flake.applyForce(gravity);
        flake.applyForce(wind);
        flake.update();
        flake.render();
    }
}
