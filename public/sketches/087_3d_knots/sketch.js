
// 3D knots
// https://en.wikipedia.org/wiki/Knot_theory
// http://paulbourke.net/geometry/knots/

/*

    There are a whole family of curves including knots which are formed by the equations:
        x = r * cos(phi) * cos(theta)
        y = r * cos(phi) * sin(theta)
        z = r * sin(phi)

    which are the equations for converting from polar to Cartesian coordinates
      except that we make r, theta, phi 
      a function of a parameter beta which ranges from 0 to pi.

    For the following
        r(beta) = 0.8 + 1.6 * sin(6 * beta)
        theta(beta) = 2 * beta
        phi(beta) = 0.6 * pi * sin(12 * beta)
*/

const vectors = [];
let beta = 0;

function setup() {
    createCanvas(600, 400, WEBGL);
    
}

function draw() {
    
    if (beta <= PI) {
        const r = 100 * (0.8 + 1.6 * sin(6 * beta));
        const theta = 2 * beta;
        const phi = 0.6 * PI * sin(12 * beta);
        const x = r * cos(phi) * cos(theta);
        const y = r * cos(phi) * sin(theta);
        const z = r * sin(phi);
        vectors.push(createVector(x, y, z));
        beta += 0.01;
    }
    orbitControl();
    background(0);
    noFill();
    stroke(255);
    strokeWeight(8);
    beginShape();
    for (const v of vectors) {
        vertex(v.x, v.y, v.z);
    }
    endShape();
}
