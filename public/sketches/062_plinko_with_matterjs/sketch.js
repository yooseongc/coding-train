
// https://brm.io/matter-js/
// https://priceisright.fandom.com/wiki/Plinko

const Engine = Matter.Engine,
      World  = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies;

let engine;
let world;

let ding;

const cols = 11;
const rows = 10;

const particles = [];
const plinkos = [];
const bounds = [];

function preload() {
    ding = loadSound('ding.mp3');
}

function setup() {
    createCanvas(600, 700);
    colorMode(HSB);
    engine = Engine.create();
    world = engine.world;

    Events.on(engine, 'collisionStart', (event) => {
        for (const pair of event.pairs) {
            const { bodyA, bodyB } = pair;
            if (bodyA.label === 'particle' && bodyB.label === 'plinko') {
                //ding.play();
            }
            if (bodyA.label === 'plinko' && bodyB.label === 'particle') {
                //ding.play();
            }
        }
    });

    newParticle();
    const spacing = width / cols;
    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols + 1; i++) {
            const offset = (j % 2 === 0) ? spacing / 2 : 0;
            const x = offset + i * spacing;
            const y = spacing + j * spacing;
            plinkos.push(new Plinko(x, y, 16))    
        }
    }

    const bottom = new Boundary(width / 2, height + 50, width, 100);
    bounds.push(bottom);
    for (let i = 0; i < cols + 2; i++) {
        const x = i * spacing;
        const h = 100;
        const w = 10;
        bounds.push(new Boundary(x, height - h / 2, w, h))    
    }

}

function newParticle() {
    particles.push(new Particle(300, 0, 10));
}

function draw() {
    background(0, 0, 0);
    if (frameCount % 20 === 0) {
        newParticle();
    }
    Engine.update(engine, 1000 / 30);

    for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].isOffScreen()) {
            World.remove(world, particles[i].body);
            particles.splice(i, 1);
        }
    }

    for (const p of particles) {
        p.show();
    }
    for (const p of plinkos) {
        p.show();
    }
    for (const b of bounds) {
        b.show();
    }
}
