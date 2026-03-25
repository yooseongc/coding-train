
class Ship {
    constructor() {
        this.x = width / 2;
        this.xdir = 0;
    }

    move() {
        this.x += 5 * this.xdir;
    }

    setDir(dir) {
        this.xdir = dir;
    }

    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, height - 20, 20, 60);
    }

}