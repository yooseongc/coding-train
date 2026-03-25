
class Pipe {

    constructor() {
        this.spacing = 175;
        this.top = random(height / 6, 3 / 4 * height);
        this.bottom = height - (this.top + this.spacing);
        this.x = width;
        this.w = 80;
        this.speed = 6;  // it will move to left.
        this.highlight = false;
    }

    hits(bird) {
        // figure out bird hits this pipe.
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
            }
        }
        return false;
    }

    update() {
        this.x -= this.speed;
    }

    offscreen() {
        return (this.x < -this.w);
    }

    show() {
        fill(255); // white
        if (this.highlight) {
            fill(255, 0, 0);  // red
        }
        rect(this.x, 0, this.w, this.top);                       // downward pipe from top
        rect(this.x, height - this.bottom, this.w, this.bottom); // upward pipe from bottom
    }

}