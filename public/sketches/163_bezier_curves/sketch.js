

const basic = new p5(p => {

    let container;
    let canvas;

    p.setup = () => {
        container = p.select('#basic');
        canvas = p.createCanvas(600, 600);
        canvas.parent(container);
    }

    p.draw = () => {
        p.background(0);

        p.stroke(255);
        p.strokeWeight(24);

        p.point(0, 300);
        p.point(p.mouseX, p.mouseY);
        p.point(400, 400);
        p.point(600, 300);

        p.strokeWeight(4);
        p.noFill();
        p.bezier(0, 300, p.mouseX, p.mouseY, 400, 400, 600, 300);

        p.strokeWeight(2);
        p.line(0, 300, p.mouseX, p.mouseY);
        p.line(400, 400, 600, 300);
    }
});

const bezierVertex = new p5(p => {

    let container;
    let canvas;

    p.setup = () => {
        container = p.select('#bezier-vertex');
        canvas = p.createCanvas(600, 600);
        canvas.parent(container);
    };

    p.draw = () => {
        p.background(0);

        p.stroke(255);
        p.strokeWeight(4);
        p.fill(127);
        p.beginShape();
        p.vertex(0, 300);
        p.bezierVertex(p.mouseX, p.mouseY, 400, 400, 600, 300);
        p.bezierVertex(400, 600, 200, 100, 0, 300);
        p.endShape();

    };
});

const quadraticBezier = new p5(p => {

    let container;
    let canvas;
    let p0, p1, p2;

    p.setup = () => {
        container = p.select('#quadratic-bezier');
        canvas = p.createCanvas(600, 600);
        canvas.parent(container);
        p0 = p.createVector(0, 300);
        p1 = p.createVector(300, 0);
        p2 = p.createVector(600, 300);
    };

    p.draw = () => {

        p.background(0);
        const delta = 0.05;
        
        p1.x = p.mouseX;
        p1.y = p.mouseY;

        p.noFill();
        p.colorMode(p.HSB);
        p.strokeWeight(4);
        for (let t = 0; t <= 1.0001; t += delta) {
            const x1 = p.lerp(p0.x, p1.x, t);
            const y1 = p.lerp(p0.y, p1.y, t);
            const x2 = p.lerp(p1.x, p2.x, t);
            const y2 = p.lerp(p1.y, p2.y, t);
            const x = p.lerp(x1, x2, t);
            const y = p.lerp(y1, y2, t);
            p.stroke(t * 360, 255, 255);
            p.line(x1, y1, x2, y2);
            p.point(x, y);
        }

    };
});

const cubicBezier = new p5(p => {



    let container;
    let canvas;

    p.setup = () => {
        container = p.select('#cubic-bezier');
        canvas = p.createCanvas(600, 600);
        canvas.parent(container);
        p0 = new Particle(0, p.height / 2);
        p1 = new Particle(p.width / 4, 0);
        p2 = new Particle((3 * p.width) / 4, p.height);
        p3 = new Particle(p.width, p.height / 2);
    };

    function quadratic(p0, p1, p2, t) {
        const x1 = p.lerp(p0.x, p1.x, t);
        const y1 = p.lerp(p0.y, p1.y, t);
        const x2 = p.lerp(p1.x, p2.x, t);
        const y2 = p.lerp(p1.y, p2.y, t);
        const x = p.lerp(x1, x2, t);
        const y = p.lerp(y1, y2, t);
        p.line(x1, y1, x2, y2);
        return p.createVector(x, y);
    } 

    function cubic(p0, p1, p2, p3, t) {
        const v1 = quadratic(p0, p1, p2, t);
        const v2 = quadratic(p1, p2, p3, t);
        const x = p.lerp(v1.x, v2.x, t);
        const y = p.lerp(v1.y, v2.y, t);
        p.line(v1.x, v1.y, v2.x, v2.y);
        return p.createVector(x, y);
    }

    p.draw = () => {

        p.background(0);

        p1.update();
        p2.update();

        let delta = 0.03;
        p.colorMode(p.HSB);

        p.noFill();
        for (let t = 0; t <= 1.0001; t += delta) {
            p.stroke(t * 360, 255, 255, 0.5);
            p.strokeWeight(2);
            cubic(p0, p1, p2, p3, t);
        }

    };

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.dx = p.random(-8, 8);
            this.dy = p.random(-8, 8);
        }

        update() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x >= p.width || this.x < 0) {
                this.dx *= -1;
            }

            if (this.y >= p.height || this.y < 0) {
                this.dy *= -1;
            }
        }
    }
});
