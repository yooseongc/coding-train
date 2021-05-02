
// https://codegolf.stackexchange.com/questions/42506/draw-a-snowflake

let current;
const snowflakes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    current = new Particle(height / 2, 0);
}

function draw() {
    translate(width / 2, height / 2);
    rotate(PI / 6);
    background(51);

    for (let n = 0; n < 10; n++) {
        let count = 0;
        while (!current.finished() && !current.intersects(snowflakes)) {
            current.update();
            count++;
        }

        // If a particle doesn't move at all we're done
        if (count === 0) {
            noLoop();
            console.log('snowflake completed');
            break;
        }

        snowflakes.push(current);
        current = new Particle(height / 2, 0);
    }

    for (let i = 0; i < 6; i++) {
        rotate(PI / 3);
        current.show();
        for (const s of snowflakes) {
            s.show();
        }

        // y-flip
        push();
        scale(1, -1); 
        current.show();
        for (const s of snowflakes) {
            s.show();
        }
        pop();
    }
}
