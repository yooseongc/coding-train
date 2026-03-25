

function make2DArray(cols, rows) {
    const arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

const cols = 20;
const rows = 20;
const w = 10;
const particles = make2DArray(cols, rows);
const springs = [];
const showParticles = false;

let physics;

function setup() {
    createCanvas(400, 300);
    physics = new VerletPhysics2D();

    const gravity = new Vec2D(0, 1);
    const gravityBehavior = new GravityBehavior(gravity);
    physics.addBehavior(gravityBehavior);

    let x = 100;
    for (let i = 0; i < cols; i++) {
        let y = 10;
        for (let j = 0; j < rows; j++) {
            const p = new Particle(x, y);
            particles[i][j] = p
            physics.addParticle(p);
            y = y + w;    
        }
        x = x + w;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const a = particles[i][j];
            if (i != cols - 1) {
                const b1 = particles[i+1][j];
                const s1 = new Spring(a, b1);
                springs.push(s1);
                physics.addSpring(s1);
            }
            if (j != rows - 1) {
                const b2 = particles[i][j+1];
                const s2 = new Spring(a, b2);
                springs.push(s2);
                physics.addSpring(s2);
            }
        }
    }

    particles[0][0].lock();
    particles[cols - 1][0].lock();
}

function draw() {
    background(0);
    physics.update();

    if (showParticles) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                particles[i][j].display();
            }
        }
    }

    for (const s of springs) {
        s.display();
    }
    
}
