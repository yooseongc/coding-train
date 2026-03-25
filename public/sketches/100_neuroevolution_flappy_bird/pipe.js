
class Pipe {

    constructor() {
        
        const spacing = 125;
        const centerY = random(spacing, height - spacing);
        
        this.top = centerY - spacing / 2;
        this.bottom = height - (centerY + spacing / 2);
        this.x = width;
        this.w = 80;
        this.speed = 6;  // it will move to left.
    }

    hits(bird) {
        // figure out bird hits this pipe.
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                return true;
            }
        }
        return false;
    }

    update() {
        this.x -= this.speed;
    }

    offscreen() {
        return (this.x < -this.w);
    }

    show() {
        // stroke(255);
        // fill(200);
        // rect(this.x, 0, this.w, this.top);                       // downward pipe from top
        // rect(this.x, height - this.bottom, this.w, this.bottom); // upward pipe from bottom
        push();
        translate(this.x + this.w / 2, height - this.bottom);
        this.drawHalf();
        translate(0, -125);
        rotate(PI);
        this.drawHalf();
        pop();
        
    }

    drawHalf() {
        const peakRatio = pipePeakSprite.height / pipePeakSprite.width;
        const bodyRatio = pipeBodySprite.height / pipeBodySprite.width;
        //this way we calculate, how many tubes we can fit without stretching
        const howManyNedeed = Math.round(height / (this.w * bodyRatio));
        //this <= and start from 1 is just my HACK xD But it's working
        for (let i = 0; i < howManyNedeed; ++i) {
            const offset = this.w * (i * bodyRatio + peakRatio);
            image(pipeBodySprite, -this.w / 2, offset, this.w, this.w * bodyRatio);
        }
        image(pipePeakSprite, -this.w / 2, 0, this.w, this.w * peakRatio);
    }

}
