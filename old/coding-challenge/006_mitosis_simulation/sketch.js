
const cells = [];

function setup() {
    createCanvas(700, 700);
    cells.push(new Cell(), new Cell());
}

function mousePressed() {
    for (let i = cells.length - 1; i >= 0; i--) {
        const cell = cells[i];
        if (cell.clicked(mouseX, mouseY)) {
            cells.push(cell.mitosis(), cell.mitosis());
            cells.splice(i, 1);
        }
    }
    console.log(cells);
}

function draw() {
    background(200);
    for (const cell of cells) {
        cell.move();
        cell.show();
    }
}
