
class Branch {

    constructor(parent, pos, dir) {
        this.pos = pos;
        this.parent = parent;
        this.dir = dir;
        this.origDir = this.dir.copy();
        this.count = 0;
        this.len = 5;
    }

    reset() {
        this.dir = this.origDir.copy();
        this.count = 0;
    }

    next() {
        const nextDir = p5.Vector.mult(this.dir, this.len);
        const nextPos = p5.Vector.add(this.pos, nextDir);
        return new Branch(this, nextPos, this.dir.copy());
    }

    show() {
        if (this.parent) {
            stroke(255);
            line(this.pos.x, this.pos.y, this.pos.z, 
                this.parent.pos.x, this.parent.pos.y, this.parent.pos.z);
        }
    }

}