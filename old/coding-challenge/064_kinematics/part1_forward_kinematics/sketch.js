
/*
    Demonstrate forward kinematics

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

let tentacle;

function setup() {
    createCanvas(600, 400);

    const x = width / 2;
    const y = height;
    const pos = new p5.Vector(x, y);

    tentacle = new Segment(pos, 10, 0);

    let current = tentacle;
    for (let i = 0; i < 20; i++) {
        const next = new Segment(current, 10, 0);
        current.child = next;
        current = next;
    }
}

function draw() {
    background(51);

    let next = tentacle;
    while (next) {
        next.wiggle();
        next.update();
        next.show();
        next = next.child;
    }
}
