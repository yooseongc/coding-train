
const circles = [];
const squares = [];
const triangles = [];

let canvas;
let shapeClassifier;
let resultP;
let inputImage;

async function loadTrainImages() {
    for (let i = 0; i < 500; i++) {
        const index = nf(i+1, 4, 0);
        circles[i] = loadImage(`data/circle-${index}.png`);
        squares[i] = loadImage(`data/square-${index}.png`);
        triangles[i] = loadImage(`data/triangle-${index}.png`);
    }
}

function loadModels(modelLoaded) {
    if (!shapeClassifier) {
        shapeClassifier = ml5.neuralNetwork({ task: 'imageClassification' });
    }
    shapeClassifier.load({
        model: 'model/model.json',
        metadata: 'model/model_meta.json',
        weights: 'model/model.weights.bin'
    }, modelLoaded);
}

function setup() {
    const trainBtn = createButton('Train Model').parent('#controlDiv').mousePressed(async () => {
        await loadTrainImages();
        trainModel();
    });
    createButton('Test Model').parent('#controlDiv').mousePressed(() => {
        trainBtn.attribute('disabled', true);
        canvas = createCanvas(400, 400).parent('#canvasDiv');
        canvas.style('visibility', 'visible');
        createButton('Clear').parent('#controlDiv').mousePressed(() => {
            background(255);
        });
        resultP = createP('Model Loading...').parent('#canvasDiv').style('font-size', '2rem');
        inputImage = createGraphics(64, 64);
        loadModels(() => {
            console.log('model ready!');
            resultP.html('');
            classifyImage();
            loop();
        });
    });
    noCanvas();
}

function trainModel() {
    shapeClassifier = ml5.neuralNetwork({
        inputs: [64, 64, 4],
        task: 'imageClassification',
        debug: true
    });

    for (let i = 0; i < 500; i++) {
        shapeClassifier.addData({ image: circles[i] }, { label: 'circle' });
        shapeClassifier.addData({ image: squares[i] }, { label: 'square' });
        shapeClassifier.addData({ image: triangles[i] }, { label: 'triangle' });
    }
    shapeClassifier.normalizeData();
    shapeClassifier.train({ epochs: 50 }, () => {
        console.log('finished training!');
        shapeClassifier.save();
    });
}

function classifyImage() {
    inputImage.copy(canvas, 0, 0, 400, 400, 0, 0, 64, 64);
    shapeClassifier.classify({ image: inputImage }, (err, res) => {
        if (err) {
            console.error(err); 
            return;
        }
        const label = res[0].label;
        const confidence = nf(100 * res[0].confidence, 2, 1);
        resultP.html(`label: ${label}, confidence: ${confidence}%`);
        classifyImage();
    });
}

function draw() {
    if (mouseIsPressed) {
        if (inCanvas()) {
            strokeWeight(8);
            line(mouseX, mouseY, pmouseX, pmouseY);
        }
    }
}

function inCanvas() {
    return mouseX >= 0 && mouseX <= width, pmouseX >= 0 && pmouseX <= width && 
        mouseY >= 0 && mouseY <= height && pmouseY >= 0 && pmouseY <= height;
}
