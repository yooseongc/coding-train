
let tree = [];
let leaves = [];
let count = 0;

function setup() {
    createCanvas(400, 400);
    const a = createVector(width / 2, height);
    const b = createVector(width / 2, height - 100);
    const root = new Branch(a, b);
    tree[0] = root;
}

function mousePressed() {
    const newBranchs = [];
    for (const branch of tree) {
        if (!branch.finished) {
            newBranchs.push(...branch.branch());
        }
        branch.finished = true;
    }
    tree = tree.concat(newBranchs);
    count++;

    if (count === 6) {
        for (const branch of tree) {
            if (!branch.finished) {
                const leaf = branch.end.copy();
                leaves.push(leaf);
            }
        }
    }
    
}

function draw() {
    background(51);
    for (const branch of tree) {
        branch.show();
        branch.jitter();
    }
    for (const leaf of leaves) {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse(leaf.x, leaf.y, 8, 8);
        leaf.y += random(0, 2);
    }
}
