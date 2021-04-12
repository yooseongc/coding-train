
class Bird {

    constructor() {
        this.x = 64;               // starting x point
        this.y = height / 2;       // starting y point - center of window height
        this.gravity = 0.7;        // gravitational acc 
        this.lift = -12;           // up acc
        this.velocity = 0;         // y dir speed
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

}