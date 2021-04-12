
// https://en.wikipedia.org/wiki/2048_(video_game)
// https://play2048.co/


let grid;
let grid_new;
let score = 0;

function setup() {
    createCanvas(400, 400);
    noLoop();
    grid = blankGrid();
    grid_new = blankGrid();
    addNumber();
    addNumber();
    updateCanvas();
}

function drawGrid() {
    const w = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            noFill();
            strokeWeight(2);
            const value = grid[i][j];
            const s = value.toString();
            if (grid_new[i][j] === 1) {
                stroke(200, 0, 200);
                strokeWeight(8);
                grid_new[i][j] = 0;
            } else {
                strokeWeight(4);
                stroke(0);
            }
            if (value !== 0) {
                fill(colorsSizes[s].color);
            } else {
                noFill();
            }
            rect(i * w, j * w, w, w, 30);
            if (value !== 0) {
                textAlign(CENTER, CENTER);
                fill(0);
                noStroke();
                textSize(colorsSizes[s].size);
                text(value, i * w + w / 2, j * w + w / 2);
            }
        }
    }
}


function updateCanvas() {
    background(255);
    drawGrid();
    select('#score').html(`SCORE: ${score}`);
}


function keyPressed() {
    let flipped = false;
    let rotated = false;
    let played = true;
    if (keyCode === UP_ARROW) {
        grid = flipGrid(grid);
        flipped = true;
    } else if (keyCode === DOWN_ARROW) {
        // do nothing (operate function would handle this case automatically.)
    } else if (keyCode === RIGHT_ARROW) {
        grid = transposeGrid(grid);
        rotated = true;
    } else if (keyCode === LEFT_ARROW) {
        grid = transposeGrid(grid);
        grid = flipGrid(grid);
        rotated = true;
        flipped = true;
    } else {
        played = false;
    }

    if (played) {
        const past = copyGrid(grid);
        grid = grid.map(operate);
    
        const changed = compareGrid(past, grid);
        if (flipped) {
            grid = flipGrid(grid);
        }
        if (rotated) {
            grid = transposeGrid(grid);
        }
        if (changed) {
            addNumber();
        }
        updateCanvas();
    }
    
    if (isGameOver(grid)) {
        console.log('GAME OVER');
    }
    if (isGameWon(grid)) {
        console.log('GAME WON');
    }
    
}