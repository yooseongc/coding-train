
class Tile {
    
    constructor(x, y, wh, index, next) {
        this.x = x;
        this.y = y;
        this.wh = wh;
        this.index = index;
        this.next = next;
        this.snadder = 0;

        // checkboard pattern
        this.color = (index % 2 === 0) ? 200 : 100;
    }

    center() {
        return { x: this.x + this.wh / 2, y: this.y + this.wh / 2 };
    }

    show() {
        noStroke();
        fill(this.color);
        rect(this.x, this.y, this.wh, this.wh);
    }

    highlight() {
        fill(0, 0, 255, 100);
        noStroke();
        rect(this.x, this.y, this.wh, this.wh);
    }

    showSnadders() {
        if (this.snadder !== 0) {
            const myCenter = this.center();
            const nextCenter = tiles[this.index + this.snadder].center();
            strokeWeight(4);
            if (this.snadder < 0) {
                stroke(255, 0, 0, 200); // ladder
            } else {
                stroke(0, 255, 0, 200); // snake
            }
            line(myCenter.x, myCenter.y, nextCenter.x, nextCenter.y);
        }
    }

}