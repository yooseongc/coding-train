
// https://quickdraw.withgoogle.com/
// https://opensource.googleblog.com/2018/11/introducing-web-component-and-data-api-for-quick-draw.html
// https://github.com/googlecreativelab/quickdraw-dataset

const url = 'https://quickdrawfiles.appspot.com/drawing/cat?isAnimated=false&format=json&key=AIzaSyCLxdiMV5-46xuFWFbdDhVoJi7DMwe-H9Q';

let drawing;
let pathIndex;
let pathNum;
let index;
let prevx;
let prevy;

function setup() {
    frameRate(22);
    const canvas = createCanvas(300, 300);
    select('#canvasDiv').child(canvas);
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
    loadJSON(url, gotData);
}

function draw() {
    translate(20, 20);
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

