
/*
    Demonstrate inverse kinematics

    Kinematics
    https://en.wikipedia.org/wiki/Kinematics

    Kinematics is a subfield of physics, developed in classical mechanics, that describes
        the motion of points, bodies, and systems of bodies without considering
        the forces that cause them to move.
    Kinematics, as a field of study, is often referred to as the "geometry of motion"
        and is occasionally seen as a branch of mathematics.
    A kinematics problem begins by describing the geometry of the system and
        declaring the initial conditions of any known values of position, velocity and/or 
        acceleration of points within the system. Then, using arguments from geometry,
        the position, velocity and acceleration of any unknown parts of the system can be determined.
    The study of how forces act on bodies falls within kinetics, not kinematics.

*/

const tentacles = [];

let pos;
let vel;
let gravity;

function setup() {
    createCanvas(800, 600);
    pos = createVector(0, 0);
    vel = createVector(2, 1.3);
    gravity = createVector(0, 0.1);
    vel.mult(3);

    let da = TWO_PI / 2;
    for (let a = 0; a < TWO_PI; a += da) {
        const x = width / 2 + cos(a) * 300;
        const y = height / 2 + sin(a) * 300;
        tentacles.push(new Tentacle(x, y));
    }
}

function draw() {
    background(51);
    noFill();
    tentacles.forEach(tentacle => {
        tentacle.update();
        tentacle.show();
    });

    pos.add(vel);
    vel.add(gravity);
    noStroke();
    fill(100, 255, 0);
    ellipse(pos.x, pos.y, 32, 32);

    if (pos.x > width || pos.x < 0) {
        vel.x *= -1;
    }
    if (pos.y > height) {
        pos.y = height;
        vel.y *= -1;
        vel.mult(0.99);
    }
}
