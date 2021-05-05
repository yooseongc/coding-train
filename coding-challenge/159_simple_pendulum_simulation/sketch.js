
// https://www.myphysicslab.com/pendulum/pendulum-en.html

const pendulums = [];
const spacing = 50;

const configuration = {
    gravity: 0.25,
    damping: 0.9999,
    reset: reset
};

function setup() {

    const gui = new dat.GUI();
    gui.add(configuration, 'gravity', 0.1, 1).step(0.01);
    gui.add(configuration, 'damping', 0.9, 1).step(0.0001);
    gui.add(configuration, 'reset');

    createCanvas(800, 600);
    const total = floor(height / spacing);
    for (let i = 1; i < total; i++) {
        pendulums.push(new Pendulum(width / 2, spacing, i * spacing, spacing / 4));
    }
}

function reset() {
    pendulums.forEach(pendulum => pendulum.reset());
}

function draw() {
    background(112, 50, 126, 100);
    pendulums.forEach(pendulum => pendulum.show());
    pendulums.forEach(pendulum => pendulum.update());
}
