
class Population {

    constructor() {
        this.rockets = [];    // array of rockets
        this.popSize = 25;    // amount of rockets
        this.matingPool = []; // amount parent rocket partners
        for (let i = 0; i < this.popSize; i++) {
            this.rockets.push(new Rocket());
        }
    }

    evaluate() {
        
        let maxFitness = 0;

        // Iterate through all rockets and calculate their fitness
        for (const rocket of this.rockets) {
            rocket.calcFitness();
            if (rocket.fitness > maxFitness) {
                maxFitness = rocket.fitness;
            }
        }
        
        // Normalises fitnesses
        for (const rocket of this.rockets) {
            rocket.fitness /= maxFitness;
        }

        // Initialize mating pool
        this.matingPool = [];

        // Take rokets fitness make in to scale of 1 to 100
        // A roket with high fitness will highly likely be in the mating pool.
        for (const rocket of this.rockets) {
            const n = rocket.fitness * 100;
            for (let i = 0; i < n; i++) {
                this.matingPool.push(rocket);
            }
        } 
        // console.log(this.matingPool);
        console.log('# of matingPool', this.matingPool.length);
        console.log('maxFit: ', maxFitness)

    }

    selection() {
        // Simulate Natural Selection and Mutation.
        // Chooses two parents from mating pool,
        //  then crossover(decide randomly which parent's gene to inherit)
        const newRockets = [];
        for (let i = 0; i < this.rockets.length; i++) {
            const parentA = random(this.matingPool);
            const parentB = random(this.matingPool);
            if (parentA.completed) {
                const rocket = new Rocket(parentA.dna);
                rocket.fitness = parentA.fitness;
                newRockets.push(rocket);
            } else if (parentB.completed) {
                const rocket = new Rocket(parentB.dna);
                rocket.fitness = parentB.fitness;
                newRockets.push(rocket);
            } else {
                const child = parentA.dna.crossover(parentB.dna);
                child.mutation();
                const rocket = new Rocket(child);
                rocket.fitness = parentA.fitness * parentB.fitness;
                newRockets.push(rocket);
            }
        }
        this.rockets = newRockets;
        
    }

    isAllCrashed() {
        for (const rocket of this.rockets) {
            if (!rocket.crashed) {
                return false;
            }
        }
        return true;
    }

    isAllCompleted() {
        for (const rocket of this.rockets) {
            if (!rocket.completed) {
                return false;
            }
        }
        return true;
    }

    run() {
        for (const rocket of this.rockets) {
            rocket.update();
            rocket.show();
        }
    }

}