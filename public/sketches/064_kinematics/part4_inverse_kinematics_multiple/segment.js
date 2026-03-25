
class Segment {
    
    constructor(x, y, len, i) {
        this.i = i;
        this.angle = 0;
        
        this.a = createVector(x, y);
        this.b = createVector();
        this.len = len;
        this.calculateB();
    }

    createParent() {
        return new Segment(this.b.x, this.b.y, this.len, this.i+1);
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
        strokeWeight(4);
        line(this.a.x, this.a.y, this.b.x, this.b.y);
    }

}