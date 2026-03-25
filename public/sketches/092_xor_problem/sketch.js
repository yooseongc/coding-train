
// https://github.com/CodingTrain/Toy-Neural-Network-JS
// use Toy Neural Networks library to solve the XOR problem
// // https://youtu.be/188B6k_F9jU


/*
    XOR : eXclusive OR

    T xor T => F
    T xor F => T
    F xor T => T
    F xor F => F

    선형 모델 (혹은 hidden layer가 없는 NN)은 이를 풀 수 없음.
*/

let nn;
let lr_slider;

const training_data = [
    {
        inputs: [0, 0],
        outputs: [0]
    },
    {
        inputs: [0, 1],
        outputs: [1]
    },
    {
        inputs: [1, 0],
        outputs: [1]
    },
    {
        inputs: [1, 1],
        outputs: [0]
    }
];

function setup() {
    createCanvas(400, 400);
    nn = new NeuralNetwork(2, 4, 1);
    lr_slider = createSlider(0.01, 0.5, 0.1, 0.01);
}

function draw() {
    background(0);

    for (let i = 0; i < 100; i++) {
        const data = random(training_data);
        nn.train(data.inputs, data.outputs);
    }

    nn.setLearningRate(lr_slider.value());
    
    const resolution = 10;
    const cols = width / resolution;
    const rows = height / resolution;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x1 = i / cols;
            const x2 = j / rows;
            const inputs = [x1, x2];
            const y = nn.predict(inputs);
            noStroke();
            fill(y * 255);
            rect(i * resolution, j * resolution, resolution, resolution);
        }
    }
}
