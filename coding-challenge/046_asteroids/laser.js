
class Laser {

    constructor(shipPos, shipAngle) {
        this.pos = createVector(shipPos.x, shipPos.y);
        this.vel = p5.Vector.fromAngle(shipAngle);
        this.vel.mult(10);
    }

    update() {
        this.pos.add(this.vel);
    }

    render() {
        push();
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
        pop();
    }

    hits(astroid) {
        const d = dist(this.pos.x, this.pos.y, astroid.pos.x, astroid.pos.y);
        return (d < astroid.r);
    }

    offscreen() {
        return (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0);
    }
}