
// https://en.wikipedia.org/wiki/Barnsley_fern

/*
    fern: 양치류 식물
    Barnsley : 영국 수학자 Michael Barnsley

    Barnsley's fern uses four affine transformations.
    f(x, y) = [[a b] [c d]] [x y] + [e f]

    p: probability factor
             a      b      c      d     e       f        p     portion generated
    f1       0      0      0   0.16     0       0     0.01       stem  
    f2    0.85   0.04  -0.04   0.85     0    1.60     0.85       successively smaller leaflets
    f3    0.20  -0.26   0.23   0.22     0    1.60     0.07       largest left-hand leaflet
    f4   -0.15   0.28   0.26   0.24     0    0.44     0.07       slargest right-hand leaflet

    the complete fern is within the range −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983.
*/

let x = 0;
let y = 0;

function setup() {
    createCanvas(600, 600);
    background(0);
}

function draw() {
    for (let i = 0; i < 100; i++) {
        drawPoint();
        nextPoint();
    }
}

function drawPoint() {
    stroke(255);
    strokeWeight(2);
    const px = map(x, -2.1820, 2.6558, 0, width);
    const py = map(y, 0, 9.9983, height, 0);
    point(px, py);
}

function nextPoint() {
    let nextX;
    let nextY;
    const r = random(1);

    if (r < 0.01) {
        nextX = 0;
        nextY = 0.16 * y;
    } else if (r < 0.86) {
        nextX = 0.85 * x + 0.04 * y;
        nextY = -0.04 * x + 0.85 * y + 1.6;
    } else if (r < 0.93) {
        nextX = 0.2 * x - 0.26 * y;
        nextY = 0.23 * x + 0.22 * y + 1.6;
    } else {
        nextX = -0.15 * x + 0.28 * y;
        nextY = 0.26 * x + 0.24 * y + 0.44;
    }
    x = nextX;
    y = nextY;
}
