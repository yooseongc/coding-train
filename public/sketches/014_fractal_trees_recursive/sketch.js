
// fractal trees using recursion
// function calls itself inside function.

let angle = 0;
let slider;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    
    if (len > 4) {
        push();
        rotate(angle);
        branch(len * 0.67);
        pop();
        push();
        rotate(-angle);
        branch(len * 0.67);
        pop();
    }
    
}

function draw() {
    angle = slider.value();
    background(51);
    stroke(255);
    translate(200, height);
    branch(100);
}
