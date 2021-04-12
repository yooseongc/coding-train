
class Rectangle {

    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    intersects(other) {
        const left1 = this.x;
        const right1 = this.x + this.w;
        const top1 = this.y;
        const bottom1 = this.y + this.h;

        const left2 = other.x;
        const right2 = other.x + other.w;
        const top2 = other.y;
        const bottom2 = other.y + other.h;

        return !(
            left1   >= right2  ||
            right1  <= left2   ||
            top1    >= bottom2 ||
            bottom1 <= top2
        );
    }

}