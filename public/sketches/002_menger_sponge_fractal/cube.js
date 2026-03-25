
class Cube {

    constructor(x, y, z, r) {
        this.pos = createVector(x, y, z);
        this.r = r;
    }

    generate() {
        const cubes = [];
        const x = this.pos.x;
        const y = this.pos.y;
        const z = this.pos.z;
        for (let k = -1; k <= 1; k++) {
            for (let j = -1; j <= 1; j++) {
                for (let i = -1; i <= 1; i++) {
                    const sum = abs(i) + abs(j) + abs(k);
                    const newR = this.r / 3;
                    if (sum > 1) {
                        cubes.push(new Cube(x + i * newR, y + j * newR, z + k * newR, newR));
                    }
                }
            }
        }
        return cubes;
    }

    show() {
        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.r);
        pop();
    }

}