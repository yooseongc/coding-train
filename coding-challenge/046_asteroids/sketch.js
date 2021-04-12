
// https://en.wikipedia.org/wiki/Asteroids_(video_game)
// Make the classic Atari video game Asteroids.

let ship;
const asteroids = [];
const lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (let i = 0; i < 5; i++) {
        asteroids.push(new Asteroid());
    }
}

function draw() {
    background(0);

    let hit = false;
    for (const asteroid of asteroids) {
        if (ship.hits(asteroid)) {
            console.log('ooops!');
            hit = true;
        }
        asteroid.render();
        asteroid.update();
        asteroid.edges();
    }

    for (let i = lasers.length - 1; i >= 0; i--) {
        const laser = lasers[i];
        laser.render();
        laser.update();
        if (laser.offscreen()) {
            lasers.splice(i, 1);
        } else {
            for (let j = asteroids.length - 1; j >= 0; j--) {
                const asteroid = asteroids[j];
                if (laser.hits(asteroid)) {
                    if (asteroid.r > 10) {
                        asteroids.push(...asteroid.breakup());
                    }
                    asteroids.splice(j, 1);
                    lasers.splice(i, 1);
                    break;
                }
            }
        }
    }

    ship.render(hit ? color(255, 0, 0) : 255);
    ship.turn();
    ship.update();
    ship.edges();
}

function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
}

function keyPressed() {
    if (key === ' ') {
        lasers.push(new Laser(ship.pos, ship.heading));
    } else if (keyCode === RIGHT_ARROW) {
        ship.setRotation(0.1);
    } else if (keyCode === LEFT_ARROW) {
        ship.setRotation(-0.1);
    } else if (keyCode === UP_ARROW) {
        ship.boosting(true);
    }
}
