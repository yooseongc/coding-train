
function slide(row) {
    const arr = row.filter(v => v); // remove 0
    return Array(4 - arr.length).fill(0).concat(arr);
}

function combine(row) {
    for (let i = 3; i >= 1; i--) {
        const a = row[i];
        const b = row[i-1];
        if (a === b) {
            row[i] = a + b;
            score += row[i];
            row[i - 1] = 0;
        }
    }
    return row;
}

function operate(row) {
    return [slide, combine, slide].reduceRight((v, fn) => fn(v), row);
}

function isGameOver(grid) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] == 0) {
                return false;
            }
            if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
                return false;
            }
            if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }
    return true;
}

function isGameWon(grid) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] == 2048) {
                return true;
            }
        }
    }
    return false;
}

