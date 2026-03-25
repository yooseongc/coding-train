
class Network {

    constructor(centerX, centerY) {
        this.center = createVector(centerX, centerY);
        this.neurons = [];
    }

    addNeuron(neuron) {
        this.neurons.push(neuron);
    }

    connect(a, b) {
        const connection = new Connection(a, b, random(1)); // random weight
        a.addConnection(connection);
    }

    show() {
        push();
        translate(this.center.x, this.center.y);
        for (const neuron of this.neurons) {
            neuron.show();
        }
        pop();
    }
}
