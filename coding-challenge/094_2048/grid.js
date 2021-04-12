
function blankGrid() {
    return [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
}

function copyGrid(grid) {
    return JSON.parse(JSON.stringify(grid));
}

function compareGrid(a, b) {
    a = a.flat();
    b = b.flat();
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return true;
        }
    }
    return false;
}

function addNumber() {
    const options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                options.push({ x: i, y: j });
            }
        }
    }
    if (options.length > 0) {
        const spot = random(options);
        grid[spot.x][spot.y] = random(1) > 0.1 ? 2 : 4;
        grid_new[spot.x][spot.y] = 1;
    }
}

function flipGrid(grid) {
    return grid.map(reverse);
}

function transposeGrid(grid) {
    const newGrid = blankGrid();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            newGrid[i][j] = grid[j][i];
        }
    }
    return newGrid;
}
