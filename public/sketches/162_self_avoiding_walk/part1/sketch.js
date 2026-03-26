// https://en.wikipedia.org/wiki/Self-avoiding_walk
// Part 1: Basic Self-Avoiding Walk with random selection

function make2DArray(cols, rows) {
    return Array(cols).fill(0).map(col => Array(rows));
}

let x;
let y;
let grid;
const spacing = 10;
let cols, rows;

const allOptions = [
    { dx:  1, dy:  0 },
    { dx: -1, dy:  0 },
    { dx:  0, dy:  1 },
    { dx:  0, dy: -1 }
];

function isValid(i, j) {
    return (i < 0 || i >= cols || j < 0 || j >= rows) ? false : !grid[i][j];
}

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
    grid = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = false;
        }
    }
    grid[x][y] = true;

    noLoop();
}

function draw() {
    stroke(255);
    strokeWeight(1);
    point(x * spacing, y * spacing);

    const options = [];
    for (const option of allOptions) {
        const newX = x + option.dx;
        const newY = y + option.dy;
        if (isValid(newX, newY)) {
            options.push(option);
        }
    }

    if (options.length > 0) {
        const step = random(options);
        beginShape();
        vertex(x * spacing, y * spacing);
        x += step.dx;
        y += step.dy;
        vertex(x * spacing, y * spacing);
        endShape();
        grid[x][y] = true;
    } else {
        console.log('I\'m stuck!');
        noLoop();
    }
}
