

// https://github.com/nature-of-code/noc-examples-p5.js/blob/master/chp10_nn/NOC_10_01_Perceptron/sketch.js

class Perceptron {

    constructor(n, learningRate) {
        this.weights = new Array(n).fill(0).map(v => random(-1, 1));
        this.biasWeight = random(-1, 1);
        this.learningRate = learningRate;
    }

    feedForward(inputs) {
        if (inputs.length !== this.weights.length) {
            throw new Error('dimension not matches.');
        }
        let sum = 0;
        for (let i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];  // weight input & sum input
        }
        return this.activate(sum + this.biasWeight); // apply activation function and generate output
    }

    activate(value) {    // receive inputs
        return value > 0 ? 1 : -1;
    }

    setLearningConstant(value) {
        this.learningRate = value;
    }

    train(inputs, desired) {
        const guess = this.feedForward(inputs);
        const error = desired - guess;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += this.learningRate * error * inputs[i];
        }
        this.biasWeight += this.learningRate * error;
    }
}

class Trainer {

    constructor(x, y, answer) {
        this.input = [x, y];
        this.answer = answer;
    }

    getInput() {
        return this.input;
    }

    getAnswer() {
        return this.answer;
    }

}

let perceptron;
const trainers = new Array(2000);
let count = 0;
const f = x => 0.3 * x + 0.4;

// coordinate space
const xmin = -1;
const ymin = -1;
const xmax = 1;
const ymax = 1;

function setup() {
    createCanvas(640, 360);
    perceptron = new Perceptron(2, 0.005);
    for (let i = 0; i < trainers.length; i++) {
        const x = random(xmin, xmax);
        const y = random(ymin, ymax);
        const answer = (y < f(x)) ? -1 : 1;
        trainers[i] = new Trainer(x, y, answer);
    }
}

function draw() {
    background(51);
    strokeWeight(3);

    stroke(255, 0, 0);
    let x1 = map(xmin, xmin, xmax, 0, width);
    let x2 = map(xmax, xmin, xmax, 0, width);
    let y1 = map(f(xmin), ymin, ymax, height, 0);
    let y2 = map(f(xmax), ymin, ymax, height, 0);
    line(x1, y1, x2, y2);
    
    // Draw the line based on the current weights
    // Formula is weights[0]*x + weights[1]*y + bias = 0
    const [w1, w2] = perceptron.weights;
    const b = perceptron.biasWeight;

    x1 = map(xmin, xmin, xmax, 0, width);
    x2 = map(xmax, xmin, xmax, 0, width);
    y1 = map((-b - w1 * xmin) / w2, ymin, ymax, height, 0);
    y2 = map((-b - w1 * xmax) / w2, ymin, ymax, height, 0);
    stroke(0, 0, 255);
    line(x1, y1, x2, y2);

    const currentTrainer = trainers[ count ];
    perceptron.train(currentTrainer.getInput(), currentTrainer.getAnswer());
    count = (count + 1) % trainers.length;

    for (let i = 0; i < count; i++) {
        stroke(255);
        strokeWeight(1);
        fill(255);
        const currentInput = trainers[i].getInput();
        const guess = perceptron.feedForward(currentInput);
        if (guess > 0) {
            noFill();
        } 
        const x = map(currentInput[0], xmin, xmax, 0, width);
        const y = map(currentInput[1], ymin, ymax, height, 0);
        ellipse(x, y, 8, 8);

    }
}