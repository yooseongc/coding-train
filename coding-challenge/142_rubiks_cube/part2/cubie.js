

class Cubie {

    constructor(x, y, z, idx) {
        this.idx = idx;
        this.update(x, y, z);
        this.faces = [
            new Face(createVector( 0,  0, -1), color(  0,   0, 255)),     // BACK   : BLUE
            new Face(createVector( 0,  0,  1), color(  0, 255,   0)),     // FRONT  : GREEN
            new Face(createVector( 0,  1,  0), color(255, 255, 255)),     // BOTTOM : WHITE
            new Face(createVector( 0, -1,  0), color(255, 255,   0)),     // TOP    : YELLOW
            new Face(createVector( 1,  0,  0), color(255, 150,   0)),     // RIGHT  : ORANGE
            new Face(createVector(-1,  0,  0), color(255,   0,   0))      // LEFT   : RED
        ];
    }

    update(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.m = new p5.Matrix();
        this.m.translate([x, y, z]);
    }

    turnFacesZ(dir) {
        this.faces.forEach(face => face.turnZ(dir * HALF_PI));
    }

    turnFacesY(dir) {
        this.faces.forEach(face => face.turnY(dir * HALF_PI));
    }

    turnFacesX(dir) {
        this.faces.forEach(face => face.turnX(dir * HALF_PI));
    }

    show() {
        noFill();
        stroke(0);
        strokeWeight(4);
        
        push();
        let idx = 0;
        const mat4 = this.m.mat4;
        applyMatrix(
            mat4[idx++],mat4[idx++],mat4[idx++],mat4[idx++],
            mat4[idx++],mat4[idx++],mat4[idx++],mat4[idx++],
            mat4[idx++],mat4[idx++],mat4[idx++],mat4[idx++],
            mat4[idx++],mat4[idx++],mat4[idx++],mat4[idx++]
        );
        box(1);
        this.faces.forEach(face => face.show());
        pop();
    }



}