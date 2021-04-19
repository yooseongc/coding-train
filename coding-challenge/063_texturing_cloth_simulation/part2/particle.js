
class Particle extends VerletParticle2D {

    constructor(x, y, z) {
        super(x, y);
        this.z = 0;
    }

    display() {
        push();
        translate(this.x, this.y);
        noStroke();
        fill(255);
        ellipse(0, 0, 2, 2);
        pop();
    }

}