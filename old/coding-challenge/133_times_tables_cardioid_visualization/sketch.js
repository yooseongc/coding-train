
// https://en.wikipedia.org/wiki/Cardioid
// https://ko.wikipedia.org/wiki/%EC%8B%AC%EC%9E%A5%ED%98%95

/*
    Visualize the 'mathematical heart' Cardioid using time tables calculations.

    - Cardioid

    A cardioid (from the Greek καρδία "heart") is a plane curve 
      traced by a point on the perimeter of a circle that is rolling around 
      a fixed circle of the same radius.

    
    - parametric representation

      x(phi) = 2 * a * (1 - cos(phi)) * cos(phi)
      y(phi) = 2 * a * (1 - cos(phi)) * sin(phi)
        where 0 <= phi < 2 * PI

    - polar coordinates

      r(phi) = 2 * a * (1 - cos(phi))

    - cartesian coordinates

      (x^2 + y^2)^2 + 4 * a * x * (x^2 + y^2) - 4 * a^2 * y^2 = 0
*/

const total = 200;
let r;
let factor = 0;


function setup() {
    const size = min(windowWidth, windowHeight);
    createCanvas(size, size);
    r = width / 2 - 16;
}

function getVector(index) {
    return p5.Vector.fromAngle(map(index % total, 0, total, 0, TWO_PI) + PI).mult(r);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);

    const total = 200;
    factor += 0.015;

    stroke(255, 150);
    strokeWeight(2);
    noFill();
    circle(0, 0, r * 2);

    // for (let i = 0; i < total; i++) {
    //     const { x, y } = getVector(i);
    //     fill(255);
    //     circle(x, y, 16);
    // }

    for (let i = 0; i < total; i++) {
        const a = getVector(i);
        const b = getVector(i * factor);
        line(a.x, a.y, b.x, b.y);
    }
}
