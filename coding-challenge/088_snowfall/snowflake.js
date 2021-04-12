
function getRandomSize() {
    
    // method 1 : use two random numbers
    // while (true) {
    //     const r1 = random(1);
    //     const r2 = random(1);
    //     if (r2 > r1) {
    //         return r1 * 36;
    //     }
    // }
    
    // method 2 : use random gaussian
    // const r = randomGaussian() * 2.5;
    // return constrain(r * r, 2, 36);
    
    // method 3 
    const r = pow(random(0, 1), 3);
    return constrain(r * 32, 2, 32);
}

class Snowflake {
    
    constructor(sx, sy, img) {
        const x = sx || random(width);
        const y = sy || random(-100, -10);
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.r = getRandomSize();
        
        this.angle = random(TWO_PI);
        this.xOff = 0;
        this.dir = (random(1) > 0.5) ? 1 : -1;
    }
    
    applyForce(force) {
        // parallax Effect hack
        // 가까운 물체는 멀리 있는 물체보다 더 빠르게 움직이는 것으로 보이는 현상
        const f = force.copy();
        f.mult(this.r);
        this.acc.add(f);
    }
    
    update() {
        this.xOff = sin(this.angle * 2) * 2 * this.r;
        
        this.vel.add(this.acc);
        this.vel.limit(this.r * 0.2);
        if (this.vel.mag() < 1) {
            this.vel.normalize();
        }
        this.pos.add(this.vel);
        this.acc.mult(0);
        
        if (this.pos.y > height + this.r) {
            this.randomize();
        }
        
        // Wrapping Left and Right
        if (this.pos.x < - this.r) {
            this.pos.x = width + this.r;
        }
        if (this.pos.x > width + this.r) {
            this.pos.x = - this.r;
        }
        
        this.angle += this.dir * this.vel.mag() / 200;
    }
    
    randomize() {
        const x = random(width);
        const y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = getRandomSize();
    }   
    
    // offScreen() {
    //     return (this.pos.y > height + this.r);
    // }
    
    render() {
        // stroke(255);
        // strokeWeight(this.r);
        // point(this.pos.x, this.pos.y);
        push();
        translate(this.pos.x + this.xOff, this.pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.img, 0, 0, this.r, this.r);
        pop();
    }
    
}