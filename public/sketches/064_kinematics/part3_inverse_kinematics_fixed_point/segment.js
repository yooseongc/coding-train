
class Segment {
    
    constructor(x, y, len, angle, id) {
        this.a = createVector(x, y);
        this.len = len;
        this.angle = angle;
        this.id = id;
        this.parent = null;
        this.reCalculate();
    }

    reCalculate() {
        const dx = this.len * cos(this.angle);
        const dy = this.len * sin(this.angle);
        this.b = createVector(this.a.x + dx, this.a.y + dy);
    }

    follow(targetX, targetY) {
        const target = createVector(targetX, targetY);
        const dir = p5.Vector.sub(target, this.a);
        this.angle = dir.heading();

        dir.setMag(this.len);
        dir.mult(-1);
        this.a = p5.Vector.add(target, dir);
    }

    update() {
        this.reCalculate();
    }

    show() {
        colorMode(HSB);
        const col = color(map(this.id, 0, 39, 0, 255), 255, 255);
        stroke(col);
        strokeWeight(4);
        line(this.a.x, this.a.y, this.b.x, this.b.y);

        colorMode(RGB);
        noStroke();
        fill(51);
        strokeWeight(2);
        ellipse(this.a.x, this.a.y, 2, 2);
        ellipse(this.b.x, this.b.y, 2, 2);
    }

}