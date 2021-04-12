

class Branch {

    constructor(begin, end) {
        this.begin = begin;
        this.end = end;
        this.finished = false;
    }

    branch() {
        const dir = p5.Vector.sub(this.end, this.begin).mult(2 / 3);
        const ldir = dir.copy().rotate(- PI / 4);
        const rdir = dir.copy().rotate(PI / 4);
        const leftEnd = p5.Vector.add(this.end, ldir)
        const rightEnd = p5.Vector.add(this.end, rdir);
        const left = new Branch(this.end, leftEnd);
        const right = new Branch(this.end, rightEnd);
        return [left, right];
    }

    jitter() {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
    }

    show() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

}