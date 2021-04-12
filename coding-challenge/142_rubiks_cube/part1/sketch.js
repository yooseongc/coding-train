
let cam;
let cube;

function createCube(dim, len) {
    const cubies = [];
    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            for (let k = 0; k < dim; k++) {
                const offset = (dim - 1) * len * 0.5;
                const x = len * i - offset;
                const y = len * j - offset;
                const z = len * k - offset;
                cubies.push(new Cubie(x, y, z, len));
            }
        }
    }
    return cubies;
}

function setup() {
    const canvas = createCanvas(600, 600, WEBGL);
    // disable right button
    canvas.elt.oncontextmenu = () => false;
    cam = createEasyCam({ distance: 400 });
    cube = createCube(3, 50);
}

function draw() {
    background(51);
    cube.forEach(cubie => cubie.show());
}
