
// https://www.youtube.com/watch?v=KO7W0Qq8yUE

/*
    create a “color predictor.”

    3 inputs (R, G, B)
    ?? hidden layers
    2 outputs -> probability of (White, Black)
*/

let brain;

function pickColor() {
    const r = random(255);
    const g = random(255);
    const b = random(255);
    return [r, g, b];
}

let currentColor;

function setup() {
    createCanvas(640, 360);
    
    brain = new NeuralNetwork(3, 3, 2);
    for (let i = 0; i < 10000; i++) {
        const [r, g, b] = pickColor();
        const inputs = [r / 255, g / 255, b / 255];
        const target = trainColor(r, g, b);
        brain.train(inputs, target);
    }
    console.log('train finished!');
    currentColor = pickColor();
}

function colorPredictor(r, g, b) {
    
    noLoop();

    // simple predictor
    // return (r + g+ b > 300) ? 'white' : 'black';
    
    // neural network
    const inputs = [r / 255, g / 255, b / 255];
    const outputs = brain.predict(inputs);

    return (outputs[0] > outputs[1]) ? 'white' : 'black';
}

function trainColor(r, g, b) {
    return (r + g + b > (255 * 3) / 2) ? [1, 0] : [0, 1];
}

function mousePressed() {
    // const inputs = currentColor.slice();
    // const target = (mouseX > width / 2) ? [1, 0] : [0, 1];
    // brain.train(inputs, target);

    currentColor = pickColor();
    redraw();
}

function draw() {
    background(currentColor);

    strokeWeight(4);
    stroke(0);
    line(width / 2, 0, width / 2, height);

    textSize(64);
    noStroke();
    textAlign(CENTER, CENTER);
    fill(0);
    text('black', 160, 100);
    fill(255);
    text('white', 480, 100);

    const [r, g, b] = currentColor;
    const which = colorPredictor(r, g, b);
    if (which === 'black') {
        fill(0);
        ellipse(160, 200, 60);
    } else {
        fill(255);
        ellipse(480, 200, 60);
    }

}
