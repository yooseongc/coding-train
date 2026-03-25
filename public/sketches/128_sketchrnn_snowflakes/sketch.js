
// https://magenta.tensorflow.org/sketch-rnn-demo
// https://ml5js.org/reference/api-SketchRNN/

const info = `
SketchRNN is a recurrent neural network model trained on millions of doodles collected from the Quick, Draw! game. The SketchRNN model can create new drawings (from a list of categories) based on an initial path.
This original paper and implementation of SketchRNN was made in TensorFlow and ported to Magenta.js by David Ha. The ml5.js implementation was ported by Reiichiro Nakano.
The ml5 library includes a list of supported SketchRNN models.
`

let model;
let strokePath = null;

let x, y;
let pen = 'down';

function setup() {
    createCanvas(800, 800);
    createP(info);
    x = random(- width / 2, width / 2);
    y = random(- height / 2, height / 2);
    background(51);

    model = ml5.sketchRNN('snowflake', () => {
        console.log('model ready!');
        model.reset();
        model.generate(gotSketch);
    })
}

function gotSketch(error, s) {
    if (error) {
        console.error(error);
    } else {
        strokePath = s;
    }
}

function draw() {
    translate(width / 2, height / 2);
    if (strokePath) {
        const newX = x + strokePath.dx * 0.2;
        const newY = y + strokePath.dy * 0.2;
        if (pen === 'down') {
            stroke(255);
            strokeWeight(2);
            line(x, y, newX, newY);
        }
        pen = strokePath.pen;
        strokePath = null;
        x = newX;
        y = newY;

        if (pen !== 'end') {
            model.generate(gotSketch);
        } else {
            console.log('drawing complete!');
            model.reset();
            x = random(- width / 2, width / 2);
            y = random(- height / 2, height / 2);
            model.generate(gotSketch);
        }
    }
}
