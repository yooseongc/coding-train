
class Block {

    constructor(x, w, mass, velocity, xc) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.velocity = velocity;
        this.mass = mass;
        this.xConstraint = xc;
    }

    hitWall() {
        return (this.x <= 0);
    }

    reverse() {
        this.velocity *= -1;
    }

    collide(other) {
        return !(this.x + this.w < other.x || this.x > other.x + other.w);
    }

    bounce(other) {
        // elastic collision
        const sumOfMass = this.mass + other.mass;
        return (this.mass - other.mass) / sumOfMass * this.velocity + 2 * other.mass / sumOfMass * other.velocity;
    }

    update() {
        this.x += this.velocity;
    }

    show() {
        const x = constrain(this.x, this.xConstraint, width);
        image(blockImg, x, this.y, this.w, this.w);
    }

}