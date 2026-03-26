// Part 4: Self-Avoiding Walk with bezier curves

function make2DArray(cols, rows) {
    return Array(cols).fill(0).map(col => Array(rows));
}

let grid;
const spacing = 20;
let cols, rows;
let path;
let spot;

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
    path = [];

    background(51);
    grid = make2DArray(cols, rows);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j, spacing);
        }
    }
    spot = grid[0][0];
    path.push(spot);
    spot.visited = true;

    noLoop();
}

function draw() {
    background(51);
    translate(spacing * 0.5, spacing * 0.5);

    spot = spot.nextSpot(grid);
    if (!spot) {
        const stuck = path.pop();
        stuck.clear();
        spot = path[path.length - 1];
    } else {
        path.push(spot);
        spot.visited = true;
    }

    if (path.length === cols * rows) {
        console.log('Solved!');
        noLoop();
    }

    stroke(255);
    strokeWeight(spacing * 0.25);
    noFill();
    beginShape();
    vertex(path[0].x, path[0].y);
    for (let i = 1; i < path.length - 2; i += 3) {
        const control1 = path[i + 0];
        const control2 = path[i + 1];
        const anchor   = path[i + 2];
        bezierVertex(
            control1.x,
            control1.y,
            control2.x,
            control2.y,
            anchor.x,
            anchor.y
        );
    }
    vertex(path[path.length - 1].x, path[path.length - 1].y);
    endShape();
    strokeWeight(spacing * 0.5);
    point(spot.x, spot.y);
}
