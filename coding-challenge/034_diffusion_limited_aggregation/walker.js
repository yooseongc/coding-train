
function randomPoint() {
    const i = floor(random(4));
    if (i === 0) {
        return createVector(random(width), 0);
    } else if (i === 1) {
        return createVector(random(width), height);
    } else if (i === 2) {
        return createVector(0, random(height));
    } else {
        return createVector(width, random(height));
    }
}

function distSq(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return dx * dx + dy * dy;
}

class Walker {
    
    constructor(x, y) {
        if (arguments.length == 2) {
            this.pos = createVector(x, y);
            this.stuck = true;
        } else {
            this.pos = randomPoint();
            this.stuck = false;
        }
        this.r = radius;
    }
    
    walk() {
        this.pos.add(p5.Vector.random2D());
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);
    }
    
    checkStuck(others) {
        for (const other of others) {
            const d = distSq(this.pos, other.pos);
            if (d < (this.r*this.r + other.r*other.r)) {
                this.stuck = true;
                return true;
            }
        }
        return false;
    }
    
    setHue(hu) {
        this.hu = hu;
    }
    
    show() {
        noStroke();
        if (this.stuck && this.hu) {
            fill(this.hu, 255, 100, 200);
        } else {
            fill(360, 0, 255);
        }
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
    
}