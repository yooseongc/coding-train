
class Connection {

    constructor(from, to, weight) {
        this.a = from;
        this.b = to;
        this.w = weight;
        this.sending = false;
        this.sender = createVector(0, 0);
        this.output = 0;
    }

    feedForward(value) {
        this.output = value * this.w;
        this.sender = this.a.position.copy();
        this.sending = true;
    } 

    update() {
        if (this.sending) {
            this.sender.x = lerp(this.sender.x, this.b.position.x, 0.1);
            this.sender.y = lerp(this.sender.y, this.b.position.y, 0.1);
            const d = p5.Vector.dist(this.sender, this.b.position);

            if (d < 1) {
                this.b.feedForward(this.output);
                this.sending = false;
            }
        }
    }

    show() {
        stroke(0);
        strokeWeight(this.w * 4);
        const { x: x1, y: y1 } = this.a.position;
        const { x: x2, y: y2 } = this.b.position;
        line(x1, y1, x2, y2);

        if (this.sending) {
            fill(0);
            strokeWeight(1);
            ellipse(this.sender.x, this.sender.y, 16, 16);
        }
        
        fill(0, 200);
        strokeWeight(1);
        textAlign(CENTER);
        textSize(12);
        text(nf(this.w, 1, 3), 
            (x1 + x2) / 2 - 20, 
            (y1 + y2) / 2 + ((y1 !== y2) ? (y1 > y2) ? 20 : -20 : 15));
    }

}
