
const process = require('process');
const p5 = require('node-p5');

let theta;
let a = 0;

if (process.argv[2]) {
    a = Number(process.argv[2]);
    console.log('a=' + process.argv[2]);
}

function sketch(p) {
    p.setup = () => {
        const canvas = p.createCanvas(640, 360);
        p.background(51);
        p.stroke(255);
        theta = p.radians(a);
        p.translate(p.width / 2, p.height);
        p.line(0, 0, 0, -120);
        p.translate(0, -120);
        branch(p, 120);
        p.saveCanvas(canvas, 'tree', 'png').then(() => {
            console.log('saved canvas as tree.png');
        }).catch(console.error);
        p.noLoop();
    }
}

function branch(p, h) {
    // Each branch will be 2/3rds the size of the previous one
    h *= 0.66;

    // All recursive functions must have an exit condition!!!!
    // Here, ours is when the length of the branch is 2 pixels or less
    if (h > 2) {
        p.push();
        p.rotate(theta);
        p.line(0, 0, 0, -h);
        p.translate(0, -h);
        branch(p, h);
        p.pop();

        p.push();
        p.rotate(-theta);
        p.line(0, 0, 0, -h);
        p.translate(0, -h);
        branch(p, h);
        p.pop();
    }
}

let p5Instance = p5.createSketch(sketch);