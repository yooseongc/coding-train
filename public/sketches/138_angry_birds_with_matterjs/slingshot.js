
class SlingShot {

    constructor(x, y, body) {
        this.sling = Matter.Constraint.create({ 
            pointA: { x: x, y: y }, 
            bodyB: body,
            stiffness: 0.02,
            length: 40 
        });
        Matter.World.add(world, this.sling);
    }

    fly() {
        this.sling.bodyB = null;
    }

    attach(body) {
        this.sling.bodyB = body;
    }

    show() {
        if (this.sling.bodyB) {
            stroke(0);
            strokeWeight(4);
            const posA = this.sling.pointA;
            const posB = this.sling.bodyB.position;
            line(posA.x, posA.y, posB.x, posB.y);
        }
        
    }

}