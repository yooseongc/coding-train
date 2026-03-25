
class Particle {

    constructor(x, y, r) {
        this.hue = random(360);
        this.r = r;
        const options = { restitution: 0.5, friction: 0, density: 1 };
        this.body = Bodies.circle(x + random(-1, 1), y, this.r, options);
        this.body.label = 'particle';
        World.add(world, this.body);
    }

    isOffScreen() {
        const x = this.body.position.x;
        const y = this.body.position.y;
        return (x < -50 || x > width + 50 || y > height);
    }

    show() {
        push();
        fill(this.hue, 255, 255);
        noStroke();
        const pos = this.body.position;
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }

}