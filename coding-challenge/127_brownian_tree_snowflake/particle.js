
class Particle {

    constructor(radius, angle) {
        this.pos = p5.Vector.fromAngle(angle).mult(radius);
        this.r = 2;
    }

    intersects(snowflakes) {
        for (const s of snowflakes) {
            const d = dist(s.pos.x, s.pos.y, this.pos.x, this.pos.y);
            if (d < this.r * 2) {
                return true;
            }
        }
        return false;
    }

    update() {
        this.pos.x -= 1;
        this.pos.y += random(-3, 3);

        let angle = constrain(this.pos.heading(), 0, PI / 6);
        const mag = this.pos.mag();
        this.pos = p5.Vector.fromAngle(angle).setMag(mag);
    }

    show() {
        fill(100, 200, 255, 150);
        stroke(255, 150);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
    }

    finished() {
        return this.pos.x < 1;
    }

}