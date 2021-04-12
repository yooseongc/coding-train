
class Blob {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        const angle = random(0, TWO_PI);
        this.xspeed = random(2, 5) * cos(angle);
        this.yspeed = random(2, 5) * sin(angle);
        this.r = random(120, 240);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > width || this.x < 0) {
            this.xspeed *= -1;
        }
        if (this.y > height || this.y < 0) {
            this.yspeed *= -1;
        }
    }

    show() {
        noFill();
        stroke(0);
        strokeWeight(4);
        ellipse(this.x, this.y, this.r * 2 / 10, this.r * 2 / 10);
    }

}