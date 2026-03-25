
class Particle {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 4;
        this.highlight = false;
    }

    intersects(other) {
        const d = dist(this.x, this.y, other.x, other.y);
        return (d < this.r + other.r);
    }

    setHighlight(v) {
        this.highlight = v;
    }

    move() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }

}

function renderParticle(particle) {
    noStroke();
    if (particle.highlight) {
        fill(255);
    } else {
        fill(100);
    }
    ellipse(particle.x, particle.y, particle.r * 2);
}