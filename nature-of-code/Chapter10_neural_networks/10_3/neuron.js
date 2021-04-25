
class Neuron {

    constructor(x, y, label) {
        this.position = createVector(x, y);
        this.connections = [];
        this.label = label;
    }

    addConnection(connection) {
        this.connections.push(connection);
    }

    show() {
        stroke(0);
        strokeWeight(1);
        fill(0);
        ellipse(this.position.x, this.position.y, 16);

        for (const connection of this.connections) {
            connection.show();
        }

        strokeWeight(1);
        textAlign(CENTER, CENTER);
        textSize(16);
        text(this.label, this.position.x, this.position.y - 20);
    }

}
