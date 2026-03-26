
// https://en.wikipedia.org/wiki/Langton's_ant

/*
    Langton's ant

    A two-dimensional universal Turing machine
      with a very simple set of rules
      but complex emergent behavior.
    It was invented by Chris Langton in 1986 and runs on a square lattice of
      black and white cells.
    The universality of Langton's ant was proven in 2000.
    This idea has been generated in several different ways,
      such as turmites with add more colors and more states.
    
    Rules

    Squares on a planed are colored variously either black or white.
    We arbitrarily identify one square as the "ant".
    The ant can travel in any of the four cardinal directions at each step it takes.
    The "ant" moves according to the rules below:
      * At a white square, turn 90 deg clockwise, flip the color of the square,
          move forward one unit.
      * At a black square, turn 90 deg counter-clockwise, flip the color of the square,
          move forward one unit.

    Langton's nant can also be described as a cellular automation,
      where the grid is colored black or white and the "ant" square has one of eight
      different colors assigned to encode the combination of black/white state
      and the current direction of motion of the ant.

    Modes of behavior

    Three distinct modes of behavior are apparent, when starting on a completely white grid.

    1. Simplicity. During the first few hundred moves it creates very simple patterns which are often symmetric.
    2. Chaos. After a few hundred moves, a large, irregular pattern of black and white squares appears. The ant traces a pseudo-random path until around 10,000 steps.
    3. Emergent order. Finally the ant starts building a recurrent "highway" pattern of 104 steps that repeats indefinitely.
*/

const w = 400;
const h = 400;
const grid = Array(w).fill().map(() => Array(h).fill(0));
const ant = { x: w / 2, y: h / 2, dir: 0 };

// grid state 0 - white, 1 - black
// direction: 0 - up, 1 - right, 2 - bottom, 3 - left

function setup() {
    createCanvas(w, h);
    background(255);
    strokeWeight(1);
}

const turnRight   = () => { ant.dir = (ant.dir + 1) % 4; };
const turnLeft    = () => { ant.dir = (ant.dir + 3) % 4; };
const moveForward = () => { 
    switch (ant.dir) {
        case 0: ant.y = (ant.y - 1 + h) % h; break;
        case 1: ant.x = (ant.x + 1 + w) % w; break;
        case 2: ant.y = (ant.y + 1 + h) % h; break;
        case 3: ant.x = (ant.x - 1 + w) % w; break;
    }
};

function draw() {
    for (let n = 0; n < 100; n++) {
        const state = grid[ant.x][ant.y];
        const newState = (state + 1) % 2;
        if (state === 0) {
            turnRight(); // turn 90 deg clockwise
        } else if (state === 1) {
            turnLeft();  // turn 90 deg counter-clockwise
        }
        grid[ant.x][ant.y] = newState;
        stroke(newState ? 0 : 255);
        point(ant.x, ant.y);
        moveForward();
    }
}
