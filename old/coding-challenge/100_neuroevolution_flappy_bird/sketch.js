
const totalPopulation = 500;

let bestBird;
let activeBirds = [];
let allBirds = [];

const pipes = [];

let counter = 0;  // A frame counter to determine when to add a pipe

let speedSlider;
let speedSpan;
let hightScoreSpan;
let allTimeHighScoreSpan;

let highScore = 0;

let runBest = false;
let runBestButton;

let birdSprite;
let pipeBodySprite;
let pipePeakSprite;
let bgImg;

let bgX = 0;

function preload() {
    pipeBodySprite = loadImage('images/pipe_marshmallow_fix.png');
    pipePeakSprite = loadImage('images/pipe_marshmallow_fix.png');
    birdSprite = loadImage('images/train.png');
    bgImg = loadImage('images/background.png');
}


function setup() {
    const canvas = createCanvas(800, 600);
    canvas.parent('#canvasContainer');

    speedSlider = select('#speedSlider');
    speedSpan = select('#speed');
    hightScoreSpan = select('#highScore');
    allTimeHighScoreSpan = select('#allTimeHighScore');
    runBestButton = select('#best');
    runBestButton.mousePressed(() => {
        runBest = !runBest;
        if (runBest) {
            resetGame();
            runBestButton.html('continue training');
        } else {
            nextGeneration();
            runBestButton.html('run best');
        }
    });

    for (let i = 0; i < totalPopulation; i++) {
        const bird = new Bird();
        activeBirds[i] = bird;
        allBirds[i] = bird;
    }
}

function draw() {
    background(0);
    image(bgImg, bgX, 0, bgImg.width, height);
    
    
    let cycles = speedSlider.value();
    speedSpan.html(cycles);

    for (let n = 0; n < cycles; n++) {
        bgX -= 6 * 0.8;
        if (bgX <= -bgImg.width + width) {
            image(bgImg, bgX + bgImg.width, 0, bgImg.width, height);
            if (bgX <= -bgImg.width) {
                bgX = 0;
            }
        }
        for (let i = pipes.length - 1; i >= 0; i--) {
            pipes[i].update();
            if (pipes[i].offscreen()) {
                pipes.splice(i, 1);
            }
        }
        if (runBest) {
            bestBird.think(pipes);
            bestBird.update();

            // end condition 1 : hit pipe
            for (let j = 0; j < pipes.length; j++) {
                if (pipes[j].hits(bestBird)) {
                    resetGame();
                    break;
                }
            }
            // end condition 2 : hit bottom or top
            if (bestBird.bottomTop()) {
                resetGame();
            }

        } else {
            for (let i = activeBirds.length - 1; i >= 0; i--) {
                const bird = activeBirds[i];
                bird.think(pipes);
                bird.update();

                // end condition 1 : hit pipe
                for (let j = 0; j < pipes.length; j++) {
                    if (pipes[j].hits(bird)) {
                        activeBirds.splice(i, 1);
                        break;
                    }
                }
                // end condition 2 : hit bottom or top
                if (bird.bottomTop()) {
                    activeBirds.splice(i, 1);
                }
            }
        }

        if (counter % 75 === 0) {
            pipes.push(new Pipe());
        }
        counter++;
    }

    let tempHighScore = 0;
    if (!runBest) { // training
        // which is the best bird?
        let tempBestBird = null;
        for (let i = 0; i < activeBirds.length; i++) {
            const s = activeBirds[i].score;
            if (s > tempHighScore) {
                tempHighScore = s;
                tempBestBird = activeBirds[i];
            }
        }
        
        if (tempHighScore > highScore) {
            highScore = tempHighScore;
            bestBird = tempBestBird;
        }

    } else { // one bird simulation
        tempHighScore = bestBird.score;
        if (tempHighScore > highScore) {
            highScore = tempHighScore;
        }
    }

    // update DOM
    hightScoreSpan.html(tempHighScore);
    allTimeHighScoreSpan.html(highScore);

    // draw everything
    for (const pipe of pipes) {
        pipe.show();
    }
    if (runBest) {
        bestBird.show();
    } else {
        for (const bird of activeBirds) {
            bird.show();
        }
        if (activeBirds.length === 0) {
            nextGeneration();
        }
    }

}
