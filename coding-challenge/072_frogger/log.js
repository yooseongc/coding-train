
class Log extends Car {

    constructor(x, y, w, h, speed) {
        super(x, y, w, h, speed);
    }

    show() {
        fill(200, 160, 100);
        rect(this.x, this.y, this.w, this.h);
    }

}