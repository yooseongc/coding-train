
// https://en.wikipedia.org/wiki/Frogger
// https://froggerclassic.appspot.com/

/*
    row8 : empty
    row5 ~ row7 : river with logs
    row4 : empty
    row1 ~ row3 : road with cars
    row0 : start


    Frogger is a 1981 arcade game developed by KONAMI and manufactured by SEGA.
*/

let frog;
const cars = [];
const logs = [];
const grid = 50;

function resetGame() {
    frog = new Frog(width / 2 - grid / 2, height - grid, grid);
    frog.attach(null);
}

function setup() {
    createCanvas(500, 450);
    resetGame();

    // draw cars (row1~3)
    for (let i = 0; i < 2; i++) {
        cars.push(new Car(i * 300, height - grid * 2, grid * 2, grid, 2));
    }
    for (let i = 0; i < 2; i++) {
        cars.push(new Car(i * 200 + 150, height - grid * 3, grid * 2, grid, -3.5));
    }
    for (let i = 0; i < 4; i++) {
        cars.push(new Car(i * 150 + 25, height - grid * 4, grid * 2, grid, 1.2));
    }
    
    // draw logs
    for (let i = 0; i < 2; i++) {
        logs.push(new Log(i * 250 + 100, height - grid * 6, grid * 3, grid, 2.3));
    }
    for (let i = 0; i < 3; i++) {
        logs.push(new Log(i * 200 + 30, height - grid * 7, grid * 2, grid, -1.3));
    }
    for (let i = 0; i < 2; i++) {
        logs.push(new Log(i * 400 + 10, height - grid * 8, grid * 4, grid, 0.5));
    }
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        frog.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        frog.move(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        frog.move(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        frog.move(-1, 0);
    }
}

function draw() {
    background(0);
    noStroke();

    // draw safety lines
    fill(100, 150 ,50, 100);
    rect(0, height - grid, width, grid);     // row0
    rect(0, height - grid * 5, width, grid); // row4
    rect(0, 0, width, grid);                 // row8
    
    // draw road
    fill(150);
    rect(0, height - grid * 4, width, grid * 3); // row1-3

    // draw cars
    for (const car of cars) {
        car.update();
        car.show();
        if (frog.intersects(car)) {
            resetGame();
        }
    }

    // draw river
    fill(50, 150, 255, 100);
    rect(0, grid, width, grid * 3); // row1-3

    for (const log of logs) {
        log.update();
        log.show();
    }

    if (frog.y < height - grid * 5 && frog.y > grid) {
        let ok = false;
        for (const log of logs) {
            if (frog.intersects(log)) {
                ok = true;
                frog.attach(log);
            }
        }
        if (!ok) {
            resetGame();           
        }
    } else {
        frog.attach(null);
    }

    frog.update();
    frog.show();
}
