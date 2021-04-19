
class Plinko {

    constructor(x, y, r) {
        const options = { isStatic: true, restitution: 1, friction: 0 };
        this.r = r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.body.label = 'plinko';
        World.add(world, this.body);
    }

    show() {
        push();
        fill(127);
        noStroke();
        const pos = this.body.position;
        translate(pos.x, pos.y);
        ellipse(0, 0, this.r * 2);
        pop();
    }

}