

let sketchRNN;
let currentStroke;
let x, y;
let nextPen = 'down';

const seedPath = [];
const seedPoints = [];
let personDrawing = false;

function preload() {
    sketchRNN = ml5.sketchRNN('catpig');
}

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.mousePressed(userDrawing);
    canvas.mouseReleased(sketchRNNDraw);
    createButton('clear').mousePressed(() => {
        x = 0;
        y = 0;
        currentStroke = null;
        seedPath.length = 0;
        seedPoints.length = 0;
        personDrawing = true;
        background(255);
    });
    background(255);
}

function userDrawing() {
    personDrawing = true;
    x = mouseX;
    y = mouseY;
}

function sketchRNNDraw() {
    personDrawing = false;
    if (seedPoints.length === 0) return;

    // RDP Line Simplication
    const rdpPoints = [];
    const total = seedPoints.length;
    const start = seedPoints[0];
    const end = seedPoints[total - 1];
    rdpPoints.push(start);
    rdp(0, total-1, seedPoints, rdpPoints);
    rdpPoints.push(end);

    // Drawing simplified path
    background(255);
    stroke(127);
    strokeWeight(4);
    beginShape();
    noFill();
    for (const v of rdpPoints) {
        vertex(v.x, v.y);
    }
    endShape();

    x = rdpPoints[rdpPoints.length - 1].x;
    y = rdpPoints[rdpPoints.length - 1].y;

    // Convert to SketchRNN states
    seedPath.length = 0;
    for (let i = 1; i < rdpPoints.length; i++) {
        const strokePath = {
            dx: rdpPoints[i].x - rdpPoints[i-1].x,
            dy: rdpPoints[i].y - rdpPoints[i-1].y,
            pen: 'down' 
        };
        seedPath.push(strokePath);
    }

    // generate 
    sketchRNN.generate(seedPath, gotStrokePath);
}

function gotStrokePath(error, strokePath) {
    if (error) {
        console.error(error);
    }
    currentStroke = strokePath;
}

function draw() {
    stroke(0);
    strokeWeight(4);

    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
        seedPoints.push(createVector(mouseX, mouseY));
    } else {
        if (currentStroke) {
            if (nextPen === 'end') {
                sketchRNN.reset();
                sketchRNNDraw();
                currentStroke = null;
                nextPen = 'down';
                return;
            }

            if (nextPen === 'down') {
                line(x, y, x + currentStroke.dx, y + currentStroke.dy);
            }
            x += currentStroke.dx;
            y += currentStroke.dy;
            nextPen = currentStroke.pen;
            currentStroke = null;
            sketchRNN.generate(gotStrokePath);
        }
    }

}
