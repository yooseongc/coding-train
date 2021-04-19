
class Tree {

    constructor() {
        this.root = null;
    }

    addValue(value) {
        const node = new Node(value);
        if (this.root == null) { 
            this.root = node;
            this.root.setCoordinates(width / 2, 50);
        } else {
            this.root.addNode(node);
        }
    }

    traverse() {
        this.root.visit();
    }

    search(value) {
        return this.root.search(value);
    }

}