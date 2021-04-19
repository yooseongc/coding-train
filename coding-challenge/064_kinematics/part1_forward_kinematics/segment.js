
class Segment {
    
    constructor(point, len, angle) {
        if (point instanceof Segment) {
            this.parent = point;
            this.a = new p5.Vector(this.parent.b.x, this.parent.b.y);
        } else {  // p5.Vector
            this.parent = null;
            this.a = point;
        }
        this.len = len;
        this.angle = angle;
        this.selfAngle = angle;
        this.calculateB();
        this.xoff = random(1000);
        this.child = null;
    }

    wiggle() {
        this.selfAngle = map(noise(this.xoff), 0, 1, 1, -1);
        this.xoff += 0.03;
    }

    update() {
        this.angle = this.selfAngle;
        if (this.parent) {
            this.a = this.parent.b.copy();
            this.angle += this.parent.angle;
        } else {
            this.angle += - PI / 2;
        }
        this.calculateB();
    }

    calculateB() {
        const dx = this.len * cos(this.angle);
        const dy = this.len * sin(this.angle);
        this.b = new p5.Vector(this.a.x + dx, this.a.y + dy);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}