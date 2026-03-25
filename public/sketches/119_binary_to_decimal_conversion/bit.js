
class Bit {

    constructor(x, y, w) {
        this.x = x;
        this.y = y;
        this.diameter = w;
        this.state = 0;
    }

    setState(state) {
        this.state = parseInt(state, 10);
    }

    toggle(x, y) {
        const d = dist(x, y, this.x, this.y);
        if (d < this.diameter / 2) {
            this.state = (this.state + 1) % 2;
            return true;
        }
        return false;
    }

    show() {
        stroke(255);
        fill(255 * this.state);
        ellipse(this.x, this.y, this.diameter);
    }

}