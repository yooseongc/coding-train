
function resetGame() {
    bgX = 0;
    counter = 0;
    if (bestBird) {
        bestBird.score = 0;
    }
    pipes.length = 0;
}

function nextGeneration() {
    resetGame();
    normalizeFitness(allBirds);
    activeBirds = generate(allBirds);
    allBirds = activeBirds.slice();
}

function generate(oldBirds) {
    const newBirds = [];
    for (let i = 0; i < oldBirds.length; i++) {
        newBirds[i] = poolSelection(oldBirds);
    }
    return newBirds;
}

function normalizeFitness(birds) {
    for (let i = 0; i < birds.length; i++) {
        birds[i].score = pow(birds[i].score, 2);
    }
    const sum = birds.reduce((a, c) => a + c.score, 0);
    for (let i = 0; i < birds.length; i++) {
        birds[i].fitness = birds[i].score / sum;
    }
}

function poolSelection(birds) {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r -= birds[index].fitness;
        index += 1;
    }
    index -= 1;
    const bird = birds[index];
    const child = new Bird(bird.brain);
    child.mutate();
    return child;
}
