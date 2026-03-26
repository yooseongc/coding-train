
// https://ml5js.org/reference/api-soundClassifier/
// https://github.com/bmoren/p5.collide2D

/*
    make Chrome Dinosaur game (T-Rex run!)
    with p5.js and ml5.js
    controlling the dinosaur with a machine learning speech commands model.

    The ml5.soundClassifier() allows you to classify audio. With the right pre-trained models,
    you can detect whether a certain noise was made 
    (e.g. a clapping sound or a whistle) or a certain word was said (e.g. Up, Down, Yes, No).

    At this moment, with the ml5.soundClassifier(), you can use your own custom pre-trained speech commands
    or use the the "SpeechCommands18w" which can recognize 
    "the ten digits from "zero" to "nine", "up", "down", "left", "right", "go", "stop", "yes", "no",
    as well as the additional categories of "unknown word" and "background noise"."


*/

let unicorn;
let unicornImg;
let trainImg;
let backgroundImg;

let scrollAmount = 10;
let scrollBackground = 0;

const trains = [];
let soundClassifier;
let started = false;

function preload() {
    unicornImg = loadImage('unicorn.png');
    trainImg = loadImage('train.png');
    backgroundImg = loadImage('background.jpg');

    soundClassifier = ml5.soundClassifier('SpeechCommands18w', { probabilityThreshold: 0.95 });
    soundClassifier.classify(gotCommand);
}

function setup() { 
    createCanvas(800, 450);
    unicorn = new Unicorn();
}

// function mousePressed() {
//     trains.push(new Train());
// }

function gotCommand(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results[ 0 ].label, results[ 0 ].confidence);
    if (results[ 0 ].label === 'up') {
        unicorn.jump();
    }
}

function keyPressed() {
    if (key === ' ') {
        if (!started) {
            start();
        } else {
            unicorn.jump();
        }
    }
}

function start() {

    trains.length = 0;
    started = true;
    scrollBackground = 0;
    scrollAmount = 10;
    loop();

}

function draw() {
   
    background(0);
    image(backgroundImg, - scrollBackground, 0, backgroundImg.width, height);
    image(backgroundImg, -scrollBackground + backgroundImg.width, 0, backgroundImg.width, height);

    if (scrollBackground > width) {
        scrollBackground = 0;
    }

    if (random(1) < 0.75 && frameCount % 75 == 0) {
        trains.push(new Train());
    }

    for (let i = trains.length - 1; i >= 0; i--) {
        const train = trains[i];
        train.move();
        train.show();

        if (unicorn.hits(train)) {
            console.log('game over!');
            started = false;
            noLoop();
            textAlign(CENTER, CENTER);
            textFont(64); 
            text('GAME OVER! PRESS SPACE BAR TO RESTART.', width / 2, height / 2);
        }
        if (train.x < - train.r) {
            trains.splice(i, 1);
        }
    }

    unicorn.show();
    unicorn.move();

    scrollAmount += 0.005;
    scrollBackground += scrollAmount / 5;
}
