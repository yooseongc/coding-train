
// https://en.wikipedia.org/wiki/Gift_wrapping_algorithm
// https://ko.wikipedia.org/wiki/%EC%84%A0%EB%AC%BC_%ED%8F%AC%EC%9E%A5_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98

/*
    In computational geometry, the gift wrapping algorithm is an algorithm 
      for computing the convex hull of a given set of points.

    In the two-dimensional case the algorithm is also known as Jarvis march,
      after R. A. Jarvis, who published it in 1973; it has O(nh) time complexity, 
      where n is the number of points and h is the number of points on the convex hull.

    The gift wrapping algorithm begins with i=0 and a point p_0 known to be on the convex hull,
      e.g., the leftmost point, and selects the point p_(i+1) such that 
      all points are to the right of the line pi p_(i+1).
    This point may be found in O(n) time by comparing polar angles of all points 
      with respect to point p_i taken for the center of polar coordinates.
    Letting i=i+1, and repeating with until one reaches p_h=p_0 again yields the convex hull
      in h steps.
    In two dimensions, the gift wrapping algorithm is similar to the process 
      of winding a string (or wrapping paper) around the set of points.
    The approach can be extended to higher dimensions.

    algorithm jarvis(S) is
        // S is the set of points
        // P will be the set of points which form the convex hull.
        // Final set size is i
        pointOnHull = leftmost point in S    // which is guaranteed to be part of the CH(S)
        i := 0
        repeat
            P[i] := pointOnHull
            endpoint := S[0]            // initial endpoint for a candidate edge on the hull
            for j from 0 to |S| do
                // endpoint == pointOnHull is a rare case and can happen
                // only when j == 1 and a better endpoint has not yet been set for the loop
                if (endpoint == pointOnHull) or (S[j] is on left of line from P[i] to endpoint) then
                    endpoint := S[j]    // found greater left turn, update endpoint
            i := 1 + 1
            pointOnHull = endpoint
        until endpoint = P[0]           // wrapped around to first hull point

*/

const points = [];
const hull = [];

let leftMost;
let currentVertex;  // point on hull
let currentPoint;   // check each other point
let nextVertex;
let index = 0;

function setup() {
    createCanvas(500, 500);
    const buffer = 20;
    for (let i = 0; i < 50; i++) {
        points.push(createVector(random(buffer, width - buffer), random(buffer, height - buffer)));
    }

    points.sort((a, b) => a.x - b.x);
    leftMost = points[0];
    currentVertex = leftMost;
    hull.push(currentVertex);
    nextVertex = points[1];
    index = 2;
}

function draw() {
    background(51);

    // draw points
    stroke(255);
    strokeWeight(8);
    points.forEach(p => point(p.x, p.y));

    // draw hull
    stroke(0, 0, 255);
    fill(0, 0, 255, 50);
    strokeWeight(8);
    beginShape();
    hull.forEach(p => vertex(p.x, p.y));
    endShape(CLOSE);

    // draw leftmost
    stroke(0, 255, 0);
    strokeWeight(16);
    point(leftMost.x, leftMost.y);

    stroke(200, 0, 255);
    strokeWeight(16);
    point(currentVertex.x, currentVertex.y);

    stroke(0, 255, 0);
    strokeWeight(2);
    line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);

    const checking = points[index];
    stroke(255);
    strokeWeight(2);
    line(currentVertex.x, currentVertex.y, checking.x, checking.y);

    // use cross product of two vectors

    const a = p5.Vector.sub(nextVertex, currentVertex);
    const b = p5.Vector.sub(checking, currentVertex);
    const cross = a.cross(b);
    if (cross.z < 0) {
        nextVertex = checking;
    }
    index = index + 1;
    if (index === points.length) {
        if (nextVertex === leftMost) {
            return done();
        }
        hull.push(nextVertex);
        currentVertex = nextVertex;
        index = 0;
        nextVertex = points[index];
    }
}

function done() {
    noLoop();
    
    background(51);

    // draw points
    stroke(255);
    strokeWeight(8);
    points.forEach(p => point(p.x, p.y));

    // draw hull
    stroke(0, 0, 255);
    fill(0, 0, 255, 50);
    strokeWeight(8);
    beginShape();
    hull.forEach(p => vertex(p.x, p.y));
    endShape(CLOSE);

    console.log('finished');
}
