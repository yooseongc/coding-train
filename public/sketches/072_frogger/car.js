
class Car extends Rectangle {

    constructor(x, y, w, h, speed) {
        super(x, y, w, h);
        this.speed = speed;
    }

    update() {
        this.x += this.speed;
        if (this.speed > 0 && this.x > width + grid) {
            this.x = - this.w - grid;
        } else if (this.speed < 0 && this.x < - this.w - grid) {
            this.x = width + grid;
        }
    }

    show() {
        fill(255);
        rect(this.x, this.y, this.w, this.h);
    }


}