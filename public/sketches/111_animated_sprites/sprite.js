
class Sprite {

    constructor(animation, speed, x, y) {
        this.x = x;
        this.y = y;
        this.animation = animation;
        this.w = animation[0].width;
        this.speed = speed;
        this.index = 0;
        this.len = animation.length;
        this.dashing = false;
    }

    show() {
        const idx = floor(this.index) % this.len;
        image(this.animation[idx], this.x, this.y);
    }

    animate() {
        this.index += this.speed;
        this.x += this.dashing ? this.speed * 15 : this.speed * 10;
        if (this.x > width) {
            this.x = - this.w;
        }
    }

    dash() {
        if (random(1) < 0.05) {
            this.dashing = !this.dashing;
        }
    }

}