
class Orbit {

    constructor(x, y, r, n, parent) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.n = n;
        this.parent = parent;
        this.child = null;
        this.speed = (radians(pow(k, n - 1))) / resolution;
        this.angle = -PI / 2;
    }

    addChild() {
        const childR = this.r / 3;
        const childX = this.x + this.r + childR;
        const childY = this.y;
        this.child = new Orbit(childX, childY, childR, this.n + 1, this);
        return this.child;
    }

    update() {
        if (this.parent) {
            this.angle += this.speed;
            this.x = this.parent.x + (this.parent.r + this.r) * cos(this.angle);
            this.y = this.parent.y + (this.parent.r + this.r) * sin(this.angle);
        }
    }

    show() {
        stroke(255, 100);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

}  
