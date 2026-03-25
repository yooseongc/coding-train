
// https://en.wikipedia.org/wiki/Lissajous_curve

/*
    A Lissajous curve, also known as Lissajous figure or Bowditch curve, is the graph of a system of parametric equations
            x = A * sin(a * t + delta), y = B * sin(b *t) 
        which describe complex harmonic motion.
    
    This family of curves was investigated by Nathaniel Bowditch in 1815, 
        and later in more detail in 1856 by Jules Antoine Lissajous.

    The appearance of the figure is highly sensitive to the ratio (a / b).
    For a ratio of 1, the figure is an ellipse, with special cases including circles (A = B, delta = PI/2) and
        lines (delta = 0).
    Another simple Lissajous figure is the parabola (b / a = 2, delta = PI/4).
    Other ratios produce more complicated curves, which are closed only if (a / b) is rational.
    The visual form of these curves is often suggestive of a three-dimensional knot, and indeed
        many kinds of knots, including those known as Lissajous knots, project to the plane as Lissajous figures.
    
    Visually, the ratio (a / b) determines the number of 'lobes' of the figure.
    For example, a ratio of 3/1 or 1/3 produces a figure with three major lobes.
    Similarly, a ratio of 5/4 produces a figure with five horizontal lobes and four vertical lobes.

    in this example, 
    R = constant,
    A = R, B = R, delta = - PI / 2,  => x = R * cos(a * t), y = R * sin(b * t),
    a, b => integer of rownum, colnum
*/

let angle = 0;
const w = 100;
let rows;
let cols;
let curves;

function make2DArray(rows, cols) {
    return new Array(rows).fill(0).map(() => new Array(cols));
}

function setup() {
    createCanvas(1000, 1000);
    cols = floor(width / w) - 1;
    rows = floor(height / w) - 1;
    curves = make2DArray(rows, cols);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            curves[j][i] = new Curve();
        }
    }
}

function draw() {
    background(51);
    const d = w * 0.8;
    const r = d / 2;

    noFill();
    stroke(255);
    for (let i = 0; i < cols; i++) {
        const cx = w + i * w + w / 2;
        const cy = w / 2;
        strokeWeight(1);
        stroke(255);
        ellipse(cx, cy, d, d);
        const x = r * cos(angle * (i + 1) - HALF_PI);
        const y = r * sin(angle * (i + 1) - HALF_PI);
        strokeWeight(8);
        stroke(255);
        point(cx + x, cy + y);
        stroke(255, 150);
        strokeWeight(1);
        line(cx + x, 0, cx + x, height);

        for (let j = 0; j < rows; j++) {
            curves[j][i].setX(cx + x);
        }
    }

    noFill();
    stroke(255);
    for (let j = 0; j < rows; j++) {
        const cx = w / 2;
        const cy = w + j * w + w / 2;
        strokeWeight(1);
        stroke(255);
        ellipse(cx, cy, d, d);
        const x = r * cos(angle * (j + 1) - HALF_PI);
        const y = r * sin(angle * (j + 1) - HALF_PI);
        strokeWeight(8);
        stroke(255);
        point(cx + x, cy + y);
        stroke(255, 150);
        strokeWeight(1);
        line(0, cy + y, width, cy + y);

        for (let i = 0; i < cols; i++) {
            curves[j][i].setY(cy + y);
        }
    }

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            curves[j][i].addPoint();
            curves[j][i].show();
        }
    }

    angle -= 0.01;

    if (angle < -TWO_PI) {
        for (let j = 0; j < rows; j++) {
            for (let i = 0; i < cols; i++) {
                curves[j][i].reset();
            }
        }
        angle = 0;
    }
}
