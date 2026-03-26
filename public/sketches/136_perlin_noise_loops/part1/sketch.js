
let slider;
let phase = 0;
let zoff = 0;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, 10, 3, 0.1);
}

function draw() {
    background(51);
    translate(width / 2, height / 2);
    stroke(255);
    strokeWeight(2);
    noFill();

    const noiseMax = slider.value();
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += radians(5)) {
        const xoff = map(cos(angle + phase), -1, 1, 0, noiseMax);
        const yoff = map(sin(angle + phase), -1, 1, 0, noiseMax);
        const r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
        vertex(r * cos(angle), r * sin(angle));
    }
    endShape(CLOSE);

    phase += 0.003;
    zoff += 0.01;
}
