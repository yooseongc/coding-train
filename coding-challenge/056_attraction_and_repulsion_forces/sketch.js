

// Attractor : a single vector
// Particles  : attract to the attractor 
// gravitational force F = G * m1 * m2 / d * d
// attraction force F1 = Constant / d * d
// repulsion force F2 = - Constant / d * d

const particles = [];
const attractors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    // for (let i = 0; i < 100; i++) {
    //     // particles.push(new Particle(random(width), random(height)));
    //     particles.push(new Particle(200, 200));
    // }
    // for (let i = 0; i < 10; i++) {
    //     attractors.push(createVector(random(width), random(height)));
    // }
}

function mousePressed() {
    attractors.push(createVector(mouseX, mouseY));
}

function draw() {
    background(51);
    stroke(255);
    strokeWeight(4);
    particles.push(new Particle(random(width), random(height)));
    if (particles.length > 100) {
        particles.splice(0, 1);
    }

    for (const attractor of attractors) {
        stroke(0, 255, 0);
        point(attractor.x, attractor.y);
    }
    for (const particle of particles) {
        for (const attractor of attractors) {
            particle.attracted(attractor);
        }
        particle.update();
        particle.show();
    }
    
}
