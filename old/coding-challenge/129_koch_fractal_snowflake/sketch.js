
// https://en.wikipedia.org/wiki/Koch_snowflake

/*
    The Koch snowflake is a fractal curve and one of the earliest fractals
        to have been described.
    It is based on the Koch curve, which appeared in a 1904 paper
        titled 'On a Continuous Curve Without Tangents, Constructible from Elementary Geometry'
        by the Swedish mathematician Helge von Koch.

    The Koch snowflake can be built up iteratively, in a sequence of stages.
    The first stage is an equilateral triangle,
        and each successive stage is formed by adding outward bends to each side of the previous stage,
        making smaller equilateral triangles.
    The areas enclosed by the successive stages in the construction of the snowflake converge to
        8/5 times the area of the original triangle,
        while the perimeters of the successive stages increase without bound.
    Consequently, the snowflake encloses a finite area, but has an infinite perimeter.
*/

let step = 0;
let segments = [];

function setup() {
    createCanvas(600, 600);
    const a = createVector(50, 150);
    const b = createVector(550, 150);
    const s1 = new Segment(a, b);
    const len = p5.Vector.dist(a, b);
    const h = len * sqrt(3) / 2;
    const c = createVector(300, 150 + h);
    const s2 = new Segment(b, c);
    const s3 = new Segment(c, a);
    segments.push(s1, s2, s3);
}

function mousePressed() {
    if (step >= 6) return;
    segments = segments.map(c => c.generate()).reduce((a, c) => a.concat(c), []);
    step++;
}

function draw() {
    background(51);
    stroke(255);
    for (const s of segments) {
        s.show();
    }
}
