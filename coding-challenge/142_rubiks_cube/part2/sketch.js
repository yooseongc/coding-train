
// https://editor.p5js.org/zl25drexel/sketches/9K3PnFQQ_


let cam;
let cube;
let text;

let counter = 0;
let currentMove;
const sequence = [];
const ALLMOVES = [
    new Move(0, 1, 0, 1),
    new Move(0, 1, 0, -1),
    new Move(0, -1, 0, 1),
    new Move(0, -1, 0, -1),
    new Move(1, 0, 0, 1),
    new Move(1, 0, 0, -1),
    new Move(-1, 0, 0, 1),
    new Move(-1, 0, 0, -1),
    new Move(0, 0, 1, 1),
    new Move(0, 0, 1, -1),
    new Move(0, 0, -1, 1),
    new Move(0, 0, -1, -1)];

function randomInt(max) {
    return Math.floor(Math.random() * max);
}

function createCube() {
    const cubies = [];
    for (let x = -1; x <= 1; x++) {          // from left to right
        for (let y = -1; y <= 1; y++) {      // from down to up
            for (let z = -1; z <= 1; z++) {  // from back to front 
                cubies.push(new Cubie(x, y, z, cubies.length))
            }
        }
    }
    return cubies;
}

function turnZ(idx, dir) {
    for (const cubie of cube) {
        if (cubie.z === idx) {  // only cubies of z has a specific index,
            const m = new p5.Matrix();
            m.rotate(dir * HALF_PI, [0, 0, 1]);
            m.translate([cubie.x, cubie.y, 0]);
            cubie.update(m.mat4[12], m.mat4[13], cubie.z);
            cubie.turnFacesZ(dir);

        }
    }
}

function turnY(idx, dir) {
    for (const cubie of cube) {
        if (cubie.y === idx) {  // only cubies of z has a specific index,
            const m = new p5.Matrix();
            m.rotate(dir * HALF_PI, [0, -1, 0]);
            m.translate([cubie.x, 0, cubie.z]);
            cubie.update(m.mat4[12], cubie.y, m.mat4[14]);
            cubie.turnFacesY(dir);
        }
    }
}

function turnX(idx, dir) {
    for (const cubie of cube) {
        if (cubie.x === idx) {  // only cubies of z has a specific index,
            const m = new p5.Matrix();
            m.rotate(dir * HALF_PI, [1, 0, 0]);
            m.translate([0, cubie.y, cubie.z]);
            cubie.update(cubie.x, m.mat4[13], m.mat4[14]);
            cubie.turnFacesX(dir);
        }
    }
}

function setup() {
    text = createDiv("<h2>Press space key to start!</h2>")
    text.id("text");
    const canvas = createCanvas(600, 600, WEBGL);
    // disable right button
    canvas.elt.oncontextmenu = () => false;
    cam = createEasyCam({ distance: 400 });
    
    // make cube
    cube = createCube();
    // make sequence
    const reverseSequence = [];
    for (let i = 0; i < 20; i++) {
        const move = ALLMOVES[randomInt(ALLMOVES.length)];
        sequence.push(move);
        const reverseMove = move.copy();
        reverseMove.reverse();
        reverseSequence.push(reverseMove);
    }
    reverseSequence.reverse();
    sequence.push(...reverseSequence);
    
    counter = 0;
    currentMove = sequence[counter];
}

function keyPressed() {
    if (key === ' ') {
        if (counter === 0) {  // play
            currentMove = sequence[counter];
            currentMove.start();
        } else if (counter === sequence.length - 1) {
            counter = 0;
            currentMove = sequence[counter];
            currentMove.start();
        }
    } else { // manual action
        manualMove(key);
    }
}

function manualMove(key) {
    switch (key) {
        case '1': turnZ(-1,  1); break;
        case '2': turnZ( 1,  1); break;
        case '3': turnY(-1,  1); break;
        case '4': turnY( 1,  1); break;
        case '5': turnX(-1,  1); break;
        case '6': turnX( 1,  1); break;
        case '!': turnZ(-1, -1); break;
        case '@': turnZ( 1, -1); break;
        case '#': turnY(-1, -1); break;
        case '$': turnY( 1, -1); break;
        case '%': turnX(-1, -1); break;
        case '^': turnX( 1, -1); break;
    }
}

function draw() {
    background(51);
    // debugMode();  // x: red, y: green, z: blue
    scale(50);
    rotateX(-0.5);
    rotateY(0.5);
    rotateZ(0.1);
    currentMove.update();
    if (currentMove.finished) {
        if(counter < sequence.length - 1){
            counter++;
            currentMove = sequence[counter];
            currentMove.start();
            text.html("<h2>"+(counter+1)+"</h2>");
        }
    }
    cube.forEach(cubie => {
        push();
        if (abs(cubie.z) > 0 && cubie.z == currentMove.z) {
            rotateZ(currentMove.angle);
        } else if (abs(cubie.x) > 0 && cubie.x == currentMove.x) {
            rotateX(currentMove.angle);
        } else if (abs(cubie.y) > 0 && cubie.y == currentMove.y) {
            rotateY(-currentMove.angle);
        }
        cubie.show();
        pop();
    });
}
