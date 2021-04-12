
class Drop {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.z = random(0, 20);
        this.yspeed = map(this.z, 0, 20, 5, 15);
        this.len = map(this.z, 0, 20, 10, 20);
        this.weight = map(this.z, 0, 20, 1, 3);
    }

    fall() {
        this.y += this.yspeed;
        this.yspeed += 0.05;
        if (this.y > height) {
            this.y = random(-200, -100);
            this.yspeed = map(this.z, 0, 20, 5, 15);
        } 
    }

    show() {
        strokeWeight(this.weight);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.len);
    }

}