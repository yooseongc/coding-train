
class Connection {

    constructor(from, to, weight) {
        this.a = from;
        this.b = to;
        this.w = weight;
    }

    show() {
        stroke(0);
        strokeWeight(this.w * 4);
        const { x: x1, y: y1 } = this.a.position;
        const { x: x2, y: y2 } = this.b.position;
        line(x1, y1, x2, y2);
        
        strokeWeight(1);
        textAlign(CENTER);
        textSize(16);
        text(nf(this.w, 1, 3), 
            (x1 + x2) / 2 - 20, 
            (y1 + y2) / 2 + ((y1 !== y2) ? (y1 > y2) ? 20 : -20 : 15));
    }

}
