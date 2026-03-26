
let particles = [];

function setup() {
    createCanvas(600, 400);
    for (let i = 0; i < 1000; i++) {
        particles[i] = new Particle(random(width), random(height));
    }
}

function draw() {
    background(0);
    const boundary = new Rectangle(300, 200, 600, 400);
    const qtree = new QuadTree(boundary, 4);

    for (let p of particles) {
        let point = new Point(p.x, p.y, p);
        qtree.insert(point);

        p.move();
        renderParticle(p);
        p.setHighlight(false);
    }

    for (let particle of particles) {
        const range = new Circle(particle.x, particle.y, particle.r * 2);
        const points = qtree.query(range);
        for (let point of points) {
            let other = point.userData; // particle
            if (particle !== other && particle.intersects(other)) {
                particle.setHighlight(true);
            }
        }
    }

    // showQuadTree(qtree);
    
}
