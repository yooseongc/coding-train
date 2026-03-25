
let fluid;

function setup() {
    createCanvas(1024, 1024);
    frameRate(60);
    fluid = new Fluid(0.2, 0, 0.0000001);
    console.log('setup fluid', fluid);
}

function draw() {
    stroke(51);
    strokeWeight(2);

    let cx = int((0.5 * width) / SCALE);
    let cy = int((0.5 * height) / SCALE);
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            fluid.addDensity(cx + i, cy + j, random(50, 250));
        }
    }
    for (let i = 0; i < 2; i++) {
        let angle = noise(t) * TWO_PI * 2;
        let v = p5.Vector.fromAngle(angle);
        v.mult(1);
        t += 0.01;
        fluid.addVelocity(cx, cy, v.x, v.y);
    }

    fluid.step();
    fluid.renderD();
}
