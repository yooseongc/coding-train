
class Face {

    constructor(normal, color) {
        this.normal = normal;
        this.color = color;
    }

    turnZ(angle) {
        this.normal = createVector(
            round(this.normal.x * cos(angle) - this.normal.y * sin(angle)),
            round(this.normal.x * sin(angle) + this.normal.y * cos(angle)),
            round(this.normal.z));
    }

    turnY(angle) {
        this.normal = createVector(
            round(this.normal.x * cos(angle) - this.normal.z * sin(angle)),
            round(this.normal.y),
            round(this.normal.x * sin(angle) + this.normal.z * cos(angle)));

    }

    turnX(angle) {
        this.normal = createVector(
            round(this.normal.x),
            round(this.normal.y * cos(angle) - this.normal.z * sin(angle)),
            round(this.normal.y * sin(angle) + this.normal.z * cos(angle))
        );
    }

    show() {
        push();
        fill(this.color);
        noStroke();
        rectMode(CENTER);
        translate(this.normal.x / 2, this.normal.y / 2, this.normal.z / 2);
        if (abs(this.normal.x) > 0) {
            rotateY(HALF_PI);
        } else if (abs(this.normal.y) > 0) {
            rotateX(HALF_PI);
        }
        square(0, 0, 1);
        pop();
    }

}