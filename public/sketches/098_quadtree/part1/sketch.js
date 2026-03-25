

let qt;
function setup() {
    createCanvas(600, 600);
    
    const boundary = new Rectangle(300, 300, 300, 300);
    qt = new QuadTree(boundary, 4);
    console.log(qt);
    
    // for (let i = 0; i < 10; i++) {
    //     let p = new Point(random(width), random(height));
    //     qt.insert(p);
    // }
    for (let i = 0; i < 300; i++) {
        const x = randomGaussian(width / 2, width / 8);
        const y = randomGaussian(height / 2, height / 8);
        const p = new Point(x, y);
        qt.insert(p);
    }
}

function draw() {
    background(0);
    showQuadTree(qt);
    
    // if (mouseIsPressed) {
    //     let m = new Point(mouseX, mouseY);
    //     qt.insert(m);
    // }
    
    stroke(0, 255, 0);
    rectMode(CENTER);
    const range = new Rectangle(mouseX, mouseY, 75, 75);
    
    if (mouseX < width && mouseY < height) {
        rect(range.x, range.y, range.w * 2, range.h * 2);
        const points = qt.query(range);
        for (let p of points) {
            strokeWeight(4);
            point(p.x, p.y);
        }
    }
}
