
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

let robotArm;
const segLen = 15;
const numSegs = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);

    robotArm= new RobotArm(width / 2, height, numSegs, segLen, 0);
    robotArm.update();
}

function draw() {
    background(51);

    robotArm.update();
    robotArm.show();
}
