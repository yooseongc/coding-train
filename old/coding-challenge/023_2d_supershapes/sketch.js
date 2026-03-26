
/**
 * 2D SuperShapes 
 * ref) http://paulbourke.net/geometry/supershape/
 * the equation of the superellipse
 * 1 / r = sqrt(abs(1/a*cos(m/4*phi))^n2 + abs(1/b*sin(m/4*phi))^n3, n1)
 * (in polar coordinates)
 * 
 * ref) https://en.wikipedia.org/wiki/Ellipse
 * the equation of the sphere and ellipse
 * (x / a)^2 + (y / b)^2 = r^2
 *   or
 * r = a * b / sqrt((b*cos(phi))^2 + (a*sin(phi))^2) 
 * (in polar coordinates)
 * 
 */

let slider;

const n1 = 1;
const n2 = 1;
const n3 = 1;
let m = 5;
const a = 1;
const b = 1;
const radius = 100;

let osc = 0;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, 10, 5, 1);
}

function supershape(theta) {
    const t1 = pow(abs((1 / a) * cos(m / 4 * theta)), n2);
    const t2 = pow(abs((1 / b) * sin(m / 4 * theta)), n3);
    const t3 = pow(t1 + t2, 1 / n1); 
    return t3 === 0 ? 0 : (1 / t3);
}

function draw() {
    // m = map(sin(osc), -1, 1, 0, 10);
    // osc += 0.02;
    m = slider.value();

    background(51);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    const total = 500;
    const increment = TWO_PI / total;
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += increment) {
        const r = supershape(angle);
        const x = radius * r * cos(angle);
        const y = radius * r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
}
