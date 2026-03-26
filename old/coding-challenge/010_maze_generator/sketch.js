
// https://en.wikipedia.org/wiki/Maze_generation_algorithm

/**
* Randomized depth-first search (DFS)
*  => Iterative implementation
* 
* 1. Choose the initial cell, mark it as visited and push it to the stack.
* 2. While the stack is not empty,
*   1. Pop a cell from the stack and make it a current cell.
*   2. If the current cell has any neighbors which have not been visited,
*     1. Push the current cell to the stack.
*     2. Choose one of the unvisited neighbors.
*     3. Remove the wall between the current cell and the chosen cell.
*     4. Mark the chosen cell as visited and push it to the stack.
*/

let cols, rows;
const w = 20;
const grid = [];
let current;
const stack = [];



function setup() {
    createCanvas(600, 600);
    cols = floor(width / w);
    rows = floor(height / w);
    // frameRate(5);
    
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            const cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    
    console.log("START DRAWING MAZE!");
    // STEP 1
    current = grid[index(0, 0)];
    current.visited = true;
    stack.push(current);
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}


function removeWalls(a, b) {
    var x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    var y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    
    // STEP 2
    if (stack.length > 0) {
        // STEP 2.1
        current = stack.pop();
        current.highlight();
        // STEP 2.2
        const neighbors = current.checkNeighbors();
        if (neighbors.length > 0) {
            // STEP 2.2.1
            stack.push(current);
            // STEP 2.2.2
            const r = floor(random(0, neighbors.length));
            const chosen = neighbors[r];
            // STEP 2.2.3
            removeWalls(current, chosen);
            // STEP 2.2.4
            chosen.visited = true;
            stack.push(chosen);
        }
    } else {
        console.log("FINISHED DRAWING MAZE!");
        noLoop();
    }
    
    
}
