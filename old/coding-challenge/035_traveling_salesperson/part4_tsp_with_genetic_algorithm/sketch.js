

// combine part1 & part2
// TSP with genetic algorithm

const cities = [];
const totalCities = 15;

const popSize = 500;
let population = [];
let fitness = [];

let recordDistance = Infinity;
let bestEver;
let currentBest;

function setup() {
    createCanvas(600, 600);
    frameRate(1);
    
    const order = [];
    for (let i = 0; i < totalCities; i++) {
        cities.push(createVector(random(10, width-10), random(10, height / 2 - 10)));
        order.push(i);
    }
    
    for (let i = 0; i < popSize; i++) {
        population.push(shuffle(order));
    }
    
}

function draw() {
    background(0);

    console.log('recordDistance', recordDistance);
    // console.log('fitness', fitness);
    // console.log('currentBest', currentBest);
    // console.log('bestEver', bestEver);

    // Genetic Algorithm
    calculateFitness();
    normalizeFitness();
    nextGeneration();

    // draw city points
    noStroke();
    fill(255);
    for (const city of cities) {
        ellipse(city.x, city.y, 16, 16);
    }
    
    // draw current best TSP lines
    stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (const n of currentBest) {
        vertex(cities[n].x, cities[n].y);
    }
    endShape();
    
    // translate coords to bottom for drawing bestever TSP lines
    translate(0, height / 2);
    
    // draw city points
    noStroke();
    fill(255);
    for (const city of cities) {
        ellipse(city.x, city.y, 16, 16);
    }

    // draw bestever TSP lines
    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (const n of bestEver) {
        vertex(cities[n].x, cities[n].y);
    }
    endShape();


}
