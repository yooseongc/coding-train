
// Smart rokets using genetic algorithm

/*
  1. Rocket     - "physics"
  2. DNA        - control physics -> mutation, crossover
  3. Population - an array of rockets.
*/

let population;
let target;

const lifespan = 400;
const maxForce = 0.2;
let count = 0;
let generation = 0;

let lifeP;

// barrier
const rx = 100;
const ry = 150;
const rw = 200;
const rh = 10;

function setup() {
    createCanvas(400, 300);
    rocket = new Rocket();
    population = new Population();
    target = createVector(width / 2, 50);
    lifeP = createP();
}

function draw() {
    background(0);
    population.run();
    lifeP.html(count + ' ' + generation);
    if (population.isAllCompleted()) {
        noLoop();
    }
    count++;
    if (count === lifespan || population.isAllCrashed()) {
        population.evaluate();
        population.selection();
        count = 0;
        generation++;
    }

    // Renders barrier
    fill(255);
    rect(rx, ry, rw, rh);

    // Renders target
    ellipse(target.x, target.y, 16, 16);
}
