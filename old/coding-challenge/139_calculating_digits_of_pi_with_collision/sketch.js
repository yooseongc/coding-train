
// https://www.maths.tcd.ie/~lebed/Galperin.%20Playing%20pool%20with%20pi.pdf
// https://www.youtube.com/watch?v=HEfHFsfGXjs
// https://www.youtube.com/watch?v=jsYwFizhncE
// https://en.wikipedia.org/wiki/Elastic_collision
// https://en.wikipedia.org/wiki/Euler_method

/*
    Step 1: Implement a physics engine
    Step 2: Choose the number of digits, d, of PI that
        you want to compute
    Step 3: Set one mas to 100^(d-1), the other to 1
    Step 4: Count collisions

    - Conservation of Energy

    1/2*m1*u1^2 + 1/2*m2*u2^2 = 1/2*m1*u1^2 + 1/2*m2*u2^2

    - Conservation of Momentum

    m1 * u1 + m2 * u2 = m1 * v1 + m2 * v2

    - Elastic Collision in 1D

    v1 = (m1 - m2) / (m1 + m2) * u1 + 2 * m2 / (m1 + m2) * u2
    v2 = 2 * m1 / (m1 + m2) * u1 + (m2 - m1) / (m1 + m2) * u2

    - Solution

    The velocity space (x = sqrt(m1) * v1, y = sqrt(m2) v2) should draw a circle

    theta = arctan(sqrt(m1) / sqrt(m2)) ~ sqrt(m1) / sqrt(m2)
    if m1 = 1, m2 = 100^(d-1), theta = 1 / 10 ^ (d-1)

    2 * theta * N = 2 * PI
    theta * N = PI
    (1 / 100) * 314 = 3.14
    ...

*/

let blockImg;
let clack;
let block1;
let block2;

let count = 0;
let digits = 1;
let timeSteps = 10 ** (digits - 1);

let countP;

function preload() {
    blockImg = loadImage('block.png');
    clack = loadSound('clack.wav');
}

function setup() {
    createCanvas(800, 200);
    block1 = new Block(100, 20, 1, 0, 0);
    block2 = new Block(300, 100, pow(100, digits - 1), -8 / timeSteps / digits, 20);
    countP = createP(`digit: ${digits}, count: ${nf(count, digits)}`).style('font-size', '16pt');
}

function draw() {
    background(200);

    let clackSound = false;
    for (let i = 0; i < timeSteps; i++) {
        if (block1.collide(block2)) {
            const v1 = block1.bounce(block2);
            const v2 = block2.bounce(block1);
            block1.velocity = v1;
            block2.velocity = v2;
            clackSound = true;
            count++;
        }

        if (block1.hitWall()) {
            block1.reverse();
            clackSound = true;
            count++;
        }

        block1.update();
        block2.update();
    }

    if (clackSound) {
        clack.play();
    }

    block1.show();
    block2.show();

    countP.html(`digit: ${digits}, count: ${nf(count, digits)}`);

    // reset
    if (block2.x >= width) {
        digits = (digits++) % 7 + 1;
        timeSteps = 10 ** (digits - 1);
        count = 0;
        block1 = new Block(100, 20, 1, 0, 0);
        block2 = new Block(300, 100, pow(100, digits - 1), -10 / timeSteps / digits, 20);
    }
}
