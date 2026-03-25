
class Train {

    constructor() {
        this.r = 75;
        this.x = width;
        this.y = height - this.r;
    }

    move() {
        this.x -= scrollAmount;
    }

    show() {
        image(trainImg, this.x, this.y, this.r, this.r);
    }

}