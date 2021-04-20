
// https://en.wikipedia.org/wiki/Snakes_and_ladders
// https://ko.wikipedia.org/wiki/%EB%B1%80%EA%B3%BC_%EC%82%AC%EB%8B%A4%EB%A6%AC
// https://en.wikipedia.org/wiki/Absorbing_Markov_chain

/*
    뱀과 사다리
      - 2명 혹은 그 이상이 하는 보드게임으로, 영국에서 처음 출시.
      - 8x8, 10x10, 12x12칸 판이 사용됨.
      - 먼저 말을 준비하고 주사위 하나를 굴려 그 수만큼 더하여 해당하는 칸에 전진,
        뱀을 만나면 뱀을 따라 내려가고, 사다리를 만나면 사다리를 타고 올라감.
      - 보통 사다리에 해당하는 곳에는 행운이, 뱀에 해당하는 곤에는 불운이 일어남.
      - 칸의 끝에 도달하면 이김.

    Create a simulation of the classic board game Snakes & Ladders.

    Any version of snakes and ladders can be represented exactly as an absorbing Markov chain, 
     since from any square the odds of moving to any other square are fixed and
     independent of any previous game history.
    A player will need an average of 392 spins to move from the starting point, 
     which is off the board, to square 1,000.
    A two-player game is expected to end in 477.6 moves with a 50.9% chance of winning for the first player.


    Absorbing Markov chain : Markov chain in which every state can reach an absorbing state.
      An absorbing state is a state that, once entered, cannot be left.
*/

const resolution = 40;
const tiles = [];
let player;

const rolls = [];
let rollIndex = 0;
let averageRolls = 0;

const ROLL_STATE = 0;
const MOVE_STATE = 1;
const SNADDER_STATE = 2;
let state = ROLL_STATE;

let avgP;

function setup() {
    frameRate(5);
    createCanvas(400, 400);
    const cols = width / resolution;
    const rows = height / resolution;
    rolls[rollIndex] = 0;

    let x = 0;
    let y = (rows - 1) * resolution;
    let dir = 1;
    for (let i = 0; i < cols * rows; i++) {
        tiles.push(new Tile(x, y, resolution, i, i + 1));
        x += (resolution * dir);
        if (x >= width || x <= - resolution) {
            dir *= -1;
            x += resolution * dir;
            y -= resolution;
        }
    }

    // pick random snakes
    for (let i = 0; i < 3; i++) {
        const idx = floor(random(cols, tiles.length - 1))
        tiles[idx].snadder = -1 * floor(random(idx % cols, idx - 1));
    }

    // pick random ladders
    for (let i = 0; i < 3; i++) {
        const idx = floor(random(cols, tiles.length - cols))
        tiles[idx].snadder = floor(random(cols - (idx % cols), tiles.length - idx - 1));
    }

    player = new Player();
    avgP = createP('');
}

function draw() {
    background(51);

    for (const tile of tiles) {
        tile.show(tiles);
    }

    for (const tile of tiles) {
        tile.showSnadders();
    }

    // rolling the die
    if (state === ROLL_STATE) {
        player.rollDie();
        rolls[rollIndex]++;
        player.showPreview();
        state = MOVE_STATE;
    } else if (state === MOVE_STATE) {
        player.move();
        if (player.isSnadder()) {
            state = SNADDER_STATE;
        } else {
            state = ROLL_STATE;
        }
    } else if (state === SNADDER_STATE) {
        player.moveSnadder();
        state = ROLL_STATE;
    }

    player.show(tiles);

    if (player.spot >= tiles.length - 1) {
        state = ROLL_STATE;
        player.reset();
        rollIndex++;
        rolls[rollIndex] = 0;
    }

    averageRolls = rolls.reduce((a, c) => a + c) / (rolls.length);
    avgP.html(averageRolls);
    
}
