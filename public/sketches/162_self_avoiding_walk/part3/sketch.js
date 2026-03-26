// Part 3: 3D Self-Avoiding Walk with WEBGL

let grid;
const spacing = 50;
let cols, rows, depth;
let path;
let spot;

let lerpX = 0;
let lerpY = 0;
let lerpZ = 0;

function setup() {
    removeElements();
    createCanvas(400, 400, WEBGL);
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
    depth = cols;
    path = [];

    background(0);
    grid = make3DArray(cols, rows, depth);

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            for (let k = 0; k < depth; k++) {
                grid[i][j][k] = new Spot3D(i, j, k, spacing);
            }
        }
    }
    const cx = floor(cols / 2);
    spot = grid[cx][cx][cx];
    path.push(spot);
    spot.visited = true;

    lerpX = 0;
    lerpY = 0;
    lerpZ = 0;

    noLoop();
}

function draw() {
    background(0);
    const center = createVector(0, 0, 0);
    const minXYZ = createVector(Infinity, Infinity, Infinity);
    const maxXYZ = createVector(0, 0, 0);

    for (const v of path) {
        minXYZ.x = min(v.x, minXYZ.x);
        minXYZ.y = min(v.y, minXYZ.y);
        minXYZ.z = min(v.z, minXYZ.z);
        maxXYZ.x = max(v.x, maxXYZ.x);
        maxXYZ.y = max(v.y, maxXYZ.y);
        maxXYZ.z = max(v.z, maxXYZ.z);
    }
    center.x = (maxXYZ.x - minXYZ.x) * 0.5 + minXYZ.x;
    center.y = (maxXYZ.y - minXYZ.y) * 0.5 + minXYZ.y;
    center.z = (maxXYZ.z - minXYZ.z) * 0.5 + minXYZ.z;

    const amt = 0.05;
    lerpX = lerp(lerpX, center.x, amt);
    lerpY = lerp(lerpY, center.y, amt);
    lerpZ = lerp(lerpZ, center.z, amt);

    rotateY(frameCount * 0.002);
    translate(-lerpX, -lerpY, -lerpZ);

    spot = spot.nextSpot(grid);
    if (!spot) {
        const stuck = path.pop();
        stuck.clear();
        spot = path[path.length - 1];
    } else {
        path.push(spot);
        spot.visited = true;
    }

    if (path.length === cols * rows * depth) {
        console.log('Solved!');
        noLoop();
    }

    stroke(255);
    strokeWeight(spacing * 0.1);
    noFill();
    colorMode(HSB);

    beginShape();
    for (let i = 0; i < path.length - 1; i++) {
        const spot1 = path[i];
        const spot2 = path[i + 1];
        stroke((i + frameCount) % 360, 100, 100);
        line(spot1.x, spot1.y, spot1.z, spot2.x, spot2.y, spot2.z);
    }
    endShape();
    strokeWeight(spacing * 0.5);
    point(spot.x, spot.y, spot.z);
}
