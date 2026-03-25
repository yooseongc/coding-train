
class Tentacle {

    constructor(x, y) {
        this.segments = [];
        this.base = createVector(x, y);
        this.len = 50;
        this.segments[0] = new Segment(300, 200, this.len, 0);
        for (let i = 1; i < 5; i++) {
            this.segments[i] = this.segments[i-1].createParent();
        }
    }

    update() {
        const endIdx = this.segments.length - 1;
        const end = this.segments[endIdx];
        end.follow(pos.x, pos.y);
        end.update();
        for (let i = endIdx - 1; i >= 0; i--) {
            const prev = this.segments[i + 1];
            this.segments[i].follow(prev.a.x, prev.a.y);
            this.segments[i].update();
        }

        this.segments[0].a.set(this.base.x, this.base.y);
        this.segments[0].update();
        for (let i = 1; i <= endIdx; i++) {
            this.segments[i].a = this.segments[i-1].b.copy();
            this.segments[i].update();
        }

    }

    show() {
        this.segments.forEach(segment => segment.show());
    }

}
