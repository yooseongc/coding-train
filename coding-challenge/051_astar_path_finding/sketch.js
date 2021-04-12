
// https://en.wikipedia.org/wiki/A*_search_algorithm#Pseudocode
/**
 * A* search algorithm - best-first search
 * 
 * f(n) = g(n) + h(n)
 *   where f(n) : cost function to minimize
 *         g(n) : cost function of the path from the start node
 *         h(n) : heuristic function that estimates the cost of the cheapest path from n to goal
 * 
 *  using openSet, closedSet
 *    openSet   : a set of spots which have to check
 *    closedSet : a set of spots which had checked already
 */

const openSet = [];
const closedSet = [];
const path = []; 
const grid = [];
let start;
let end;

const cols = 50;
const rows = 50;
let w, h;


function heuristic(curr, goal) {
    return dist(curr.i, curr.j, goal.i, goal.j);
}

function setup() {
    createCanvas(400, 400);
    console.log('Start A* Search Algorithm.');

    // Grid Cell size
    w = width / cols;
    h = height / rows;

    // Make 2D Array
    for (let i = 0; i < cols; i++) {
        grid[i] = new Array(rows);
        for (let j = 0; j < cols; j++) {
            grid[i][j] = new Spot(i, j);
        }
    }

    // add neighbors
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].addNeighbors(grid);
        }
    }

    // decide start and end
    start = grid[0][0];
    end = grid[cols - 1][rows - 1];
    start.wall = false;
    end.wall = false;

    // start algorithm : starts with beginning only
    openSet.push(start);
}

function findLowestFInd(set) {
    let winner = 0;
    for (let i = 0; i < set.length; i++) {
        if (set[i].f < set[winner].f) {
            winner = i;
        }
    }
    return winner;
}

function draw() {

    // DO
    let curr;
    if (openSet.length > 0) {
        // current node : the node in openSet having the lowest f value
        const currIdx = findLowestFInd(openSet);
        curr = openSet[currIdx];
        if (curr == end) {
            console.log('DONE!');
            noLoop();
        }

        // remove current from openSet
        openSet.splice(currIdx, 1);
        closedSet.push(curr);

        // for each neighbor of current node
        for (const neighbor of curr.neighbors) {
            if (!closedSet.includes(neighbor) && !neighbor.wall) {
                const tempG = curr.g + dist(neighbor.i, neighbor.j, curr.i, curr.j);
                let isNewPath = false;
                if (openSet.includes(neighbor)) {
                    if (tempG < neighbor.g) {
                        neighbor.g = tempG;
                        isNewPath = true;
                    }
                } else {
                    neighbor.g = tempG;
                    isNewPath = true;
                    openSet.push(neighbor);
                }

                if (isNewPath) { // path to neighbor is better than any prev one.
                    neighbor.h = heuristic(neighbor, end);
                    neighbor.f = neighbor.g + neighbor.h;
                    neighbor.prev = curr;
                }
            }
            
        }

    } else {
        console.log('no solution.');
        noLoop();
        return;
    }

    // DRAW
    background(255);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].show();
        }
    }
    for (const closed of closedSet) {
        closed.show(color(255, 0, 0, 50)); // red
    }
    for (const open of openSet) {
        open.show(color(0, 255, 0, 50));   // green
    }

    // DRAW PATH
    path.length = 0;
    let temp = curr;
    path.push(temp);
    while (temp.prev) {
        path.push(temp.prev);
        temp = temp.prev;
    }

    noFill();
    stroke(255, 0, 200);
    strokeWeight(w / 2);
    beginShape();
    for (const p of path) {
        vertex(p.i * w + w / 2, p.j * h + h / 2);
    }
    endShape();
}
