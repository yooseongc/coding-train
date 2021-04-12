
class Circle {

    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.color = color;
        this.growing = true;
    }

    grow() {
        if (this.growing) {
            this.r += 0.5;
        }
    }

    edges() {
        return (this.x + this.r >= imgWidth ||
                this.x - this.r <= 0 ||
                this.y + this.r >= imgHeight ||
                this.y - this.r <= 0);
    }

    show() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2);
    }

}