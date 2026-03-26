
let img;

const cols = 20;
const rows = 20;

const clothWidth = 300;
const clothHeight = 300;

const xSpacing = clothWidth / cols;
const ySpacing = clothHeight / rows;

const w = 10;

const springs = [];
const particles = new Array(cols).fill(0).map(col => new Array(rows).fill(0));

let physics;

let i0 = cols-1; // i near the mouse
let j0 = rows-1; // j near the mouse

function preload() {
    img = loadImage('unikitty.jpg');
}

function setup() {
    createCanvas(600, 600, WEBGL);
    physics = new VerletPhysics2D();
    physics.addBehavior(new GravityBehavior(new Vec2D(0, 0.5)));
    physics.setWorldBounds(new Rect(0, 0, width, height));

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            particles[i][j] = new Particle(width / 2 - clothWidth / 2 + i * xSpacing, j * ySpacing);
            physics.addParticle(particles[i][j]);
        }
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const a = particles[i][j];
            if (i != cols - 1) {
                const b1 = particles[i+1][j];
                const s1 = new Spring(a, b1, xSpacing, 0.1);
                springs.push(s1);
                physics.addSpring(s1);
            }
            if (j != rows - 1) {
                const b2 = particles[i][j+1];
                const s2 = new Spring(a, b2, ySpacing, 0.1);
                springs.push(s2);
                physics.addSpring(s2);
            }
        }
    }

    particles[0][0].lock();
    particles[cols - 1][0].lock();

}

function draw() {

    physics.update();

    background(51);

    if (mouseIsPressed) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const p = particles[i][j];
                if (abs(p.x - mouseX) < xSpacing && abs(p.y-mouseY) < ySpacing) {
                    i0 = i;
                    j0 = j;
                    break;
                }
            }
        }
        const clickedParticle = particles[i0][j0];
        clickedParticle.lock();
        clickedParticle.x = mouseX;
        clickedParticle.y = mouseY;
        clickedParticle.unlock();
    }
    
    translate(- width / 2, - height /2);
    textureMode(NORMAL);
    for (let j = 0; j < rows - 1; j++) {
        beginShape(TRIANGLE_STRIP);
        texture(img);
        for (let i = 0; i < cols; i++) {
            const u = map(i, 0, cols - 1, 0, 1);
            const x1 = particles[i][j].x;
            const y1 = particles[i][j].y;
            const v1 = map(j, 0, rows - 1, 0, 1);
            vertex(x1, y1, 0, u, v1);
            const x2 = particles[i][j+1].x;
            const y2 = particles[i][j+1].y;
            const v2 = map(j+1, 0, rows - 1, 0, 1);
            vertex(x2, y2, 0, u, v2);
        }
        endShape();
    }
}   
