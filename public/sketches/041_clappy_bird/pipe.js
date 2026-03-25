
class Pipe {

    constructor() {
        const spacing = random(50, height / 2);
        const centery = random(spacing, height - spacing);

        this.top = centery - spacing / 2;
        this.bottom = height - (centery + spacing / 2);
        this.x = width;
        this.w = 50;
        this.speed = 2;  // it will move to left.
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
        noStroke();
        fill(255); // white
        if (this.highlight) {
            fill(255, 0, 0);  // red
        }
        rect(this.x, 0, this.w, this.top);                       // downward pipe from top
        rect(this.x, height - this.bottom, this.w, this.bottom); // upward pipe from bottom
    }

}