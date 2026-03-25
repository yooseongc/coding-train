
class Particle {

    constructor(x, y) {
        this.pos = createVector(x, y);
        this.prev = createVector(x, y);
        this.vel = createVector(0, 0);
        // this.vel = p5.Vector.random2D();
        // this.vel.setMag(random(2, 5));
        this.acc = createVector(0, 0);
    }

    update() {
        this.vel.add(this.acc);
        this.vel.limit(5);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    attracted(target) {
        const force = p5.Vector.sub(target, this.pos);
        // let dSq = force.magSq();
        // dSq = constrain(dSq, 50, 500);
        let d = force.mag();
        d = constrain(d, 1, 25);
        const G = 50;
        const strength = G / d / d;
        force.setMag(strength);
        if (d < 20) {
            force.mult(-10);
        }
        this.acc.add(force);
    }

    show() {
        stroke(255, 255);
        strokeWeight(4);
        // point(this.pos.x, this.pos.y);
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
        this.prev = this.pos.copy();
    }

}