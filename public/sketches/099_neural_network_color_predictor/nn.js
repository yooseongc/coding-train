
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