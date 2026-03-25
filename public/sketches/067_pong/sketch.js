
// https://en.wikipedia.org/wiki/Pong

let leftscore = 0;
let rightscore = 0;

let ding;
let puck;
let left;
let right;

function preload() {
    ding = loadSound('ding.mp3');
}

function setup() {
    createCanvas(600, 400);
    puck = new Puck();
    left = new Paddle(true);
    right = new Paddle(false);
}

function draw() {
    background(0);

    left.show();
    right.show();
    puck.show();

    left.update();
    right.update();
    
    puck.checkPaddleRight(right);
    puck.checkPaddleLeft(left);
    puck.update();

    puck.edges();

    fill(255);
    textSize(32);
    text(leftscore, 32, 40);
    text(rightscore, width-64, 40);
    
}

function keyReleased() {
    left.move(0);
    right.move(0);
}

function keyPressed() {
    if (key === 'w') {
        left.move(-10);
    } else if (key === 's') {
        left.move(10);
    }

    if (keyCode === UP_ARROW) {
        right.move(-10);
    } else if (keyCode === DOWN_ARROW) {
        right.move(10);
    }
}
