
const p5 = require('node-p5');


function sketch(p) {

    let canvas;

    p.setup = () => {
        canvas = p.createCanvas(64, 64);
    };

    p.draw = () => {
        for (let i = 0; i < 3; i++) {
            p.background(255);
            p.push();
            const r = p.random(8 ,24);
            const x = p.random(r, p.width - r);
            const y = p.random(r, p.height - r);
            p.stroke(p.random(100), p.random(100), p.random(100));
            p.strokeWeight(4);
            p.translate(x, y);

            if (i === 0) {
                // draw circle
                p.circle(0, 0, r * 2);
                const name = `data/circle-${p.nf(p.frameCount, 4, 0)}`;
                p.saveCanvas(canvas, name, 'png').then(() => {
                    console.log('saved ' + name + '.png');
                }).catch(console.error);
            } else if (i === 1) {
                // draw square
                p.rectMode(p.CENTER);
                p.rotate(p.random(-0.1, 0.1));
                p.square(0, 0, r * 2);
                const name = `data/square-${p.nf(p.frameCount, 4, 0)}`;
                p.saveCanvas(canvas, name, 'png').then(() => {
                    console.log('saved ' + name + '.png');
                }).catch(console.error);
            } else if (i === 2) {
                // draw triangle
                p.rotate(p.random(-0.1, 0.1));
                p.triangle(0, -r, r, r, -r, r);
                const name = `data/triangle-${p.nf(p.frameCount, 4, 0)}`;
                p.saveCanvas(canvas, name, 'png').then(() => {
                    console.log('saved ' + name + '.png');
                }).catch(console.error);
            }
            p.pop();
        }

        if (p.frameCount === 500) {
            p.noLoop();
        }
    }
}

let p5Instance = p5.createSketch(sketch);