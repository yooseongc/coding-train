
class Polygon {

    constructor(n) {
        this.vertices = [];
        this.edges = [];
        this.sides = n;
    }

    show() {
        this.edges.forEach(edge => edge.show());
    }

    addVertex(x, y) {
        const a = createVector(x, y);
        const total = this.vertices.length;
        if (total > 0) {
            const prev = this.vertices[total - 1];
            const edge = new Edge(prev, a);
            this.edges.push(edge);
        }
        this.vertices.push(a);
    }

    close() {
        const total = this.vertices.length;
        const last  = this.vertices[total - 1];
        const first = this.vertices[0];
        const edge = new Edge(last, first);
        this.edges.push(edge); 
    }

    hankin() {
        this.edges.forEach(edge => edge.hankin(this.sides));
    }

}