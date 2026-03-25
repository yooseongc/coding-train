
// https://en.wikipedia.org/wiki/Flappy_Bird

let bird;
const pipes = [];

function setup() {
    createCanvas(640, 480);
    bird = new Bird();
    pipes.push(new Pipe());
}

function keyPressed() {
    if (key === ' ') {
        bird.up();
    }
}

function draw() {
    background(0);

    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.show();
        pipe.update();

        if (pipe.hits(bird)) {
            console.log('HIT!');
        }

        if (pipe.offscreen()) {
            pipes.splice(i, 1);
        }
    }

    bird.update();
    bird.show();

    if (frameCount % 75 === 0) {
        pipes.push(new Pipe());
    }

}
