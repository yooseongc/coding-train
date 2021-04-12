
class Drop {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 8;
        this.evaporated = false;
    }

    hits(flower) {
        const d = dist(this.x, this.y, flower.x, flower.y);
        return (d <= this.r + flower.r);
    }

    move() {
        this.y = this.y - 5;
    }

    evaporate() {
        this.evaporated = true;
    }

    show() {
        if (!this.evaporated) {
            noStroke();
            fill(150, 0, 255);
            ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }
    }

}