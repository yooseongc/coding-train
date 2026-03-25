
class Snake {

    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(w / 2), floor(h / 2));
        this.xdir = 0;
        this.ydir = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        const head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    grow() {
        const head = this.body[this.body.length - 1].copy();
        this.body.push(head);
    }

    endGame() {
        const { x, y } = this.body[this.body.length - 1];
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        for (const part of this.body.slice(0, this.body.length-1)) {
            const { x: px, y: py } = part;
            if (px === x && py === y) {
                return true;
            }
        }
        return false;
    }

    eat({ x: fx, y: fy }) {
        const { x, y } = this.body[this.body.length - 1];
        if (x === fx && y === fy) {
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        fill(0);
        noStroke();
        for (const { x: px, y: py } of this.body) {
            rect(px, py, 1, 1);
        }
    }

}