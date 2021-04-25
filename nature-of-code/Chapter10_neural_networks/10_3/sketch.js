
let network;

function setup() {

    createCanvas(640, 360);
    network = new Network(width / 2, height / 2);

    // two inputs
    const x0 = new Neuron(-200, -75, 'X0');
    const x1 = new Neuron(-200, 75, 'X1');

    // two hiddens
    const h0 = new Neuron(0, -75, 'H0');
    const h1 = new Neuron(0, 75, 'H1');

    // one output
    const y = new Neuron(200, 0, 'Y');

    // add vertices
    network.addNeuron(x0);
    network.addNeuron(x1);
    network.addNeuron(h0);
    network.addNeuron(h1);
    network.addNeuron(y);

    // add edges
    network.connect(x0, h0);
    network.connect(x0, h1);
    network.connect(x1, h0);
    network.connect(x1, h1);
    network.connect(h0, y);
    network.connect(h1, y);

}

function draw() {
    background(200);
    network.show();
    noLoop();
}
