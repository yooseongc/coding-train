
// UP, DOWN, RIGHT, LEFT, FRONT, BACK
const UPP = 0;
const DWN = 1;
const RGT = 2;
const LFT = 3;
const FRT = 4;
const BCK = 5;

const colors = [
  '#FFFFFF',
  '#FFFF00',
  '#FFA500',
  '#FF0000',
  '#00FF00',
  '#0000FF'
];

class Cubie {

    constructor(x, y, z, len) {
        this.pos = createVector(x, y, z);
        this.len = len;
    }

    show() {
        fill(255);
        stroke(0);
        strokeWeight(8);
        
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        const r = this.len / 2;

        // https://p5js.org/ko/reference/#/p5/beginShape
        
        // z-fixed
        beginShape();
        fill(colors[BCK]);
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(-r, r, -r);
        endShape(CLOSE);

        beginShape();
        fill(colors[FRT]);
        vertex(-r, -r, r);
        vertex(r, -r, r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);

        // y-fixed
        beginShape();
        fill(colors[DWN]);
        vertex(-r, -r, -r);
        vertex(r, -r, -r);
        vertex(r, -r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[UPP]);
        vertex(-r, r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(-r, r, r);
        endShape(CLOSE);

        // x-fixed
        beginShape();
        fill(colors[LFT]);
        vertex(-r, -r, -r);
        vertex(-r, r, -r);
        vertex(-r, r, r);
        vertex(-r, -r, r);
        endShape(CLOSE);

        beginShape();
        fill(colors[RGT]);
        vertex(r, -r, -r);
        vertex(r, r, -r);
        vertex(r, r, r);
        vertex(r, -r, r);
        endShape(CLOSE);
        
        pop();
    }



}