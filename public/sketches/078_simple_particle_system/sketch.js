
const particles = [];

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    
    for (let i = 0; i < 5; i++) {
        particles.push(new Particle());
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].finished()) {
            particles.splice(i, 1);
        }
    }

}
