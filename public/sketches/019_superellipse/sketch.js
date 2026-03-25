
/**
 * SuperEllipse
 * ref) https://en.wikipedia.org/wiki/Superellipse
 * the equation of the superellipse
 * 
 * abs(x / a)^n + abs(y / b)^n = 1
 *   where a, b, n > 0
 * 
 *   or
 * 
 * x(t) = abs(cos(t))^(2/n) * a * sgn(cos(t))
 * y(t) = abs(sin(t))^(2/n) * b * sgn(sin(t))
 *   where 0 <= t <= 2PI
 * 
 */

let slider;

let n = 2;
const a = 100;
const b = 100;

let osc = 0;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, 10, 2, 0.01);
}

function sgn(value) {
    return value === 0 ? value : value / abs(value);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    stroke(255);
    noFill();

    n = slider.value();
    
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += 0.1) { 
        const x = pow(abs(cos(angle)), 2 / n) * a * sgn(cos(angle));
        const y = pow(abs(sin(angle)), 2 / n) * b * sgn(sin(angle));
        vertex(x, y);
    }
    endShape(CLOSE);
}
