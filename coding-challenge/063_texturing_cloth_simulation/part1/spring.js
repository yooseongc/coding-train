
class Spring extends VerletSpring2D {

    constructor(a, b, w, stiffnes) {
        super(a, b, w, stiffnes);
    }

    display() {
        stroke(255);
        strokeWeight(1);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}