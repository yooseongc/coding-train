
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

let tentacle;

function setup() {
    createCanvas(600, 400);

    const segNum = 100;
    const segLength = 3;
    const point = new p5.Vector(width / 2, height / 2);
    let current = new Segment(point, segLength);
    current.strokeWeight = 1;
    for (let i = 0; i < segNum; i++) {
        const next = new Segment(current, segLength);
        next.strokeWeight = map(i, 0, segNum, 1, 10);
        next.parent = current;
        current.child = next;
        current = next;
    }
    tentacle = current; // last one is tentacle 
}

function draw() {
    background(51);

    tentacle.follow(mouseX, mouseY);
    tentacle.update();
    tentacle.show();

    let next = tentacle.parent;
    while (next) {
        const target = next.child.a;
        next.follow(target.x, target.y);
        next.update();
        next.show();
        next = next.parent;
    }
}
