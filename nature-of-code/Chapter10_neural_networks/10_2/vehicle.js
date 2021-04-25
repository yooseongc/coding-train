
class Vehicle {

    constructor(x, y, n) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.brain = new Perceptron(n, 0.001);

        this.r = 3.0;
        this.maxSpeed = 4;
        this.maxForce = 0.1;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        this.position.x = constrain(this.position.x, 0, width);
        this.position.y = constrain(this.position.y, 0, height);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    // a method that calculates a steering force towards a target
    // Steering force = desired velocity - this velocity
    seek(target) {
        // desired = a vector pointing from the position to the target.
        const desired = p5.Vector.sub(target, this.position);
        desired.normalize();
        desired.mult(this.maxSpeed);
        const steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);

        return steer;
    }

    steer(targets) {
        const forces = targets.map(target => this.seek(target));
        const result = this.brain.feedForward(forces);
        this.applyForce(result);

        const desiredPos = createVector(width / 2, height / 2);
        const error = p5.Vector.sub(desiredPos, this.position);
        this.brain.train(forces, error);
    }

    show() {

        const theta = this.velocity.heading() + PI / 2;
        fill(175);
        stroke(0);
        strokeWeight(1);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();

    }

}