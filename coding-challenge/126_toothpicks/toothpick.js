
class Toothpick {

    constructor(x, y, dir) {
        this.dir = dir;
        if (dir === 1) {
            // horizontal toothpick
            this.ax = x - len / 2;
            this.bx = x + len / 2;
            this.ay = y;
            this.by = y;
        } else {
            // horizontal toothpick
            this.ay = y - len / 2;
            this.by = y + len / 2;
            this.ax = x;
            this.bx = x;
        }
        this.newPick = true;
    }

    intersects(x, y) {
        return (this.ax === x && this.ay === y) || (this.bx === x && this.by === y);
    }

    createA(others) {
        for (const other of others) {
            if (other === this) continue;
            if (other.intersects(this.ax, this.ay)) return null;
        }
        return new Toothpick(this.ax, this.ay, this.dir * -1);
    }

    createB(others) {
        for (const other of others) {
            if (other === this) continue;
            if (other.intersects(this.bx, this.by)) return null;
        }
        return new Toothpick(this.bx, this.by, this.dir * -1);
    }

    show(factor) {
        stroke(this.newPick ? color(0, 0, 255) : 0);
        strokeWeight(1 / factor);
        line(this.ax, this.ay, this.bx, this.by);
    }

}