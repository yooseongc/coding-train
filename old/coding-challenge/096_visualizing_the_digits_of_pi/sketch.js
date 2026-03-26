
// https://www.piday.org/million/
// http://mkweb.bcgsc.ca/pi/art/

let pi;
let digits;
let index = 0;

function preload() {
    pi = loadStrings('pi-1million.txt');
}

function setup() {
    createCanvas(420, 420);
    const sdigits = pi[0].split('');
    digits = int(sdigits);
    // console.log(digits);

    background(0);
    stroke(255);
    noFill();
    translate(width / 2, height / 2);
    ellipse(0, 0, 400, 400);
}

function draw() {
    translate(width / 2, height / 2);

    const digit = digits[index];
    const nextDigit = digits[index+1];
    index = index + 1;

    const diff = TWO_PI / 10;
    
    const a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
    const a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);

    const x1 = 200 * cos(a1);
    const y1 = 200 * sin(a1);
    const x2 = 200 * cos(a2);
    const y2 = 200 * sin(a2);

    stroke(255, 50);
    line(x1, y1, x2, y2);

    if (index > digits.length - 1) {
        noLoop();
        console.log('end!');
    }

}
