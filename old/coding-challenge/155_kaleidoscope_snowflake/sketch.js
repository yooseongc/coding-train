
let slider;
const symmetry = 6;
const angle = 360 / symmetry;
let xoff = 0;

let info = false;

function clearCanvas() {
    colorMode(RGB);
    background(255);
    stroke(0);
    strokeWeight(1);
    textSize(32);
    textAlign(CENTER);
    text('Draw something!', 0, 0 - textDescent());
    info = true;
}

function setup() {
    colorMode(HSB);
    createCanvas(800, 800);

    translate(width / 2, height / 2);
    clearCanvas();
    

    createButton('Save').mousePressed(() => {
        save('snowflake.png');
    });
    createButton('Clear').mousePressed(() => {
        clearCanvas();
    });
    createSpan(' stroke-width: ');
    slider = createSlider(1, 32, 4, 0.1);
    
}

function draw() {
    translate(width / 2, height / 2);
    colorMode(HSB);
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        const mx = mouseX - width / 2;
        const my = mouseY - height / 2;
        const pmx = pmouseX - width / 2;
        const pmy = pmouseY - height / 2;

        if (mouseIsPressed) {
            if (info) {
                colorMode(RGB);
                background(255);
                info = false;
            }
            const d = dist(mx, my, pmx, pmy);
            const hu = map(noise(xoff), 0, 1, 0, 1000);
            xoff += 0.1;
            stroke(hu % 256, 255, 255, 0.5);
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                const sw = map(d, 0, 20, slider.value(), 1);
                strokeWeight(sw);
                line(mx, my, pmx, pmy);
                push();
                scale(1, -1);
                line(mx, my, pmx, pmy);
                pop();
            }
        }
    }

}
