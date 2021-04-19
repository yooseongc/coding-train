
class Graph {

    constructor() {
        this.nodes = [];
        this.graph = {};
        this.end = null;
        this.start = null;
        this.springLength = 64;
    }

    reset() {
        this.nodes.forEach(node => {
            node.searched = false;
            node.parent = null;
        });
    }

    setStart(actor) {
        this.start = this.graph[actor];
        return this.start;
    }

    setEnd(actor) {
        this.end = this.graph[actor];
        return this.end;
    }

    addNode(node) {
        this.nodes.push(node);
        const title = node.value;
        this.graph[title] = node;
    }

    getNode(actor) {
        return this.graph[actor];
    }

    show() {
        for (const node of this.nodes) {
            node.showEdges();
        }
         for (const node of this.nodes) {
            node.show();
        }
    }

    simulate() {
        this.nodes[0].pos.set(width / 2, height / 2);

        for (let i = 1; i < this.nodes.length; i++) {
            const node1 = this.nodes[i];
            for (let j = 0; j < this.nodes.length; j++) {
                if (i === j) continue;
                const node2 = this.nodes[j];
                const force = p5.Vector.sub(node1.pos, node2.pos);
                const dist = force.mag();

                let spring = 0;
                const k = 0.05;
                if (node1.isConnected(node2) || node2.isConnected(node1)) {
                    spring = k * (this.springLength - dist);
                }
                let separate = 1 / (dist * k);
                if (!isFinite(separate)) {
                    separate = 10000;
                }
                force.setMag(spring + separate);
                node1.vel.add(force);
                node1.vel.mult(0.98);
            }
        }

        for (const node of this.nodes) {
            node.pos.add(node.vel);
        }
    }

}
