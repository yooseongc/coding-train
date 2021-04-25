
class Network {

    constructor(centerX, centerY) {
        this.center = createVector(centerX, centerY);
        this.neurons = [];
        this.connections = [];
    }

    addNeuron(neuron) {
        this.neurons.push(neuron);
    }

    connect(a, b) {
        const connection = new Connection(a, b, random(1)); // random weight
        a.addConnection(connection);
        this.connections.push(connection);
    }

    feedForward(inputs) {
        for (let i = 0; i < inputs.length; i++) {
            const neuron = this.neurons[i];
            neuron.feedForward(inputs[i]);
        }
    }

    update() {
        for (const connection of this.connections) {
            connection.update();
        }
    }

    show() {
        push();
        translate(this.center.x, this.center.y);
        for (const neuron of this.neurons) {
            neuron.show();
        }

        for (const connection of this.connections) {
            connection.show();
        }
        pop();
    }
}
