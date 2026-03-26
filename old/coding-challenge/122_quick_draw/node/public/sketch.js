
let context;

let drawing;
let pathIndex;
let pathNum;
let index;
let prevx;
let prevy;

function setup() {
    frameRate(22);
    const canvas = createCanvas(255, 255);
    select('#canvasDiv').child(canvas);
    const radio = createRadio();
    select('#canvasDiv').child(radio);
    radio.option('rainbow');
    radio.option('cat');
    radio.changed(() => {
        context = radio.value();
        loadJSON('/' + context, gotData);
    })
    context = 'cat';
    radio.selected(context);
    newData();
}

function gotData(data) {
    // console.log(data);
    drawing = data.drawing;
    pathNum = drawing.length;
    pathIndex = 0;
    index = 0;
    prevx = null;
    prevy = null;
    background(220);
}

function newData() {
    loadJSON('/' + context, gotData);
}

function draw() {
    
    noFill();
    stroke(0);
    strokeWeight(5);
    if (drawing) {
        const x = drawing[pathIndex][0][index];
        const y = drawing[pathIndex][1][index];
        if (prevx && prevy) {
            line(prevx, prevy, x, y);
        }
        index++;
        if (index === drawing[pathIndex][0].length) {
            pathIndex++;
            prevx = null;
            prevy = null;
            index = 0;
            if (pathIndex === pathNum) {
                drawing = null;
                newData();
            }
        } else {
            prevx = x;
            prevy = y;
        }
        
    }
}

