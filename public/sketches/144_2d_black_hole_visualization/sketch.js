// https://www.asc.ohio-state.edu/orban.14/stemcoding/blackhole.html

/*
 radius of event horizon => r_s (Schwarzchild radius) = 2 * G * M / c^2
 c(speed of light) ~ 3e8 m/s, G(Gravitational Constant) ~ 6.67e-11, M(Mass of Blackhole)
 
 light shadow radius ~ 2.6 * r_s

 simulate blackhole visualization using Newtonian gravity
*/

const c = 30;
const G = 2;
const dt = 0.1;

let M87;

const particles = [];
let start, end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    M87 = new Blackhole(width / 2, height / 2, 10000);

    start = height / 2;
    end = height / 2 - M87.rs * 2.6;

    for (let y = 0; y < start; y += 5) {
        particles.push(new Photon(width - 20, y));
    }
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(1);
    line(0, start, width, start);
    line(0, end, width, end);

    for (let p of particles) {
        M87.pull(p);
        p.update();
        p.show();
    }
    M87.show();
}
