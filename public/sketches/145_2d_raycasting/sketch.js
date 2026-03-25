/**
* Implement a basic ray casting engine
*  with line segment "surfaces" and vector "rays".
* The result simulates a light source casting shadows in a 2D canvas.
*/

let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 1000;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i] = new Boundary(x1, x2, y1, y2);
    }
    walls.push(new Boundary(0, 0, width, 0));
    walls.push(new Boundary(width, 0, width, height));
    walls.push(new Boundary(0, height, width, height));
    walls.push(new Boundary(0, 0, 0, height));
    particle = new Particle();
}

function draw() {
    background(0);
    for (let wall of walls) {
        wall.show();
    }
    // particle.update(mouseX, mouseY);
    particle.update(noise(xoff) * width, noise(yoff) * width);
    particle.look(walls);
    particle.show();
    
    xoff += 0.01;
    yoff += 0.01;
    
}
