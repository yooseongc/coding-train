

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

function calculateFitness() {
    let currentRecord = Infinity;
    for(let i = 0; i < population.length; i++) {
        const d = calcDistance(cities, population[i]);
        if (d < recordDistance) {
            recordDistance = d;
            bestEver = population[i];
        }
        if (d < currentRecord) {
            currentRecord = d;
            currentBest = population[i];
        }
        // console.log('currentRecord', currentRecord);
        fitness[i] = 1 / (pow(d, 8) + 1);
    }
}

function normalizeFitness() {
    const sum = fitness.reduce((a, c) => a + c, 0);
    fitness = fitness.map(v => v / sum);
}

function nextGeneration() {
    const newPopulation = [];
    for (let i = 0; i < population.length; i++) {
        const orderA = pickOne(population, fitness);
        const orderB = pickOne(population, fitness);
        const order = crossOver(orderA, orderB);
        mutate(order, 0.01);
        newPopulation.push(order);
    }
    population = newPopulation;
}

function pickOne(list, prob) {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - prob[index];
        index++;
    }
    index--;
    return list[index].slice();
}

function crossOver(orderA, orderB) {
    const start = floor(random(orderA.length));
    const end   = floor(random(start + 1, orderA.length));
    const newOrder = orderA.slice(start, end);
    for (let i = 0; i < orderB.length; i++) {
        const city = orderB[i];
        if (!newOrder.includes(city)) {
            newOrder.push(city);
        }
    }
    return newOrder;
}

function mutate(order, mutationRate) {
    for (const city of cities) {
        if (random(1) < mutationRate) {
            const i = floor(random(order.length));
            const j = (i + 1) % cities.length;
            swapElements(order, i, j);
        }
    }
}