
class Cell {

    constructor(pos, r, c) {
        this.pos = pos ? pos.copy() : createVector(random(width), random(height));
        this.r = r || 60;
        this.c = c || color(random(100, 255), 0, random(100, 255), 100);
    }

    clicked(x, y) {
        return dist(this.pos.x, this.pos.y, x, y) < this.r;
    }

    mitosis() {
        return new Cell(this.pos, this.r * 0.8, this.c);
    }

    move() {
        this.pos.add(p5.Vector.random2D());
    }

    show() {
        noStroke();
        fill(this.c);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }

}