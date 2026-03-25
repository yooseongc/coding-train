
// https://ko.wikipedia.org/wiki/%EB%A9%A9%EA%B1%B0_%EC%8A%A4%ED%8E%80%EC%A7%80
// https://en.wikipedia.org/wiki/Menger_sponge

/**
 * 1. Begin with a cube.
 * 2. Divide every face of the cube into nine squares, like Rubik's Cube.
 *    This sub-divides the cube into 27 smaller cubes.
 * 3. Remove the smaller cube in the middle of each face,
 *    and remove the smaller cube in the very center of the larger cube,
 *    leaving 20 smaller cubes.
 *    This is a (level-1) Menger sponge.
 * 4. Repeat steps two and three for each of the remaining smaller cubes,
 *    and continue to iterate ad infinitum.
 * 
 * 1D - Cantor Set
 * 2D - Sierpinski Carpet
 * 3D - Menger Sponge Cube
 */

let angle = 0;
let sponges = [];
let clickCount = 0;

function setup() {
    createCanvas(400, 400, WEBGL);
    normalMaterial();
    sponges.push(new Cube(0, 0, 0, 200));
}

function mousePressed() {
    if (clickCount < 3) {
        let newSponges = [];
        for (const sponge of sponges) {
            newSponges.push(...sponge.generate());
        }
        sponges = newSponges;
        clickCount += 1;
    }
    console.log('clickCount = ' + clickCount);
}

function draw() {
    background(51);
    rotateX(angle);
    rotateY(angle * 0.4);
    rotateZ(angle * 0.1);
    for (const sponge of sponges) {
        sponge.show();
    }
    angle += 0.01;
}
