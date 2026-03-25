
class Bird {

    constructor(brain) {
        this.x = 64;               // starting x point
        this.y = height / 2;       // starting y point - center of window height
        this.gravity = 0.8;        // gravitational acc 
        this.lift = -12;           // up acc
        this.velocity = 0;         // y dir speed

        if (brain instanceof NeuralNetwork) {
            this.brain = brain.copy();
        } else {
            this.brain = new NeuralNetwork(5, 8, 2);
        }

        this.score = 0;
        this.fitness = 0;
    }

    copy() {
        return new Bird(this.brain);
    }

    // this is the key function now that decides
    //    if it should jump or not jump.
    think(pipes) {
        // First, find the closest pipe
        let closest = null;
        let record = Infinity;
        for (let i = 0; i < pipes.length; i++) {
            const diff = pipes[i].x - this.x;
            if (diff > 0 && diff < record) {
                record = diff;
                closest = pipes[i];
            }
        }

        if (closest != null) {
            const inputs = [];
            inputs[0] = map(closest.x, this.x, width, 0, 1);
            inputs[1] = map(closest.top, 0, height, 0, 1);
            inputs[2] = map(closest.bottom, 0, height, 0, 1);
            inputs[3] = map(this.y, 0, height, 0, 1);
            inputs[4] = map(this.velocity, -5, 5, 0, 1);

            const output = this.brain.predict(inputs);
            if (output[0] > output[1]) {
                this.up();
            }
        }
    }

    mutate() {
        this.brain.mutate(0.1);
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        // Every frame it is alive, increases the score
        this.score++;
    }

    bottomTop() {
        // die condition.
        return (this.y > height || this.y < 0);
    }

    show() {
        image(birdSprite, this.x - 16, this.y - 16, 32, 32);
        // fill(255, 100);
        // stroke(255);
        // ellipse(this.x, this.y, 32);
    }

}