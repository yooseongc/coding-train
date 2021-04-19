
class RobotArm {

    constructor(x, y, numSegs, segLen, angle) {
        this.base = createVector(x, y);
        this.segs = [];
        this.segs[0] = new Segment(x, y, segLen, angle, 0);
        for (let i = 1; i < numSegs; i++) {
            this.segs.push(this.createParentSegment(segLen, 0));
        }
    }

    createParentSegment(len, angle) {
        const c = this.segs[this.segs.length - 1];
        const s = new Segment(0, 0, len, angle, this.segs.length);
        c.parent = s;
        s.follow(c.a.x, c.a.y);
        return s;
    }

    update() {
        for (let i = 0; i < this.segs.length; i++) {
            const seg = this.segs[i];
            if (i === 0) {
                seg.follow(mouseX, mouseY);
            } else {
                const previous = this.segs[i - 1];
                seg.follow(previous.a.x, previous.a.y);
            }
            seg.update();
        }

        const last = this.segs.length - 1;
        const lastSeg = this.segs[last];
        lastSeg.a.x = this.base.x;
        lastSeg.a.y = this.base.y;
        lastSeg.reCalculate();
        for (let i = last - 1; i >= 0; i--) {
            const seg = this.segs[i];
            const prev = this.segs[i + 1];
            seg.a.x = prev.b.x;
            seg.a.y = prev.b.y;
            seg.reCalculate();
        }
    }

    show() {
        this.segs.forEach(seg => seg.show());
    }

}