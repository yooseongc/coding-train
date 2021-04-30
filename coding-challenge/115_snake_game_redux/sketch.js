
const cw = 400;
const ch = 400;
const rez = 20;
const w = Math.floor(cw / rez);
const h = Math.floor(ch / rez);

let snake;
let food;

function setup() {
    createCanvas(cw, ch);
    frameRate(5);
    snake = new Snake();
    foodLocation();
}

function foodLocation() {
    food = createVector(floor(random(w)), floor(random(h)));
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (key == ' ') {
        snake.grow();
    }
}

function draw() {
    scale(rez);
    background(220);
    if (snake.eat(food)) {
        foodLocation();
    }
    snake.update();
    snake.show();

    if (snake.endGame()) {
        print("END GAME");
        background(255, 0, 0);
        noLoop();
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}
