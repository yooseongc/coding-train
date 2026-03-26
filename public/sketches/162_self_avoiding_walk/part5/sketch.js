// Part 5: Recursive backtracking (Hamiltonian path)

const spacing = 80;
let cols, rows;

function selfAvoidingWalk(desiredLength, rows, cols, start) {
    const visited = Array(cols).fill(0).map(col => Array(rows).fill(false));
    const path = [];
    if (selfAvoidingWalkHelper(path, visited, desiredLength, start.x, start.y)) {
        console.log('found self avoiding walk!');
        return path;
    } else {
        console.log('no self avoiding walk found.');
        return [];
    }
}

function selfAvoidingWalkHelper(path, visited, desiredLength, i, j) {
    // base cases
    if (path.length >= desiredLength) {
        return true;
    }
    if (i < 0 || i >= cols || j < 0 || j >= rows || visited[i][j]) {
        return false;
    }

    // add to path
    visited[i][j] = true;
    path.push(createVector(i, j));

    // recursively try directions
    if (selfAvoidingWalkHelper(path, visited, desiredLength, i + 1, j)) {
        return true;
    }
    if (selfAvoidingWalkHelper(path, visited, desiredLength, i - 1, j)) {
        return true;
    }
    if (selfAvoidingWalkHelper(path, visited, desiredLength, i, j + 1)) {
        return true;
    }
    if (selfAvoidingWalkHelper(path, visited, desiredLength, i, j - 1)) {
        return true;
    }

    // If we reach this point there's no path that worked so we have to remove the spot from the path
    visited[i][j] = false;
    path.pop();

    return false;
}

function setup() {
    removeElements();
    createCanvas(400, 400);
    const resetButton = createButton('RESET');
    resetButton.mouseClicked(() => {
        setup();
    });

    cols = floor(width / spacing);
    rows = floor(height / spacing);

    const path = selfAvoidingWalk(
        rows * cols,
        rows,
        cols,
        createVector(floor(cols / 2), floor(rows / 2))
    );
    background(51);
    translate(spacing * 0.5, spacing * 0.5);
    noFill();
    stroke(255);
    strokeWeight(3);
    beginShape();
    for (const loc of path) {
        vertex(loc.x * spacing, loc.y * spacing);
    }
    endShape();
}
