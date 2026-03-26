
// https://en.wikipedia.org/wiki/Diffusion-limited_aggregation

/* 
Diffusion-limited aggregation (DLA)

DLA is the process whereby particles undergoing a random walk
due to Brownian motion cluster together to from aggregates of 
such particles.
The clusters formed in DLA processes are referred to as Brownian trees.
These clusters are an example of a fractal.

Brownian tree is a form of computer art that was briefly popular
in the 1990s, when home computers started to have sufficient power
to simulate Brownian motion.
Brownian trees are mathematical models of dendritic structures
associated with the physical process known as DLA.

A Brownian tree is built with these steps:
1. a "seed" is placed somewhere on the screen.
2. a particle is placed in a random position of the screen,
and moved randomly until it bumps against the seed.
3. The particle is left there, and another particle is placed
in a random position and moved until it bumps against 
the seed or any previous particle, and so on.

The resulting tree ca have many different shapes, depending on 
principally three factors:
- the seed position
- the initial particle position
- the moving algorithm 
*/

const tree = [];
const walkers = [];
const maxWalker = 50;
const iterations = 1000;
let radius = 8;
let hu = 0;
const shrink = 0.995;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB);
    tree.push(new Walker(width / 2, height / 2));
    for (let i = 0; i < maxWalker; i++) {
        walkers.push(new Walker());
        radius *= shrink;
    }
}

function draw() {
    background(0);
    
    for (const t of tree) {
        t.show();
    }
    for (const w of walkers) {
        w.show();
    }
    
    for (let n = 0; n < iterations; n++) {
        for (let i = walkers.length - 1; i >= 0; i--) {
            walkers[i].walk();
            if (walkers[i].checkStuck(tree)) {
                walkers[i].setHue(hu % 360);
                hu += 2;
                tree.push(walkers[i]);
                walkers.splice(i, 1);
            }
        }
    }
    

    while (walkers.length < maxWalker && radius > 1) {
        walkers.push(new Walker());
        radius *= shrink;
    }
}
