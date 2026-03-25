


class NoiseLoop {

    constructor(diameter, min, max) {
        this.diameter = diameter;
        this.min = min; 
        this.max = max;
        this.cx = Math.random(1000);
        this.cy = Math.random(1000);
    }

    value(p, angle) {
        const xoff = p.map(p.cos(angle), -1, 1, this.cx, this.cx + this.diameter);
        const yoff = p.map(p.sin(angle), -1, 1, this.cy, this.cy + this.diameter);
        const r = p.noise(xoff, yoff);
        return p.map(r, 0, 1, this.min, this.max);
    }

}

class Particle {

    constructor(p) {
        const { width, height } = p;
        this.xNoise = new NoiseLoop(0.5, -width, width * 2);
        this.yNoise = new NoiseLoop(0.5, -height, height * 2);
        this.dNoise = new NoiseLoop(7, 10, 120);
        this.rNoise = new NoiseLoop(7, 100, 255);
        this.bNoise = new NoiseLoop(7, 100, 255);
    }

    render(p, angle) {
        p.noStroke();
        p.fill(this.rNoise.value(p, angle), 50, this.bNoise.value(p, angle), 200);
        p.ellipse(this.xNoise.value(p, angle), this.yNoise.value(p, angle), this.dNoise.value(p, angle));
    }

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
    let slider;
    let phase = 0;
    let zoff = 0;

    p.setup = () => {
        const container = p.select('#part1-canvas');
        const canvas = p.createCanvas(400, 400);
        canvas.parent(container);
        slider = p.createSlider(0, 10, 3, 0.1);
        slider.parent(container);
        width = p.width;
        height = p.height;
        
    };

    p.draw = () => {
        p.background(51);
        p.translate(width / 2, height / 2);
        p.stroke(255);
        p.strokeWeight(2);
        p.noFill();

        const noiseMax = slider.value();
        p.beginShape();
        for (let angle = 0; angle < p.TWO_PI; angle += p.radians(5)) {
            const xoff = p.map(p.cos(angle + phase), -1, 1, 0, noiseMax);
            const yoff = p.map(p.sin(angle + phase), -1, 1, 0, noiseMax);
            const r = p.map(p.noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
            p.vertex(r * p.cos(angle), r * p.sin(angle));
        }
        p.endShape(p.CLOSE);

        phase += 0.003;
        zoff += 0.01;
    };
};

const part2Sketch = function (p) {

    let particles;
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

        particles = new Array(100).fill(0).map(_ => new Particle(p));
    }
       

    p.draw = () => {

        p.background(51);

        const percent = (counter++ % totalFrame) / totalFrame;
        const angle = percent * p.TWO_PI;
        particles.forEach(particle => particle.render(p, angle));
        
        if (recording && percent === 0) {
            recordingInProgress = true;
            gif.addFrame(canvas.elt, { delay: 1000 / p.frameRate(), copy: true });
            recordingFrame++;
        } 
        if (recording && recordingInProgress) {
            recordingFrame++;
            gif.addFrame(canvas.elt, { delay: 1000 / p.frameRate(), copy: true });
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
