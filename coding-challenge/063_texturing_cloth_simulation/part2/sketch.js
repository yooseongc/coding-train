
let img;

const cols = 40;
const rows = 40;


const w = 10;

const springs = [];
const particles = new Array(cols).fill(0).map(col => new Array(rows).fill(0));

let physics;

let zoff = 0;

function preload() {
    img = loadImage('unikitty.jpg');
}

function setup() {
    createCanvas(800, 600, WEBGL);
    physics = new VerletPhysics2D();
    physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.1)));

    let x = - cols * w / 2 - 100;
    for (let i = 0; i < cols; i++) {
        let y = -rows * w / 2;
        for (let j = 0; j < rows; j++) {
            particles[i][j] = new Particle(x, y);
            physics.addParticle(particles[i][j]);
            y = y + w;
        }
        x = x + w;
    }

    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const a = particles[i][j];
            if (i != cols - 1) {
                const b1 = particles[i+1][j];
                const s1 = new Spring(a, b1, w, 1);
                springs.push(s1);
                physics.addSpring(s1);
            }
            if (j != rows - 1) {
                const b2 = particles[i][j+1];
                const s2 = new Spring(a, b2, w, 1);
                springs.push(s2);
                physics.addSpring(s2);
            }
        }
    }

    // particles[0].forEach(particle => particle.lock());

    particles[0][0].lock();
    particles[0][rows-1].lock();
}

function draw() {

    physics.update();

    background('skyblue');
    
    let xoff = 0;
    for (let i = 0; i < cols; i++) {
        let yoff = 0;
        for (let j = 0; j < rows; j++) {
            const windx = map(noise(xoff, yoff, zoff), 0, 1, 0, 3);
            const windy = map(noise(xoff+5000, yoff+5000, zoff), 0, 1, -0.5, 0);
            const windz = map(noise(xoff+3000, yoff+3000, zoff), 0, 1, -1, 1);
            const wind = new Vec2D(windx, windy);
            particles[i][j].addForce(wind);
            particles[i][j].z = windz;
            yoff += 0.1;
        }
        xoff += 0.1;
    }
    zoff += 0.1;

    textureMode(NORMAL);
    noFill();
    noStroke();
    for (let j = 0; j < rows - 1; j++) {
        beginShape(TRIANGLE_STRIP);
        texture(img);
        for (let i = 0; i < cols; i++) {
            const u = map(i, 0, cols - 1, 0, 1);
            const x1 = particles[i][j].x;
            const y1 = particles[i][j].y;
            const z1 = particles[i][j].z;
            const v1 = map(j, 0, rows - 1, 0, 1);
            vertex(x1, y1, z1, u, v1);
            const x2 = particles[i][j+1].x;
            const y2 = particles[i][j+1].y;
            const z2 = particles[i][j+1].z;
            const v2 = map(j+1, 0, rows - 1, 0, 1);
            vertex(x2, y2, z2, u, v2);
        }
        endShape();
    }

    push();
    fill(51);
    rect(-cols * w / 2 - 100 - 10, -rows * w / 2, 10, height);
    pop();
    
}   
