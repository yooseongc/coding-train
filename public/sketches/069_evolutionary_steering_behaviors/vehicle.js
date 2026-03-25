
class Vehicle {

    constructor(x, y, dna) {

        this.position = createVector(x, y);
        this.velocity = createVector(0, -2);
        this.acceleration = createVector(0, 0);
        this.r = 4;
        this.maxSpeed = 5;
        this.maxForce = 0.5;

        this.health = 1;
        this.dna = [];
        if (typeof dna === 'undefined') {
            // Food Weight
            this.dna[0] = random(-2, 2);
            // Poison Weight
            this.dna[1] = random(-2, 2);
            // Food perception
            this.dna[2] = random(0, 100);
            // Poison Perception
            this.dna[3] = random(0, 100);
        } else { // Mutation
            this.dna = dna;
            // Food Weight
            if (random(1) < mutationProbability) this.dna[0] += random(-0.1, 0.1);
            // Poison Weight
            if (random(1) < mutationProbability) this.dna[1] += random(-0.1, 0.1);
            // Food perception
            if (random(1) < mutationProbability) this.dna[2] += random(-10, 10);
            // Poison Perception
            if (random(1) < mutationProbability) this.dna[3] += random(-10, 10);
        }
    }

    update() {
        this.health -= 0.005;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    behaviors(good, bad) {
        const steerGood = this.eat(good, 0.2, this.dna[2]);
        const steerBad  = this.eat(bad,   -1, this.dna[3]);

        steerGood.mult(this.dna[0]);
        steerBad.mult(this.dna[1]);

        this.applyForce(steerGood);
        this.applyForce(steerBad);
    }
    
    clone() {
        if (random(1) < 0.002) {
            return new Vehicle(this.position.x, this.position.y, this.dna.slice());
        } else {
            return null;
        }
    }

    eat(list, nutrition, perception) {
        let record = Infinity;
        let closest = null;
        for (let i = list.length - 1; i >= 0; i--) {
            const d = this.position.dist(list[i]);
            if (d < this.maxSpeed) {
                list.splice(i, 1);
                this.health += nutrition;
            } else {
                if (d < record && d < perception) {
                    record = d;
                    closest = list[i];
                }
            }
        }

        if (closest != null) {
            return this.seek(closest);
        }

        return createVector(0, 0);
    }

    seek(target) {
        const desired = p5.Vector.sub(target, this.position);
        desired.setMag(this.maxSpeed);
        const steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);

        return steer;
    }

    seekFood() {
        if (food.length > 0) {
            let record = Infinity;
            let closestIndex = -1;
            for (let i = food.length - 1; i >= 0; i--) {
                const d = this.position.dist(food[i]);
                if (d < record) {
                    record = d;
                    closestIndex = i;
                }
            }
            this.applyForce(this.seek(food[closestIndex]));
            if (record < this.maxSpeed) {
                food.splice(closestIndex, 1);
            }
        }
    }

    dead() {
        return (this.health < 0);
    }

    display() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading() + PI / 2);

        if (debug.checked()) {
            strokeWeight(3);
            stroke(0, 255, 0);
            noFill();
            line(0, 0, 0, -this.dna[0] * 25);
            strokeWeight(2);
            ellipse(0, 0, this.dna[2] * 2);
            stroke(255, 0, 0);
            line(0, 0, 0, -this.dna[1] * 25);
            ellipse(0, 0, this.dna[3] * 2);
        }

        const col = lerpColor(color(255, 0, 0), color(0, 255, 0), this.health);
        fill(col);
        stroke(col);
        strokeWeight(1);
        beginShape();
        vertex(0, -this.r * 2);
        vertex(-this.r, this.r * 2);
        vertex(this.r, this.r * 2);
        endShape(CLOSE);
        pop();
    }

    boundaries() {
        const d = 25;
        let desired = null;

        const {x, y} = this.position;
        if (x < d) {
            desired = createVector(this.maxSpeed, this.velocity.y);
        } else if (x > width - d) {
            desired = createVector(-this.maxSpeed, this.velocity.y);
        }
        if (y < d) {
            desired = createVector(this.velocity.x, this.maxSpeed);
        } else if (y > height - d) {
            desired = createVector(this.velocity.x, -this.maxSpeed);
        }
        if (desired) {
            desired.normalize();
            desired.mult(this.maxSpeed);
            const steer = p5.Vector.sub(desired, this.velocity);
            steer.limit(this.maxForce);
            this.applyForce(steer);
        }
    }

}