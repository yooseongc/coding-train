
// https://en.wikipedia.org/wiki/Tesseract
// https://ko.wikipedia.org/wiki/%EC%A0%95%ED%8C%94%ED%8F%AC%EC%B2%B4
// https://en.wikipedia.org/wiki/Rotation_matrix
// https://en.wikipedia.org/wiki/3D_projection
// https://www.youtube.com/watch?v=iGO12Z5Lw8s

/*

- Tesseract (4D hypercube)

  In geometry, the tesseract is the 4-D analogue of the cube;
    the tesseract is to the cube as the cube is to the square.
  Just as the surface of the cube consists of six square faces,
    the hypersurface of the tesseract consists of eight cubical cells.
  The tesseract is one of the six convex regular 4-polytopes.

  The tesseract is also called an eight-cell, C8, (regular) octachoron, octahedroid, cubic prism,
    and tetracube.
  It is the 4-D hypercube, or 4-cube as a part of the dimensional family of hypercubes or 
    measure polytopes.
  Coxeter labels it the gamma4 polytopes.
  The term 'hypercube' without a dimension reference is frequently treated as a synonym
    for this specific shape.

  According to the Oxford English Dictionary, 
    the word tesseract was coined and first used in 1888 by Charles Howard Hinton in his book 
    A New Era of Thought, from the Greek τέσσερις ἀκτίνες (tésseris aktínes, "four rays"), 
    referring to the four lines from each vertex to other vertices.

  한국어로는 정팔포체 또는 4차원 초입방체 : 8개의 정육면체로 이루어진 4차원의 정다포체.
*/

let angle = 0;

const points = [
    new P4Vector(-1, -1, -1,  1),
    new P4Vector( 1, -1, -1,  1),
    new P4Vector( 1,  1, -1,  1),
    new P4Vector(-1,  1, -1,  1),
    new P4Vector(-1, -1,  1,  1),
    new P4Vector( 1, -1,  1,  1),
    new P4Vector( 1,  1,  1,  1),
    new P4Vector(-1,  1,  1,  1),
    new P4Vector(-1, -1, -1, -1),
    new P4Vector( 1, -1, -1, -1),
    new P4Vector( 1,  1, -1, -1),
    new P4Vector(-1,  1, -1, -1),
    new P4Vector(-1, -1,  1, -1),
    new P4Vector( 1, -1,  1, -1),
    new P4Vector( 1,  1,  1, -1),
    new P4Vector(-1,  1,  1, -1)
];

function setup() {
    const size = min(windowWidth, windowHeight);
    createCanvas(size, size, WEBGL);
    createEasyCam({ distance: 500 });

}

function draw() {
    background(51);
    const projected3d = [];

    const rotationXY = [
        [cos(angle), -sin(angle), 0, 0],
        [sin(angle), cos(angle), 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
    ];

    const rotationZW = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, cos(angle), -sin(angle)],
        [0, 0, sin(angle), cos(angle)]
    ];

    for (let i = 0; i < points.length; i++) {
        const v = points[i];
        const rotated = matmul(rotationZW, matmul(rotationXY, v));
        const w = 1 / (2 - rotated.w);  // 2 : location of light on w axis
        const projectionMatrix = [[w, 0, 0, 0], [0, w, 0, 0], [0, 0, w, 0]];
        const projected = matmul(projectionMatrix, rotated);
        projected.mult(width / 8);

        projected3d[i] = projected;
        
        stroke(255, 200);
        strokeWeight(32);
        noFill();
        point(projected.x, projected.y, projected.z);
    }

    strokeWeight(4);
    stroke(255);

    // inner cube
    for (let i = 0; i < 4; i++) {
        connect(0, i, (i + 1) % 4, projected3d);
        connect(0, i + 4, ((i + 1) % 4) + 4, projected3d);
        connect(0, i, i + 4, projected3d);
    }

    // outer cube
    for (let i = 0; i < 4; i++) {
        connect(8, i, (i + 1) % 4, projected3d);
        connect(8, i + 4, ((i + 1) % 4) + 4, projected3d);
        connect(8, i, i + 4, projected3d);
    }

    // connect inner and outer cube vertices
    for (let i = 0; i < 8; i++) {
        connect(0, i, i + 8, projected3d);
    }

    angle += 0.02;

}

function connect(offset, i, j, points) {
    const a = points[i + offset];
    const b = points[j + offset];
    line(a.x, a.y, a.z, b.x, b.y, b.z);
}
