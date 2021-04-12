
// combine part1 & part2
// TSP with brute-force method

const cities = [];
const totalCities = 6;

let recordDistance;
let bestEver;

let order = [];
let totalPermutations;
let count = 0;

function swapElements(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points, orderArray) {
    let sum = 0;
    for (let i = 0; i < orderArray.length - 1; i++) {
        const aIdx = orderArray[i];
        const bIdx = orderArray[i + 1];
        sum += dist(points[aIdx].x, points[aIdx].y, points[bIdx].x, points[bIdx].y);
    }
    return sum;
}

function factorial(n) {
    return (n === 1) ? 1 : n * factorial(n - 1);
}

function nextOrder() {
    // Step 1 : find the largest x that P[x] < P[x+1]
    let largestI = -1;
    for (let i = order.length - 2; i >= 0; i--) {
        if (order[i] < order[i+1]) {
            largestI = i;
            break;
        }
    }
    if (largestI === -1) {
        noLoop();
        console.log('finished!');
    }

    // Step 2 : find the largest y such that P[x] < P[y]
    let largestJ = -1;
    for (let j = order.length - 1; j >= 0; j--) {
        if (order[largestI] < order[j]) {
            largestJ = j;
            break;
        }
    }

    // Step 3 : swap P[x] and P[y]
    swapElements(order, largestI, largestJ);

    // Step 4 : reverse from largestI + 1 to the end 
    const endArray = order.splice(largestI + 1);
    endArray.reverse();
    order = order.concat(endArray);
}

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < totalCities; i++) {
        cities.push(createVector(random(50, width-50), random(50, height / 2 - 50)));
        order.push(i);
    }
    recordDistance = calcDistance(cities, order); // total distance of TSP lines
    bestEver = order.slice();
    
    totalPermutations = factorial(totalCities);
    console.log('total Permutations: ', totalPermutations);
}

function draw() {
    count++;
    background(0);
    
    // draw city points
    fill(255);
    for (const city of cities) {
        ellipse(city.x, city.y, 8, 8);
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
    
    // translate coords to bottom for drawing current TSP lines
    translate(0, height / 2);
    
    // draw current TSP lines
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (const n of order) {
        vertex(cities[n].x, cities[n].y);
    }
    endShape();
    
    
    const i = floor(random(cities.length));
    const j = floor(random(cities.length));
    swapElements(cities, i, j);  // it contains the case of i == j
    
    const d = calcDistance(cities, order);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = order.slice();
    }

    // how much completed?
    textSize(32);
    fill(255);
    text(nf(100 * (count / totalPermutations), 0, 2) + '% completed', 20, height / 2 - 20);

    // update order permutation to next lexicographic permutation.
    nextOrder();
}
