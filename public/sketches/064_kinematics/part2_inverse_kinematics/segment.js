
class Segment {
    
    constructor(point, len) {
        if (point instanceof Segment) {
            this.a = point.b.copy();
        } else {  // p5.Vector
            this.a = point;
        }
        
        this.b = new p5.Vector();
        this.len = len;
        this.angle = 0;
        this.strokeWeight = 1;
        this.calculateB();
        this.parent = null;
        this.child = null;
    }

    follow(targetX, targetY) {
        const target = new p5.Vector(targetX, targetY);
        const dir = p5.Vector.sub(target, this.a);
        this.angle = dir.heading();

        dir.setMag(this.len);
        dir.mult(-1);
        this.a = p5.Vector.add(target, dir);
    }

    update() {
        this.calculateB();
    }

    calculateB() {
        const dx = this.len * cos(this.angle);
        const dy = this.len * sin(this.angle);
        this.b.set(this.a.x + dx, this.a.y + dy);
    }

    show() {
        stroke(255);
        strokeWeight(this.strokeWeight);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}