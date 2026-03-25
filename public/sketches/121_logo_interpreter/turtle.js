

const commandLookUp = {
    fd: (amount) => turtle.forward(amount),
    bd: (amount) => turtle.forward(-amount),
    rt: (angle)  => turtle.right(angle),
    lt: (angle)  => turtle.right(-angle),
    pu: ()       => turtle.setPen(false),
    pd: ()       => turtle.setPen(true)
}

class Turtle {
    
    constructor(x, y, angle) {
        this.x = x; 
        this.y = y;
        this.dir = angle;
    }

    setPen(value) {
        this.pen = value;
    }

    reset() {
        translate(width / 2, height / 2);
        background(51);
        translate(this.x, this.y);
        rotate(this.dir);
        this.setPen(true);
    }

    forward(amount) {
        amount = parseInt(amount);
        if (this.pen) {
            stroke(255);
            strokeWeight(1);
            line(0, 0, amount, 0);
        }
        translate(amount, 0);
    }

    right(angle) {
        rotate(angle);
    }

}