
# Toy Neural Network

Generate a `toy neural network` with javascript.

> Reference:   
> https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh   
> https://github.com/CodingTrain/Toy-Neural-Network-JS   


## Demos using this toy neural network

 * [Coding Challenge 092. XOR problem](https://yooseongc.github.io/coding-train/coding-challenge/092_xor_problem/)
 * [Coding Challenge 099. Neural Network Color Predictor](https://yooseongc.github.io/coding-train/coding-challenge/099_neural_network_color_predictor/)
 * [Coding Challenge 100. Neuroevolution Flappy Bird](https://yooseongc.github.io/coding-train/coding-challenge/100_neuroevolution_flappy_bird/)

## Related References
 * [Nature of Code Chapter 10. Neural Networks](https://yooseongc.github.io/coding-train/nature-of-code/Chapter10_neural_networks/)
  

## Steps

 1. Introduction to Neural Networks: see [this](https://yooseongc.github.io/coding-train/nature-of-code/Chapter10_neural_networks/)
 2. Perceptron: see [this](https://yooseongc.github.io/coding-train/nature-of-code/Chapter10_neural_networks/)
 3. Multi-layer Perceptron: see [this](https://yooseongc.github.io/coding-train/nature-of-code/Chapter10_neural_networks/)
 4. [Matrix Math](./matrix_math.md)
 5. [Feed Forward Algorithm](./feedforward.md)
 6. [Backpropagation Algorithm](./backpropagation.md)

## Result

```javascript

class Matrix {

    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    }

    static fromArray(arr) {
        return new Matrix(arr.length, 1).map((e, i) => arr[i]);
    }

    toArray() {
        const arr = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]);
            }
        }
        return arr;
    }

    static subtract(a, b) {
        if (a.rows !== b.rows || a.cols !== b.cols) {
            console.error('Columns and Rows of A must match Columns and Rows of B.');
            return;
        }
        return new Matrix(a.rows, a.cols).map((_, i, j) => a.data[i][j] - b.data[i][j]);
    }

    add(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                console.error('Columns and Rows of A must match Columns and Rows of B.');
                return;
            }
            // matrix adding
            return this.map((e, i, j) => e + n.data[i][j]);
        } else {
            // scalar adding
            return this.map(e => e + n);
        }
    }

    static multiply(a, b) {
        if (a.cols !== b.rows) {
            console.error('Columns of A must match rows of B.');
            return;
        }
        return new Matrix(a.rows, b.cols)
            .map((e, i, j) => {
                let sum = 0;
                for (let k = 0; k < a.cols; k++) {
                    sum += a.data[i][k] * b.data[k][j];
                }
                return sum;
            });
    }

    multiply(n) {
        if (n instanceof Matrix) {
            if (this.rows !== n.rows || this.cols !== n.cols) {
                console.error('Columns and Rows of A must match Columns and Rows of B.');
                return;
            }
            // hadamard product
            return this.map((e, i, j) => e * n.data[i][j]);
        } else {
            // scalar product
            return this.map(e => e * n);
        }
    }

    map(func) {
        // apply a function to every element of matrix
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                const val = this.data[i][j];
                this.data[i][j] = func(val, i, j);
            }
        }
        return this;
    }

    static map(matrix, func) {
        // apply a function to every element of matrix
        return new Matrix(matrix.rows, matrix.cols)
            .map((e, i, j) => func(matrix.data[i][j], i, j));
    }

    static transpose(matrix) {
        return new Matrix(matrix.cols, matrix.rows)
            .map((_, i, j) => matrix.data[j][i]);
    }

    randomize() {
        return this.map(e => Math.random() * 2 - 1);
    }

    print() {
        console.table(this.data);
        return this;
    }

    serialize() {
        return JSON.stringify(this);
    }

    static deserialize(data) {
        if (typeof data == 'string') {
            data = JSON.parse(data);
        }
        const matrix = new Matrix(data.rows, data.cols);
        matrix.data = data.data;
        return matrix;
    }

}

if (typeof module !== 'undefined') {
    module.exports = Matrix;
}

```

```javascript

class ActivationFunction {
    
    constructor(func, dfunc) {
        this.func = func;
        this.dfunc = dfunc;
    }

}

const sigmoid = new ActivationFunction(
    x => 1 / ( 1 + Math.exp(-x) ),
    y => y * ( 1 - y )
);

const tanh = new ActivationFunction(
    x => Math.tanh(x),
    y => 1 - ( y * y )
);

class NeuralNetwork {

    constructor(inputNodes, hiddenNodes, outputNodes) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;

        this.weightsIH = new Matrix(this.hiddenNodes, this.inputNodes);
        this.weightsHO = new Matrix(this.outputNodes, this.hiddenNodes);
        this.weightsIH.randomize();
        this.weightsHO.randomize();

        this.biasH = new Matrix(this.hiddenNodes, 1);
        this.biasO = new Matrix(this.outputNodes, 1);
        this.biasH.randomize();
        this.biasO.randomize();

        this.setLearningRate();
        this.setActivationFunction();
    }

    

    setLearningRate(learningRate = 0.1) {
        this.learningRate = learningRate;
    }

    setActivationFunction(func = sigmoid) {
        this.activationFunction = func;
    }

    predict(inputArray) {
        // Generating the Hidden Outputs
        const inputs = Matrix.fromArray(inputArray);
        const hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden.add(this.biasH);

        // activation
        hidden.map(this.activationFunction.func);

        // Generating the Output's Outputs
        const outputs = Matrix.multiply(this.weightsHO, hidden);
        outputs.add(this.biasO);
        outputs.map(this.activationFunction.func);

        // Sending back to the caller!
        return outputs.toArray();
    }

    train(inputArray, targetArray) {
        // Generating the Hidden Outputs
        const inputs = Matrix.fromArray(inputArray);
        const hidden = Matrix.multiply(this.weightsIH, inputs);
        hidden.add(this.biasH);

        // activation
        hidden.map(this.activationFunction.func);

        // Generating the Output's Outputs
        const outputs = Matrix.multiply(this.weightsHO, hidden);
        outputs.add(this.biasO);
        outputs.map(this.activationFunction.func);

        // Convert array to matrix object
        const targets = Matrix.fromArray(targetArray);

        // Calculate the error
        //   ERROR = TARGETS - OUTPUTS
        const outputErrors = Matrix.subtract(targets, outputs);

        // Calculate gradient
        //   gradient = outputs * ( 1 - outputs )
        const gradients = Matrix.map(outputs, this.activationFunction.dfunc);
        gradients.multiply(outputErrors);
        gradients.multiply(this.learningRate);

        // Calculate deltas
        const hiddenT = Matrix.transpose(hidden);
        const weightHODeltas = Matrix.multiply(gradients, hiddenT);

        // Adjust the weights by deltas
        this.weightsHO.add(weightHODeltas);
        // Adjust the bias by its deltas (which is just the gradients)
        this.biasO.add(gradients);

        // Calculate the hidden layer errors
        const weightHOT = Matrix.transpose(this.weightsHO);
        const hiddenErrors = Matrix.multiply(weightHOT, outputErrors);
        
        // Calculate hidden gradient
        const hiddenGradient = Matrix.map(hidden, this.activationFunction.dfunc);
        hiddenGradient.multiply(hiddenErrors);
        hiddenGradient.multiply(this.learningRate);

        // Calculate input->hidden deltas
        const inputsT = Matrix.transpose(inputs);
        const weightIHDeltas = Matrix.multiply(hiddenGradient, inputsT);

        // Adjust the weights by deltas
        this.weightsIH.add(weightIHDeltas);
        // Adjust the bias by its delta (which is just the gradients)
        this.biasH.add(hiddenGradient);
    }

    serialize() {
        return JSON.stringify(this);
    }

    static deserialize(data) {
        if (typeof data == 'string') {
            data = JSON.parse(data);
        }

        const nn = new NeuralNetwork(data.inputNodes, data.hiddenNodes, data.outputNodes);
        nn.weightsIH = Matrix.deserialize(data.weightsIH);
        nn.weightsHO = Matrix.deserialize(data.weightsHO);
        nn.biasH     = Matrix.deserialize(data.biasH);
        nn.biasO     = Matrix.deserialize(data.biasO);

        return nn;
    }

}
```