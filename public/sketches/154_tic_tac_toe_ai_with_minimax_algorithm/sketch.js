
// https://www.youtube.com/watch?v=l-hh51ncgDI
// https://en.wikipedia.org/wiki/Minimax

/*
    Minimax (MinMax, MM, or saddle point) is a decision rule used in AI, 
        decision theory, game theory, statistics, and philosophy 
        for minimizing the possible loss for a worst case (maximum loss) scenario.

    When dealing with gains, it is referred to as 'maximin' - to maximize the minimum gain.

    Originally formulated for n-player zero-sum game theory, covering both the cases
        where players take alternate moves and those where they make simultaneous moves,
        it has also been extended to more complex games and to general decision-making
        in the presence of uncertainty.

    
    In combinatorial game theory, there is a minimax algorithm for game solutions.

    A simple version of the minimax algorithm deals with games such as tic-tac-toe, 
        where each player can win, lose, or draw.
    If player A can win in one move, their best move is that winning move.
    If player B knows that one move will lead to the situation where player A can win
        in one move, while another move will lead to the situation where player A can, at best,
        draw, then player B's best move is teh one leading to a draw.
    Late in the game, it's easy to see what the 'best' move is.
    The Minimax algorithm helps find the best move, by working backwards from the end of the game.
    At each step it assumes that player A is trying to maximize the changes of A winning, 
        while on the next turn player B is trying to minimize the changes of A winning. 
        (i.e., to mazimize B's own chances of winning.)

    A minimax algorithm is a recursive algorithm for choosing the next move in an n-player game, 
        usually a two-player game.
    A value is associated with each position or state of the game.
    This value is computed by means of a position evaluation function and it indicates 
        how good it would be for a player to reach that position.
    The player then makes the move that maximizes the minimum value of the position 
        resulting from the opponent's possible following moves. 
    If it is A's turn to move, A gives a value to each of their legal moves.

    The performance of the naïve minimax algorithm may be improved dramatically, 
        without affecting the result, by the use of alpha–beta pruning.
    Other heuristic pruning methods can also be used, 
        but not all of them are guaranteed to give the same result as the un-pruned search.



    Pseudocode

    function minimax(node, depth, maximizingPlayer) is
        if depth = 0 or node is a terminal node then
            return the heuristic value of node
        if maximizingPlayer then
            value := −∞
            for each child of node do
                value := max(value, minimax(child, depth − 1, FALSE))
            return value
        else (* minimizing player *)
            value := +∞
            for each child of node do
                value := min(value, minimax(child, depth − 1, TRUE))
            return value

    (* Initial call *)
    minimax(origin, depth, TRUE)
*/

const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let w, h;

const ai = 'X';
const human = 'O';
let currentPlayer;


function setup() {
    createCanvas(400, 400);
    w = width / 3;
    h = height / 3;
    currentPlayer = ai;
    bestMove();
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

    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }
    if (openSpots === 0) {
        return 'tie';
    }
}


function mousePressed() {
    if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
    if (currentPlayer === human) {
        const i = floor(mouseX / w);
        const j = floor(mouseY / h);
        if (board[i][j] === '') {
            board[i][j] = human;
            currentPlayer = ai;
            bestMove();
        }
    }
}


function draw() {
    background(255);
    strokeWeight(4);

    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            // text(board[i][j], w / 2 + w * i, h / 2 + h * j);
            const x = w * i + w / 2;
            const y = h * j + h / 2;
            const spot = board[i][j];
            if (spot === human) {
                noFill();
                ellipse(x, y, w / 2);
            } else if (spot === ai) {
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
    } 
}

