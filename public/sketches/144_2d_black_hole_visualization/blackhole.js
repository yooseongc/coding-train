
class Blackhole {

    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        this.rs = 2 * G * this.mass / (c * c);
        console.log('rs', this.rs);
    }

    pull(photon) {
        const force = p5.Vector.sub(this.pos, photon.pos);
        const theta = force.heading();
        const dist = force.mag();
        const fg = G * this.mass / (dist * dist);

        let deltaTheta = - fg * (dt / c) * sin(photon.theta - theta);
        deltaTheta /= abs(1.0 - 2.0 * G * this.mass / (dist * c * c));
        photon.theta += deltaTheta;
        photon.vel = p5.Vector.fromAngle(photon.theta);
        photon.vel.setMag(c);

        if (dist <= this.rs + 0.5) {
            photon.stop();
        }
    }

    show() {
        ellipseMode(RADIUS);

        // draw blackhole       
        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.rs);

        // draw accretion disk
        noFill();
        stroke(100, 100);
        strokeWeight(32);
        ellipse(this.pos.x, this.pos.y, this.rs * 3 - 16)

        // draw unstable photon orbit
        stroke(255, 150, 0, 100);
        strokeWeight(16);
        ellipse(this.pos.x, this.pos.y, this.rs * 1.5 - 8);
    }

}