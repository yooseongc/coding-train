// Part 6: Simple random walk (no self-avoiding)

let x;
let y;
const spacing = 5;
let cols, rows;

function setup() {
    removeElements();
    createCanvas(400, 400);
    const startButton = createButton('START');
    const resetButton = createButton('RESET');
    startButton.mouseClicked(() => {
        loop();
    });
    resetButton.mouseClicked(() => {
        setup();
    });

    cols = floor(width / spacing);
    rows = floor(height / spacing);

    x = cols / 2;
    y = rows / 2;
    background(51);

    noLoop();
}

function draw() {
    stroke(255, 100);
    strokeWeight(spacing * 0.5);
    point(x * spacing, y * spacing);

    const r = floor(random(4));
    switch (r) {
        case 0: x += 1; break;
        case 1: x -= 1; break;
        case 2: y += 1; break;
        case 3: y -= 1; break;
    }
}
