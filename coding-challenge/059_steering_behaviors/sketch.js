
// extracting font path points from text in p5.js with p5.Font.textToPoints(). 
// render the text as particles with steering behaviors that react to the mouse.
// http://www.red3d.com/cwr/steer/


let font;
const vehicles = [];

function preload() {
    font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
    createCanvas(600, 300);
    // showSimpleText('train');
    // showSimpleTextAsPoints('train');
    setupVehicles('train');
}

function showSimpleText(txt) {
    background(51);
    textFont(font);
    textSize(192);
    fill(255);
    noStroke();
    text(txt, 100, 200);
    noLoop();
}

function showSimpleTextAsPoints(txt) {
    background(51);
    const points = font.textToPoints(txt, 100, 200, 192, {
        sampleFactor: 0.25
    });
    console.log(points);
    for (const pt of points) {
        stroke(255);
        strokeWeight(2);
        point(pt.x, pt.y);
    }
    noLoop();
}

function setupVehicles(txt) {
    const points = font.textToPoints(txt, 100, 200, 192, {
        sampleFactor: 0.25
    });
    for (const pt of points) {
        vehicles.push(new Vehicle(pt.x, pt.y));
    }
}

function draw() {
    background(51);
    for (const v of vehicles) {
        v.behaviors(mouseX, mouseY);
        v.update();
        v.show();
    }
}
