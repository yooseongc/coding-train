
class Planet {

    constructor(radius, distance, orbitspeed) {
        this.pos = p5.Vector.random3D();
        this.radius = radius;
        this.distance = distance;
        this.pos.mult(this.distance);
        this.orbitspeed = orbitspeed;
        this.angle = random(TWO_PI);
        this.planets = [];
    }

    orbit() {
        this.angle += this.orbitspeed;
        for (const p of this.planets) {
            p.orbit();
        }
    }

    spawnMoons(total, level) {
        for (let i = 0; i < total; i++) {
            const r = this.radius / (level * 2);
            const d = random(this.radius + r, (this.radius + r) * 2);
            const o = random(-0.1, 0.1);
            this.planets.push(new Planet(r, d, o));
            if (level < 2) {
                const num = int(random(0, 3));
                this.planets[i].spawnMoons(num, level + 1);
            }
        }
    }

    show() {
        push();
        noStroke();
        const v2 = createVector(1, 0, 1);
        const p = this.pos.cross(v2);
        // Rotation around a 0-length axis doesn't work in p5.js, so don't do that.
        if (p.x !== 0 || p.y !== 0 || p.z !== 0) {
            rotate(this.angle, p);
        }
        translate(this.pos.x, this.pos.y, this.pos.z);
        fill(255);
        sphere(this.radius);
        for (const planet of this.planets) {
            planet.show();
        }
        pop();
    }

}
