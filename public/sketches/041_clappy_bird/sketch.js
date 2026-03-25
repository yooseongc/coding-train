

/*  Flappy Bird using clap interface! */

let clapping = false;
let bird;
const pipes = [];

let mic;
let sliderTop;
let sliderBottom;


function setup() {
    createCanvas(400, 600);
    const btn = createButton('MIC');
    mic = new p5.AudioIn();
    btn.mouseClicked(() => {
        mic.start();
    });
    
    
    sliderTop    = createSlider(0, 1, 0.02, 0.01);
    sliderBottom = createSlider(0, 1, 0.01, 0.01); 

    bird = new Bird();
    pipes.push(new Pipe());
    
}

function draw() {
    background(0);

    const volume = mic.getLevel();

    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.show();
        pipe.update();

        if (pipe.hits(bird)) {
            console.log('HIT');
        }
        if (pipe.offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 100 === 0) {
        pipes.push(new Pipe());
    }

    const thresholdTop    = sliderTop.value();
    const thresholdBottom = sliderBottom.value();
    if (volume > thresholdTop && !clapping) {
        bird.up();
        clapping = true;
    }
    if (volume < thresholdBottom) {
        clapping = false;
    }

    fill(0, 255, 0);
    noStroke();
    const y = map(volume, 0, 1, height, 0);
    rect(width - 50, y, 50, height - y);

    const ty = map(thresholdTop, 0, 1, height, 0);
    const by = map(thresholdBottom, 0, 1, height, 0);
    strokeWeight(4);
    stroke(255, 0, 0);
    line(width - 50, ty, width, ty);
    stroke(0, 0, 255);
    line(width - 50, by, width, by);

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
        //console.log("SPACE");
    }
}