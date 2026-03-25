
class Frog extends Rectangle {
    
    constructor(x, y, w) {
        super(x, y, w, w);
        this.attached = null;
    }

    attach(log) {
        this.attached = log;
    }

    update() {
        if (this.attached) {
            this.x += this.attached.speed;
        }
        this.x = constrain(this.x, 0, width - this.w);
        this.y = constrain(this.y, 0, height - this.h);
    }

    move(xdir, ydir) {
        this.x += xdir * grid * 0.5;
        this.y += ydir * grid;
    }

    show() {
        fill(0, 255, 0, 200);
        rect(this.x, this.y, this.w, this.w);
    }


}