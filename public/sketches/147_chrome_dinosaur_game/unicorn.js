
class Unicorn {

    constructor() {
        this.r = 100;
        this.x = 50;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 1;
    }

    jump() {
        if (this.y === height - this.r) {
            this.vy = -20;
        }
    }

    hits(train) {
        // const x1 = this.x + this.r * 0.5;
        // const y1 = this.y + this.r * 0.5;
        // const x2 = train.x + train.r * 0.5;
        // const y2 = train.y + train.r * 0.5;
        // collideCircleCircle(x1, y1, this.r, x2, y2, train.r);
        return collideRectRect(this.x + 5, this.y + 5, this.r - 10, this.r - 10, 
            train.x + 5, train.y + 5, train.r - 10, train.r - 10);
    }


    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r);
    }

    show() {
        image(unicornImg, this.x, this.y, this.r, this.r);
    }
    
}