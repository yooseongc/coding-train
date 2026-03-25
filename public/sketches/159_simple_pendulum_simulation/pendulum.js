
class Pendulum {

    constructor(x, y, len, ballRadius) {
        this.origin = createVector(x, y);
        this.len = len;
        this.angle = PI / 2;
        this.position = createVector(x + this.len * sin(this.angle), y + this.len * cos(this.angle));
        
        this.angleVelocity = 0;
        this.angleAcceleration = 0;
        this.ballRadius = ballRadius;
    }

    reset() {
        this.angle = PI / 2;
        this.position = createVector(this.origin.x + this.len * sin(this.angle), this.origin.y + this.len * cos(this.angle));
        this.angleVelocity = 0;
        this.angleAcceleration = 0;
    }

    update() {
        this.angleAcceleration = - configuration.gravity * sin(this.angle) / this.len;
        this.angleVelocity += this.angleAcceleration;
        this.angleVelocity *= configuration.damping;
        this.angle += this.angleVelocity;
    }

    show() {
        this.position.set(
            this.origin.x + this.len * sin(this.angle),
            this.origin.y + this.len * cos(this.angle)
        );
        stroke(252, 238, 33);
        strokeWeight(1);
        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipseMode(CENTER);
        fill(252, 238, 33);
        ellipse(this.position.x, this.position.y, this.ballRadius * 2);
    }

}