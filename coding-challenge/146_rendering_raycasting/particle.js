
class Particle {

    constructor() {
        this.fov = 45;
        this.pos = createVector(sceneW / 2, sceneH / 2);
        this.rays = [];
        this.heading = 0;
        for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a)));
        }
    }

    updateFOV(fov) {
        this.fov = fov;
        this.rays = [];
        for (let a = -this.fov / 2; a < this.fov / 2; a += 1) {
            this.rays.push(new Ray(this.pos, radians(a) + this.heading));
        }
    }

    rotate(angle) {
        this.heading += angle;
        for (let i = 0; i < this.rays.length; i++) {
            const a = - this.fov / 2 + i;
            this.rays[i].setAngle(radians(a) + this.heading)
        }
    }

    move(amount) {
        const vel = p5.Vector.fromAngle(this.heading);
        vel.setMag(amount);
        this.pos.add(vel);
    }

    look(walls) {
        const scene = [];
        for (let i = 0; i < this.rays.length; i++) {
            const ray = this.rays[i];
            let closest = null;
            let record = Infinity;
            for (let wall of walls) {
                const pt = ray.cast(wall);
                if (pt) {
                    let d = p5.Vector.dist(this.pos, pt);
                    const a = ray.dir.heading() - this.heading;
                    d *= cos(a);
                    if (d < record) {
                        record = d;
                        closest = pt;
                    }
                }
            }
            if (closest) {
                stroke(255, 100);
                line(this.pos.x, this.pos.y, closest.x, closest.y);
            } 
            scene[i] = record;
        }
        return scene;
    }

    update(x, y) {
        this.pos.set(x, y);
    }

    show() {
        fill(255);
        ellipse(this.pos.x, this.pos.y, 4);
        for (let ray of this.rays) {
            ray.show();
        }
    }

}