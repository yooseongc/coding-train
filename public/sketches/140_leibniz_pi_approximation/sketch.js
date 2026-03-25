
// https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
// use the Leibniz formula (aka infinite series) to approximate the digits of Pi and graph the convergence.

// nth -  sum of  1 / (2n - 1) * (-1)^(n-1)

let resultP;
let iteration = 0;
let acc = 0;
const series = [];

function leibniz(n) {
    return 1 / (2 * n - 1) * ((-1) ** (n - 1));
}

function sumOfLeibniz(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += leibniz(i);
    }
    return sum;
}

function setup() {
    createCanvas(600, 400).parent('canvasDiv');
    resultP = createP(`Approximated Value: ${0}`).style('font-size', '16pt').parent('canvasDiv');
}

function draw() {
    background(51);
    acc += 4 * leibniz(++iteration);
    series.push(acc);

    // draw axis
    const yOfPI = map(PI, 2, 4, height, 0);
    line(0, yOfPI, width, yOfPI);

    // draw graph
    const spacing = width / series.length;
    stroke(255);
    noFill();
    beginShape();
    series.forEach((v, i) => vertex(i * spacing, map(v, 2, 4, height, 0)));
    endShape();
    resultP.html(`Approximated Value: ${nf(acc, 1, 8)}, iteration: ${iteration}`);

    if (iteration >= 500) {
        acc = 0;
        iteration = 0;
        series.length = 0;
    }
}
