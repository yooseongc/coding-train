

let logo;
let x, y, xspeed, yspeed;
let r, g, b;

function preload() {
    logo = loadImage('dvd_logo.png');
}

function pickColor() {
    return [random(100, 256), random(100, 256), random(100, 256)];
}

function bounce() {
    if (x + logo.width >= width) {
        xspeed = -xspeed;
        x = width - logo.width;
        [r, g, b] = pickColor();
    } else if (x <= 0) {
        xspeed = -yspeed;
        x = 0;
        [r, g, b] = pickColor();
    }
    if (y + logo.height >= height) {
        yspeed = -yspeed;
        y = height - logo.height;
        [r, g, b] = pickColor();
    } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
        [r, g, b] = pickColor();
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    x = random(width);
    y = random(height);
    xspeed = 5;
    yspeed = 5;
    [r, g, b] = pickColor();
}

function draw() {
    background(0);
    tint(r, g, b); // 이미지의 면채우기 값 설정 (이미지에 색조를 입힘)
    image(logo, x , y);

    x = x + xspeed;
    y = y + yspeed;
    
    bounce();
}
