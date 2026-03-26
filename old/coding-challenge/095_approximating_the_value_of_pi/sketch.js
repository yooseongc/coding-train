
/*
    Using a 'Monte Carlo' method 
      to approximate the value of PI

    - the circumference of a circle with radius r = 2 * PI * r
    - the area of a circle with radius r = PI * r * r

    - the area of a square with side 2r = 4 * r * r
    
    - 정사각형(2r)에 랜덤으로 점을 찍어서
      전체 점 수 중 원(r) 안에 들어간 점의 수를 세어보자.
    - 이론상 전체 중 원 안에 들어간 점의 수의 비율은 
      (PI * r * r) / ( 4 * r * r) = PI / 4 가 될 것임.
    - 이를 이용해서 PI의 값을 추론.

*/

const r = 200;
let total = 0;
let circle = 0;
let resultP;

function drawBackground() {
    push();
    translate(width / 2 , height / 2);
    stroke(0, 255, 0);
    strokeWeight(5);
    noFill();
    ellipse(0, 0, 2 * r);
    rectMode(CENTER);
    stroke(0, 255, 0);
    rect(0, 0, 2 * r ,2 * r);
    pop();
}

function setup() {
    createCanvas(400, 400);
    background(0);
    drawBackground();

    resultP = createP('Approximated Value: ');
}

function draw() {

    push();
    translate(width / 2 , height / 2);
    strokeWeight(2);
    for (let i = 10000; i >= 0; i--) {
        const x = random(-r, r);
        const y = random(-r, r);
        const d = dist(0, 0, x, y);
        if (d < r) {
            circle++;
            stroke(0, 0, 255);
        } else {
            stroke(255, 0, 0);
        }
        total++;
        point(x, y);
    }
    pop();

    drawBackground();
    const pi = 4 * (circle / total);
    resultP.html(`Approximated Value: ${pi}`);

}
