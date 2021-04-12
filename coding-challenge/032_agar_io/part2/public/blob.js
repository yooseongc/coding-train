

class Blob {

    constructor(x, y, r) {
        this.pos = createVector(x, y);
        this.r = r;
        this.vel = createVector(0, 0);
    }

    update() {
        const newvel = createVector(mouseX - width / 2, mouseY - height / 2);
        newvel.div(50);
        newvel.limit(3);
        // newvel.setMag(3);
        this.vel.lerp(newvel, 0.2);
        this.pos.add(this.vel);
    }

    eats(other) {
        const d = p5.Vector.dist(this.pos, other.pos);
        if (d < this.r + other.r) {
            const sum = PI * this.r * this.r + PI * other.r * other.r;
            this.r = sqrt(sum / PI);
            return true;
        }
        return false;
    }

    constrain() {
        this.pos.x = constrain(this.pos.x, -width/4, width/4);
        this.pos.y = constrain(this.pos.y, -height/4, height/4);
    }

    show() {
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }

}