

class Rocket {

    constructor(dna) {
        this.pos = createVector(width / 2, height - 10);
        this.vel = createVector();
        this.acc = createVector();
        if (dna) {
            this.dna = dna;
        } else {
            this.dna = new DNA();
        }
        this.fitness = 0;
        this.completed = false;  // checks a rocket reached the target
        this.crashed   = false;  // checks if a rocket had crashed
    }

    applyForce(force) {
        this.acc.add(force);
    }

    update() {
        const d = dist(this.pos.x, this.pos.y, target.x, target.y);
        // If distance less than 10px, then it has reached target
        if (d < 10) {
            this.completed = true;
            this.pos = target.copy();
        }
        // Rocket hit the barrier
        if (this.pos.x >= rx && this.pos.x <= (rx + rw) && this.pos.y >= ry && this.pos.y <= (ry + rh)) {
            this.crashed = true;
        }
        // Rocket hit boundary
        if (this.pos.x >= width || this.pos.x <= 0 || this.pos.y >= height || this.pos.y <= 0) {
            this.crashed = true;
        }
        // applies the random vectors defined in DNA to consecutive frames of rocket
        this.applyForce(this.dna.genes[count]);
        // Update physics engine if a rocket has not crashed or completed.
        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }
        
    }

    calcFitness() {
        const d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);
        if (this.completed) {
            this.fitness *= 2;
        }
        if (this.crashed) {
            this.fitness /= 2;
        }
    }

    show() {
        push();
        noStroke();
        if (this.fitness > 0.9) {
            fill(255, 0, 0, 150);
        } else if (this.fitness > 0.7) {
            fill(0, 255, 0, 150);
        } else if (this.fitness > 0.5) {
            fill(0, 0, 255, 150);
        } else {
            fill(255, 150);
        }
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(0, 0, 25, 5);
        pop();
    }

}