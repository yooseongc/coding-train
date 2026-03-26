

const stars = [];
let speed = 15;

let slider;
let p;

function setup() {
    createCanvas(600, 600);
    for (let i = 0; i < 800; i++) {
        stars[i] = new Star();
    }
    slider = createSlider(0, 50, speed, 1);
    p = createP('');
}

function draw() {
    // speed = map(mouseX, 0, width, 0, 50);
    speed = slider.value();
    p.html(`Speed: ${speed}`);
    
    background(0);
    translate(width / 2, height / 2);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
    
}
