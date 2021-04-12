
// https://en.wikipedia.org/wiki/Phyllotaxis
// https://ko.wikipedia.org/wiki/%EC%9E%8E%EC%B0%A8%EB%A1%80
// http://algorithmicbotany.org/papers/abop/abop-ch4.pdf

/*
   Phyllotaxis : 잎차례(엽서) : 잎 배열의 규칙성
   the arrangement of leaves on a plant stem
   (from Ancient Greek phýllon "leaf" and táxis "arrangement")
   Phyllotactic spirals form a distinctive class of patterns in nature. 

    phi = n * 137.5 deg, r = c * sqrt(n)
      where n : index of floret, counting outward
            c : any constant (scale factor)
    137.5 deg --> related to golden ratio (also called golden mean, golden section)
*/

let n = 0;
let c = 3;
const points = [];
let start = 0;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    colorMode(HSB);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);  // move to center of screen
    
    // for each drawing frame, rotate 0.3n degrees (animation effect)
    rotate(n * 0.3);
    for (let i = 0; i < n; i++) {
        const a = i * 137.5;
        const r = c * sqrt(i);
        const x = r * cos(a);  // x coord in polar coordinates
        const y = r * sin(a);  // y coord in polar coordinates
        // const hu = map(sin(start + i * 0.5), -1, 1, 0, 360);  // color animation effect
        fill(a % 256, 255, 255);
        noStroke();
        ellipse(x, y, 4, 4);
    }
    n += 5;
    start += 5;
}
