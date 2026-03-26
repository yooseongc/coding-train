// Chaos Game - Part 1: Sierpinski Triangle
// https://en.wikipedia.org/wiki/Chaos_game
// https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle

let ax, ay, bx, by, cx, cy;
let x, y;
const factor = 0.5;
const margin = 10;

function setup() {
    createCanvas(400, 400);

    const w = width - 2 * margin;
    const h = height - 2 * margin;
    translate(margin, margin);

    ax = w / 2;
    ay = 0;
    bx = 0;
    by = h;
    cx = w;
    cy = h;

    // barycentric method to check the point is in the triangle
    let inTriangle = false;
    while (!inTriangle) {
        x = random(w);
        y = random(h);
        const s = ay * cx - ax * cy + (cy - ay) * x + (ax - cx) * y;
        const t = ax * by - ay * bx + (ay - by) * x + (bx - ax) * y;
        if ((s < 0) !== (t < 0)) {
            inTriangle = false;
            continue;
        }
        const A = -by * cx + ay * (cx - bx) + ax * (by - cy) + bx * cy;
        inTriangle = A < 0 ? s <= 0 && s + t >= A : s >= 0 && s + t <= A;
    }

    background(51);
    stroke(255);
    strokeWeight(8);
}

function draw() {
    translate(margin, margin);
    for (let i = 0; i < 100; i++) {
        strokeWeight(1);
        const r = floor(random(3));
        if (r === 0) {
            stroke(255, 0, 255);
            x = lerp(x, ax, factor);
            y = lerp(y, ay, factor);
        } else if (r === 1) {
            stroke(0, 255, 255);
            x = lerp(x, bx, factor);
            y = lerp(y, by, factor);
        } else if (r === 2) {
            stroke(255, 255, 0);
            x = lerp(x, cx, factor);
            y = lerp(y, cy, factor);
        }
        point(x, y);
    }
}
