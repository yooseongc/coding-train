
class Edge {

    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.h1 = null;
        this.h2 = null;
    }

    show() {
        stroke(255, 50);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
        this.h1.show();
        this.h2.show();
    }

    hankin(sides) {
        const mid = p5.Vector.add(this.a, this.b).mult(0.5);
        const v1 = p5.Vector.sub(this.a, mid);
        const v2 = p5.Vector.sub(this.b, mid);
        const elen = v1.mag() + delta; // elen : edge length
        const offset1 = mid.copy();
        const offset2 = mid.copy();
        if (delta > 0) {    // delta : global variable
            v1.setMag(delta);
            v2.setMag(delta);
            offset1.add(v2);
            offset2.add(v1);
        }
        v1.normalize().rotate(radians(-angle));
        v2.normalize().rotate(radians(angle));

        // Calculate interior angle -> n각형의 한 꼭지점의 내각
        const interior = (sides - 2) * PI / sides;
        // Law of  sines right here!
        // a / sin A = b / sin B
        // a = b * sin A / sin B
        const alpha = interior * 0.5;
        const beta  = PI - radians(angle) - alpha;
        const hlen  = elen * sin(alpha) / sin(beta);  // hypotenuse length
        v1.setMag(hlen);
        v2.setMag(hlen);

        this.h1 = new Hankin(offset1, v1);
        this.h2 = new Hankin(offset2, v2);

    }

    findEnds(edge) {
        this.h1.findEnd(edge.h1);
        this.h1.findEnd(edge.h2);
        this.h2.findEnd(edge.h1);
        this.h2.findEnd(edge.h2);
    }

}