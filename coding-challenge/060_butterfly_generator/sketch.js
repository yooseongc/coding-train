
// https://twitter.com/mothgenerator
// use trigonometry and perlin noise to procedurally generate butterfly wing

let yoff = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);

    stroke(255);
    fill(255, 50);
    strokeWeight(1);

    const da = PI / 200;
    const dx = 0.05;

    let xoff = 0;
    beginShape();
    for (let a = 0; a <= TWO_PI; a += da) {
        const n = noise(xoff, yoff);
        const r = sin(2 * a) * map(n, 0, 1, 50, 300);
        const x = r * cos(a);
        const y = r * sin(a);
        vertex(x, y);
        xoff = (a < PI) ? xoff + dx : xoff - dx;
    }
    endShape();

    yoff += 0.01;
}
