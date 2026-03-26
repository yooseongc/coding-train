
let ship;
let flowers = [];
let drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    for (let i = 0; i < 6; i++) {
        flowers[i] = new Flower(i * 80 + 80, 60);
    }
}

function keyPressed() {
    if (key === ' ') {
        const drop = new Drop(ship.x, height);
        drops.push(drop);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setDir(-1);
    }
}

function keyReleased() {
    if (key !== ' ') {
        ship.setDir(0);
    }
}

function draw() {
    background(51);
    ship.show();
    ship.move();

    let edge = false;
    for (let i = 0; i < flowers.length; i++) {
        flowers[i].show();
        flowers[i].move();
        if (flowers[i].x > width || flowers[i].x < 0) {
            edge = true;
        }
    }

    if (edge) {
        for (let i = 0; i < flowers.length; i++) {
            flowers[i].shiftDown();
        }
    }

    for (let i = 0; i < drops.length; i++) {
        drops[i].move();
        drops[i].show();
        for (let j = 0; j < flowers.length; j++) {
            if (!drops[i].evaporated &&  drops[i].hits(flowers[j])) {
                flowers[j].grow();
                drops[i].evaporate();
            }
        }     
        if (drops[i].evaporated || drops[i].y < 0) {
            drops.splice(i, 1);
        }
    }
}
