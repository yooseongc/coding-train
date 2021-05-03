
// https://mathworld.wolfram.com/HeartCurve.html

// x = 16 sin^3(t) 
// y = 13cos(t) - 5cos(2t) - 2cos(3t) - cos(4t)


function heartCurve(p, t) {
    const x = 16 * p.pow(p.sin(t), 3);
    const y = 13 * p.cos(t) - 5 * p.cos(2 * t) - 2 * p.cos(3 * t) - p.cos(4 * t);
    return p.createVector(x, y);
}

function setupGif(callback) {
    gif = new GIF({ workers: 2, quality: 40, workerScript: 'libraries/gif.worker.js' });
    gif.on('finished', (blob) => {
        callback();
        window.open(URL.createObjectURL(blob));
        setupGif(callback);
    });
    return gif;
}

const part1Sketch = function (p) {

    let width, height;
    const r = 10;
    const heartCurves = [];
    let angle = 0;

    p.setup = () => {
        const container = p.select('#part1-canvas');
        const canvas = p.createCanvas(400, 400);
        canvas.parent(container);
        const restartBtn = p.createButton('Restart').parent(container);
        restartBtn.mouseClicked(() => {
            heartCurves.length = 0;
            angle = 0;
            p.loop();
        });
        width = p.width;
        height = p.height;
        
    };

    p.draw = () => {
        p.background(51);
        p.translate(width / 2, height / 2);
        p.scale(1, -1);
        p.stroke(255);
        p.strokeWeight(4);
        p.fill(150, 0, 100);

        heartCurves.push(heartCurve(p, angle).mult(r));

        p.beginShape();
        for (const curve of heartCurves) {
            p.vertex(curve.x, curve.y);
        }
        p.endShape();

        if (angle > p.TWO_PI) {
            p.noLoop();
        }
        angle += 0.1;
    };
};

const part2Sketch = function (p) {

    let width, height;
    const heartCurves = [];
    const totalFrame = 240;
    let counter = 0;
    let recording = false;
    let recordingInProgress = false;
    let gif;
    let canvas;
    let button;
    let recordingFrame = 0;

    p.setup = () => {
        const container = p.select('#part2-canvas');
        canvas = p.createCanvas(400, 400);
        canvas.parent(container);
        width = p.width;
        height = p.height;

        button = p.createButton('Save to GIF');
        button.parent(container);
        button.mouseClicked(() => {
            button.attribute('disabled', '');
            button.html('Recording...');
            recordingInProgress = false;
            recordingFrame = 0;
            recording = true;
        });
        gif = setupGif(() => {
            recordingFrame = 0;
            recording = false;
            button.removeAttribute('disabled');
            button.html('Save to GIF');
        });
    }
       

    p.draw = () => {
        const beat = (counter++ % totalFrame) / totalFrame;
        p.background(51);
        p.translate(width / 2, height / 2);
        p.scale(1, -1);
        p.stroke(255, 0, 200);
        p.strokeWeight(4);
        p.fill(150, 0, 100);

        if (beat < 0.5) {
            const angle = p.map(beat, 0, 0.5, 0, p.TWO_PI);
            heartCurves.push(heartCurve(p, angle));
        } else {
            heartCurves.splice(0, 1);
        }
        

        p.beginShape();
        for (const curve of heartCurves) {
            const angle = p.map(beat, 0, 1, 0, p.TWO_PI * 2);
            const r = p.map(p.sin(angle), -1, 1, height / 70, height / 35);
            p.vertex(r * curve.x, r * curve.y);
        }
        p.endShape();

        if (recording && beat === 0) {
            recordingInProgress = true;
            gif.addFrame(canvas.elt, { delay: 1, copy: true });
            recordingFrame++;
        } 
        if (recording && recordingInProgress) {
            recordingFrame++;
            gif.addFrame(canvas.elt, { delay: 1, copy: true });
            if (recordingFrame === totalFrame) {
                recordingInProgress = false;
                recording = false;
                gif.render();
            }
        }
    };

};

const part1 = new p5(part1Sketch);
const part2 = new p5(part2Sketch);
