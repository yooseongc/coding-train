
class Perceptron {

    constructor(n, learningRate) {
        this.weights = new Array(n).fill(0).map(v => random(-1, 1));
        this.biasWeight = random(-1, 1);
        this.learningRate = learningRate;
    }

    feedForward(forces) {
        if (forces.length !== this.weights.length) {
            throw new Error('dimension not matches.');
        }
        const sum = createVector(0, 0);
        for (let i = 0; i < forces.length; i++) {
            sum.add(forces[i].copy().mult(this.weights[i]));
        }
        return sum.add(this.biasWeight, this.biasWeight);
    }

    train(forces, error) {
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[ i ] += this.learningRate * error.x * forces[ i ].x;
            this.weights[ i ] += this.learningRate * error.y * forces[ i ].y;
        }
        this.biasWeight += this.learningRate * error.x;
        this.biasWeight += this.learningRate * error.y;
    }
}
