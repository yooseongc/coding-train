
class Node {

    constructor(value) {
        this.value = value;
        this.edges = [];
        this.searched = false;
        this.parent = null;
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.col = color(0);
    }

    addEdge(neighbor) {
        this.edges.push(neighbor);
        neighbor.edges.push(this);
    }

    isConnected(neighbor) {
        const idx = this.edges.indexOf(neighbor);
        return (idx >= 0);
    }

    show() {
        textAlign(CENTER);
        const w = textWidth(this.value);
        stroke(255);
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, w * 2);
        noStroke();
        fill(255);
        text(this.value, this.pos.x, this.pos.y);
    }

    showEdges() {
        noFill();
        stroke(255);
        for (const edge of this.edges) {
            line(this.pos.x, this.pos.y, edge.pos.x, edge.pos.y);
        }
    }

    highlight() {
        this.col = color(0, 150, 0);
    }

}