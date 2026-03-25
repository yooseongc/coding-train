
class Neuron {

    constructor(x, y, label) {
        this.position = createVector(x, y);
        this.connections = [];
        this.label = label;
        this.sum = 0;
        this.r = 32;
    }

    addConnection(connection) {
        this.connections.push(connection);
    }

    feedForward(input) {
        this.sum += input;

        // activate?
        if (this.sum > 1) {
            this.fire();
            this.sum = 0;
        }
    }

    fire() {
        this.r = 64;
        for (const connection of this.connections) {
            connection.feedForward(this.sum);
        }
    }

    show() {
        stroke(0);
        strokeWeight(1);
        let brightness = map(this.sum, 0, 1, 0, 255);
        brightness += map(this.r, 32, 64, 0, 500);
        fill(brightness);
        ellipse(this.position.x, this.position.y, this.r);

        this.r = lerp(this.r, 32, 0.1);

        fill(0);
        strokeWeight(1);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(this.label, this.position.x, this.position.y - 20);
    }

}
