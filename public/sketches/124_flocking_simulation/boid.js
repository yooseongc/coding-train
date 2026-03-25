
class Boid {

    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D().setMag(random(2, 4));
        this.acceleration = createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 5;
    }

    edges() {
        this.position.x = (this.position.x + width)  % width;
        this.position.y = (this.position.y + height) % height;
    }

    percept(other, perceptionRadius) {
        return dist(this.position.x, this.position.y, other.position.x, other.position.y) < perceptionRadius;
    }

    align(boids) {
        const steering = createVector();
        let total = 0;
        for (const other of boids) {
            if (other === this) continue;
            if (this.percept(other, 25)) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);         // average velocity == desired velocity
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity); // steering = desired velocity - current velocity
            steering.limit(this.maxForce);
        }
        return steering;
    }

    cohere(boids) {
        const steering = createVector();
        let total = 0;
        for (const other of boids) {
            if (other === this) continue;
            if (this.percept(other, 50)) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);         // mean position
            steering.sub(this.position); // desired velocity = mean position - current position
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity); // steering = desired velocity - current velocity
            steering.limit(this.maxForce);
        }
        return steering;
    }

    separate(boids) {
        const steering = createVector();
        let total = 0;
        for (const other of boids) {
            if (other === this) continue;
            const d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
            if (d < 24) {
                const diff = p5.Vector.sub(this.position, other.position); // curr pos - other pos
                diff.div(d * d);  // diff divide by square of dist -> desired velocity
                steering.add(diff); 
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);         // mean desired velocity
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity); // steering = desired velocity - current velocity
            steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids, a, c, s) {
        this.acceleration.add(this.align(boids).mult(a || 1));
        this.acceleration.add(this.cohere(boids).mult(c || 1));
        this.acceleration.add(this.separate(boids).mult(s || 1));
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    show() {
        strokeWeight(6);
        stroke(255);
        point(this.position.x, this.position.y);
    }

}