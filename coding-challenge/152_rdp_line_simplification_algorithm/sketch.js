
// https://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm

/*
    Ramer-Douglas-Peucker Algorithm

        iterative end-point fit algorithm
        An algorithm that decimates a curve composed of line segments to
            a similar curve with fewer points.
        It was one of the earliest sucessful algorithms developed for 
            cartographic generalization.

        - Idea
            The purpose of the algorithm is, given a curve composed of line segments,
                to find a similar curve with fewer points.
            The algorithm defines 'dissimilar' based on the maximum distance between
                the original curve and the simplified curve (i.e. the Hausdorff distance).
            The simplified curve consists of a subset of the points that defined the original curve.

        - Algorithm

            The starting curve is an ordered set of points or lines and the distance dimension epsilon > 0.
            The algorithm recursively divides the line.
            Initially it is given all the points between the first and last point.
            It automatically marks the first and last point to be kept.
            It then finds the point that is farthest from the line segment with the first and last points
                as end points; this point is obviously farthest on the curve from the 
                approximating line segment between the end points.
            If the point is closer than epsilon to the line segment, then any points not currently marked
                to be kept can be discarded without the simplified curve being worse than epsilon.
            If the point farthest from the line segment is greater than epsilon from the approximation
                then that point must be kept.
            The algorithm recursively calls itself with the first point and the farthest point
                and then with the farthest point and the last point, which includes the farthest point
                being marked as kept.
            When the recursion is completed a new output curve can be generated consisting of 
                all and only those points that have been marked as kept.

            - Psudocode

            * assumes the input is a 1-based array
            function DouglasPeucker(PointList[], epsilon)

                // Find the point with the maximum distance
                dmax = 0
                index = 0
                end = length(PointList)
                for i = 2 to (end - 1) {
                    d = perpendicularDistance(PointList[i], Line(PointList[1], PointList[end]))
                    if (d > dmax) {
                        index = i
                        dmax = d
                    }
                }
                ResultList[] = empty;

                // If max distance is greater than epsilon, recursively simplify
                if (dmax > epsilon) {
                    // Recursive call
                    recResults1[] = DouglasPeucker(PointList[1...index], epsilon)
                    recResults2[] = DouglasPeucker(PointList[index...end], epsilon)

                    // Build the result list
                    ResultList[] = { recResults1[1...length(recResults1)-1], recResults2[1...length(recResults2)] }
                } else {
                    ResultList[] = { PointList[1], PointList[end] }
                }

                return ResultList[]

            end

*/

const allPoints = [];
let epsilon = 0;

function setup() {
    createCanvas(600, 400);
    allPoints.push(
        ...Array(width).fill(0)
        .map((_, i) => map(i, 0, width, 0, 5))  // xval
        .map(x => exp(-x) * cos(TWO_PI * x))    // yval
        .map(y => map(y, -1, 1, height, 0))
        .map((j, i) => createVector(i, j))
    );
}

function rdp(startIndex, endIndex, allPoints, rdpPoints) {
    const nextIndex = findFurthest(allPoints, startIndex, endIndex);
    if (nextIndex > 0) {
        if(startIndex !== nextIndex) {
            rdp(startIndex, nextIndex, allPoints, rdpPoints);
        }
        rdpPoints.push(allPoints[nextIndex]);
        if (endIndex !== nextIndex) {
            rdp(nextIndex, endIndex, allPoints, rdpPoints);
        }
    }
}

function findFurthest(points, a, b) {
    let recordDistance = -1;
    let furthestIndex = -1;
    const start = points[a];
    const end   = points[b];
    for (let i = a + 1; i < b; i++) {
        const currentPoint = points[i];
        const d = lineDist(currentPoint, start, end);
        if (d > recordDistance) {
            recordDistance = d;
            furthestIndex = i;
        }
    }
    if (recordDistance > epsilon) {
        return furthestIndex;
    } else {
        return -1;
    }
}

function lineDist(currentPoint, lineStart, lineEnd) {
    const norm = scalarProjection(currentPoint, lineStart, lineEnd);
    return p5.Vector.dist(currentPoint, norm);
}

function scalarProjection(currentPoint, lineStart, lineEnd) {
    const ap = p5.Vector.sub(currentPoint, lineStart);
    const ab = p5.Vector.sub(lineEnd, lineStart);
    ab.normalize();
    ab.mult(ap.dot(ab));
    return p5.Vector.add(lineStart, ab);
}

function draw() {
    background(51);
    const rdpPoints = [];
    const total = allPoints.length;
    const start = allPoints[0];
    const end   = allPoints[total-1];

    rdpPoints.push(start);
    rdp(0, total-1, allPoints, rdpPoints);
    rdpPoints.push(end);

    epsilon += 0.01;
    if (epsilon > 100) {
        epsilon = 0;
    }

    noFill();

    stroke(255, 0, 255);
    strokeWeight(4);
    beginShape();
    for (const v of allPoints) {
        vertex(v.x, v.y);
    }
    endShape();

    stroke(255);
    strokeWeight(2);
    beginShape();
    for (const v of rdpPoints) {
        vertex(v.x, v.y);
    }
    endShape();

    fill(255);
    noStroke();
    textSize(24);
    text('epsilon='+nf(epsilon, 2, 2), 20, 25);
    text('n='+rdpPoints.length, 20, 50);
}
