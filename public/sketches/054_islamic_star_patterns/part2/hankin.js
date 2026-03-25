
class Hankin {

    constructor(a, v) {
        this.a = a;  // starting position vector
        this.v = v;  // direction vector
        this.b = p5.Vector.add(a, v);
    }

    show() {
        stroke(255, 0, 255);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}