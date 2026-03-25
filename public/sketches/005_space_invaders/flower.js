
class Flower {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.xdir = 1;
    }

    grow() {
        this.r += 2;
    }

    shiftDown() {
        this.xdir *= -1;
        this.y += this.r;
    }

    move() {
        this.x = this.x + this.xdir;
    }

    show() {
        noStroke();
        fill(255, 0, 200, 150);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

}