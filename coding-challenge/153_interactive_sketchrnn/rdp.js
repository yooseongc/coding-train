
const epsilon = 5;

function rdp(startIndex, endIndex, allPoints, rdpPoints) {
    const nextIndex = findFurthest(allPoints, startIndex, endIndex);
    if (nextIndex > 0) {
        if (startIndex !== nextIndex) {
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
    const end = points[b];
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
