
// https://en.wikipedia.org/wiki/Rose_(mathematics)
// create rose (rhodonea) curves using trigonometry function and polar coordinates.

/* 

    In mathematics, a rose or rhodonea curve is a sinusoid specified 
        by either the cosine or sine functions with no phase angle
        that is plotted in polor coordinates.

    Rose curves or "rhodonea" were named by the Italian mathematician who studied them, 
        Guido Grandi, between the years 1723 and 1728.

    In polar coordinates,
        r = a * cos (k * theta)
        where a is amplitude, k is angular frequency

    In Cartesian coordinates,
        x = a * cos(k * theta) * cos(theta)
        y = a * cos(k * theta) * sin(theta)
*/

let d = 10;
let n = 10;

let sliderD;
let sliderN;

function setup() {
    createCanvas(400, 400);
    sliderD = createSlider(1, 20, d, 1);
    sliderN = createSlider(1, 20, n, 1);
    sliderD.input(draw);
    sliderN.input(draw);
}

function draw() {
    d = sliderD.value();
    n = sliderN.value();
    const k = n / d;
    background(51);
    push();
    translate(width / 2, height / 2);
    beginShape();
    stroke(255);
    noFill();
    strokeWeight(1);
    for (let a = 0; a < TWO_PI * reduceDenominator(n, d); a += 0.02) {
        const r = 200 * cos(k * a);
        const x = r * cos(a);
        const y = r * sin(a);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();

    noLoop();
}

function reduceDenominator(numerator, denominator) {
    // recursive gcd
    function rec(a, b) {
        return b ? rec(b, a % b) : a;
    }
    return denominator / rec(numerator, denominator);
}