
class Puck {

    constructor() {
        this.x = width / 2;
        this.y = height / 2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = 12;

        this.reset();
    }

    reset() {
        this.x = width / 2;
        this.y = height / 2;
        const angle = random(- PI / 4, PI / 4);
        this.xspeed = 5 * cos(angle);
        this.yspeed = 5 * sin(angle);

        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    edges() {
        if (this.y < 0 || this.y > height) {
            this.yspeed *= -1;
        }
        if (this.x - this.r > width) {
            ding.play();
            leftscore++;
            this.reset();
        }
        if (this.x + this.r < 0) {
            ding.play();
            rightscore++;
            this.reset();
        }
    }

    checkPaddleLeft(p) {
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x - this.r < p.x + p.w / 2) {

            if (this.x > p.x) {
                const diff = this.y - (p.y - p.h / 2);
                const rad = radians(45);
                const angle = map(diff, 0, p.h, -rad, rad);
                this.xspeed = 5 * cos(angle);
                this.yspeed = 5 * sin(angle);
                this.x = p.x + p.w / 2 + this.r;
            }
        }
    }

    checkPaddleRight(p) {
        if (this.y - this.r < p.y + p.h / 2 &&
            this.y + this.r > p.y - p.h / 2 &&
            this.x + this.r > p.x - p.w / 2) {

            if (this.x < p.x) {
                const diff = this.y - (p.y - p.h / 2);
                const angle = map(diff, 0, p.h, radians(225), radians(135));
                this.xspeed = 5 * cos(angle);
                this.yspeed = 5 * sin(angle);
                this.x = p.x - p.w / 2 - this.r;
            }
        }
    }

    show() {
        fill(255);
        ellipse(this.x, this.y, this.r * 2);
    }

}