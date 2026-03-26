// Chaos Game - Part 2: Pentagonal n-flake
// 5-vertex chaos game with constraint: chosen vertex != previous vertex

const margin = 10;
const points = [];
const n = 5;
let current;
let previous;
const factor = 0.5;

function setup() {
    createCanvas(400, 400);
    const w = width - 2 * margin;
    const h = height - 2 * margin;

    for (let i = 0; i < n; i++) {
        const v = p5.Vector.fromAngle(i * TWO_PI / n);
        v.mult(w / 2);
        v.add(w / 2, h / 2);
        points.push(v);
    }

    current = createVector(random(w), random(h));
    background(51);
    stroke(255);
    strokeWeight(8);
}

function draw() {
    translate(margin, margin);
    for (let i = 0; i < 500; i++) {
        stroke(255, 50);
        strokeWeight(1);
        const next = random(points);
        if (next !== previous) {
            current.x = lerp(current.x, next.x, factor);
            current.y = lerp(current.y, next.y, factor);
            point(current.x, current.y);
        }
        previous = next;
    }
}
