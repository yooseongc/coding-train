
class Hankin {

    constructor(a, v) {
        this.a = a;  // starting position vector
        this.v = v;  // direction vector
        this.b = p5.Vector.add(a, v);
        this.end = null;
        this.prevD = null;
    }

    findEnd(other) {
        // From: http://paulbourke.net/geometry/pointlineplane/
        // line-line intersection
        // this.a  : P1,      this.v  : P2-P1
        // other.a : P3,      other.v : P4-P3
        // Pa = P1 + u_a * (P2 - P1), Pb = P3 + u_b * (P4 - P3)
        // Solving Pa = Pb,
        // 

        // x = x1 + u_a * (x2 - x1)
        // y = y1 + u_a * (y2 - y1)
        
        // denominator : (y4 - y3)(x2 - x1) - (x4 - x3)(y2 - y1)
        // numerator of u_a : (x4 - x3)(y1 - y3) - (y4 - y3)(x1 - x3)
        // numerator of u_b : (x2 - x1)(y1 - y3) - (y2 - y1)(x1 - x3)

        const den = (other.v.y * this.v.x) - (other.v.x * this.v.y);
        if (den === 0) {
            return; // parallel case -- no end
        }
        const numa = (other.v.x * (this.a.y - other.a.y)) - (other.v.y * (this.a.x - other.a.x));
        const numb = (this.v.x * (this.a.y - other.a.y)) - (this.v.y * (this.a.x - other.a.x));
        const ua = numa / den;
        const ub = numb / den;
        const x = this.a.x + ua * this.v.x;
        const y = this.a.y + ua * this.v.y;

        if (ua > 0 && ub > 0) { // consider only forward-case
            const candidate = createVector(x, y);
            const d1 = p5.Vector.dist(candidate, this.a);
            const d2 = p5.Vector.dist(candidate, other.a);
            const d = d1 + d2;
            const diff = abs(d1 - d2);
            if (diff < 0.001) {
                if (!this.end) {
                    this.end = candidate;
                    this.prevD = d;
                } else if (d < this.prevD) {
                    this.end = candidate;
                    this.prevD = d;
                }
            }
        }
    }

    show() {
        stroke(255, 0, 255);
        line(this.a.x, this.a.y, this.end.x, this.end.y);
    }

}