
// https://github.com/golanlevin/circle-morphing

/*
    Computational interpolations from a circle-to-a-square,
      and circle-to-a-triangle using p5.js

    ## Some Ways of Transforming a Circle into a Square

    * by progressively deleting all points except for the square's corners
    * by approximating a circle with four Bezier cubic splines and modulating the spline control points
    * by approximating a circle with four circular arcs whose radii lengthen to infinity
    * by linearly interpolating points on the circle towards points on the square, along radii of the circle
    * by progressively moving points evenly sampled along the circle, towards points on the square, resampled at equal intervals, by small random amounts
    * by treating it as a rounded rect, whose (rounded) corners have a dynamic radius
    * by treating it as a multisided polygon whose number of sides gradually decreases to four
    * by gradually flattening the circle on four sides
    * by gradually shrinking the circle's radius, revealing square corners within
    * by treating points along the perimeter as a series of springy particles
    * by considering it as a set of alternating straight lines and arcs in which the arcs shrink while the lines grow
    * by using a 'superellipse' formula
    * by progressively subdividing it into a 4-gon, 8-gon, 16-gon, 32-gon, etc., with smooth interpolations.
    * by abruptly moving points evenly sampled along the circle, towards corresponding points on the square

    ## Some Ways of Transforming a Circle into a Triangle

    * by sampling a circle into many vertices, and then locally averaging each point with its neighbors, except for the three special corner vertices.
    * by progressively deleting all points except for the triangle's corners
    * by approximating a circle with three Bezier cubic splines and modulating the spline control points
    * by approximating a circle with three circular arcs whose radii lengthen to infinity
    * by linearly interpolating points on the circle towards points on the triangle, along radii of the circle
    * by progressively moving points evenly sampled along the circle, towards points on the triangle, resampled at equal intervals, by small random amounts
    * by treating it as a rounded triangle, whose (rounded) corners have a dynamic radius
    * by treating it as a multisided polygon whose number of sides gradually decreases to three
    * by gradually flattening the circle on three sides
    * by gradually shrinking the circle's radius, revealing triangular corners within
    * by treating points along the perimeter as a series of springy particles
    * by considering it as a set of alternating straight lines and arcs in which the arcs shrink while the lines grow
    * by treating the form as a series of 6 circular arcs, alternatingly with small and large radii
    * by progressively subdividing it into a 3-gon, 6-gon, 12-gon, 24-gon, etc., with smooth interpolations.
    
    
    
*/

const circlePath = [];
const spacing = 2;

function polarToCartesian(r, angle) {
    return createVector(r * cos(angle), r * sin(angle));
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    const radius = 200;
    let i = 0;
    for (let angle = 0; angle < 360; angle += spacing) {
        const cp = polarToCartesian(radius, angle);
        cp.active = true;
        if (angle % 120 === 0) {
            cp.fixed = true;
        }
        circlePath.push(cp);
    }
}

function draw() {
    background(220);
    translate(width / 2, height / 2);
    rotate(30);

    stroke(0);
    strokeWeight(2);
    noFill();

    beginShape();
    for (const path of circlePath) {
        if (path.active) {
            vertex(path.x, path.y);
        }
    }
    endShape(CLOSE);

    const activeList = [];
    for (const path of circlePath) {
        if (path.active && !path.fixed) {
            activeList.push(path);
        }
    }

    let index = 0;
    const v = activeList[index];
    if (v) {
        v.active = false;
    }
}
