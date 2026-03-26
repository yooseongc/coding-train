
//  https://beesandbombs.tumblr.com/post/149654056864/cube-wave

const mode2D = false;
let angle = 0;
const w = 24;
let magicAngle;
let maxDistance;

function setup() {

    
    if (mode2D) {
        setup2D();
    } else {
        createCanvas(400, 400, WEBGL);
        magicAngle = atan(cos(QUARTER_PI));
        maxDistance = dist(0, 0, 200, 200);
    }
}

function draw() {
    
    if (mode2D) {
        draw2D();
    } else {
        draw3D();
    }
}

function setup2D() {
    createCanvas(400, 400);
}

function draw2D() {
    background(0);
    translate(width / 2, height / 2);
    rectMode(CENTER);
    let offset = 0;
    
    for (let x = 0; x < width; x += w) {
        let a = angle + offset;
        const h = map(sin(a), -1, 1, 0, 100);
        fill(255);
        rect(x - width / 2 + w / 2, 0, w - 2, h);
        offset += 0.1;
    }
    
    angle += 0.1;
}

function draw3D() {
    background(100);
    ortho(-400, 400, 400, -400, 0, 1000);
    rotateX(QUARTER_PI)
    rotateY(magicAngle);
    for (let z = 0; z < height ; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            const d = dist(x, z, width / 2, height / 2);
            const offset = map(d, 0, maxDistance, -PI, PI);
            const a = angle + offset;
            const h = floor(map(sin(a), -1, 1, 100, 300));
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w, h, w);
            pop();
        }
    }
    angle -= 0.1;
}