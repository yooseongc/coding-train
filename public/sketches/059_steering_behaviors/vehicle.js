
class Vehicle {

    constructor(x, y) {
        this.pos = createVector(random(width), random(height));
        this.target = createVector(x, y);
        this.vel = p5.Vector.random2D();
        this.acc = createVector();
        this.r = 4;
        this.maxSpeed = 5;
        this.maxForce = 1;
    }

    behaviors(mx, my) {
        const arrive = this.arrive(this.target);
        const mouse = createVector(mx, my);
        const flee = this.flee(mouse);

        arrive.mult(1);
        flee.mult(2);
        this.applyForce(arrive);
        this.applyForce(flee);
    }

    arrive(target) {
        const desired = p5.Vector.sub(target, this.pos);
        const d = desired.mag();
        desired.setMag(map(d, 0, 100, 0, this.maxSpeed, true));
        const steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxForce);
        return steer;
    }

    flee(target) {
        const desired = p5.Vector.sub(target, this.pos);
        const d = desired.mag();
        if (d < 50) {
            desired.setMag(this.maxSpeed);
            desired.mult(-1);
            const steer = p5.Vector.sub(desired, this.vel);
            steer.limit(this.maxForce);
            return steer;
        } else {
            return createVector(0, 0);
        }
    }

    applyForce(f) {
        this.acc.add(f);
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    show() {
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x, this.pos.y);
    }

}