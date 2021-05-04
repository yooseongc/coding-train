
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

const players = ['X', 'O'];

let currentPlayer;
const available = [];

function setup() {
    createCanvas(400, 400);
    frameRate(5);
    currentPlayer = floor(random(players.length));
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            available.push([i, j]);
        }
    }
}

function equals3(a, b, c) {
    return (a === b && b === c && a !== '');
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (equals3(board[i][0], board[i][1], board[i][2])) {
            return board[i][0];
        }
    }
    for (let i = 0; i < 3; i++) {
        if (equals3(board[0][i], board[1][i], board[2][i])) {
            return board[0][i];
        }
    }
    if (equals3(board[0][0], board[1][1], board[2][2])) {
        return board[0][0];
    }
    if (equals3(board[2][0], board[1][1], board[0][2])) {
        return board[2][0];
    }
    if (available.length === 0) {
        return 'tie';
    }
}

function nextTurn() {
    const idx = floor(random(available.length));
    const [i, j] = available.splice(idx, 1)[0];
    board[i][j] = players[currentPlayer];
    currentPlayer = (currentPlayer + 1) % players.length;
}

function draw() {
    background(220);
    const w = width / 3;
    const h = height / 3;
    strokeWeight(4);
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    // textSize(64);
    // textAlign(CENTER, CENTER);
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // text(board[i][j], w / 2 + w * i, h / 2 + h * j);
            const x = w * i + w / 2;
            const y = h * j + h / 2;
            const spot = board[i][j];
            if (spot === players[1]) {
                noFill();
                ellipse(x, y, w / 2);
            } else if (spot === players[0]) {
                const xr = w / 4;
                line(x - xr, y - xr, x + xr, y + xr);
                line(x + xr, y - xr, x - xr, y + xr);
            }
        }
    }

    const winner = checkWinner();
    if (winner) {
        noLoop();
        const p = createP('');
        p.style('font-size', '32pt');
        p.html((winner === 'tie') ? 'Tie!' : `${winner} wins!`); 
    } else {
        nextTurn();
    }
}
