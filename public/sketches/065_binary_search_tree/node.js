
class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.x = 0;
        this.y = 0;
        this.level = 0;
    }

    setCoordinates(x, y) {
        this.x = x;
        this.y = y;
    }

    addNode(node) {
        node.level = this.level + 1;
        const dx = width / (pow(2,  node.level + 1));
        if (node.value < this.value) {
            if (this.left == null) {
                this.left = node;
                this.left.setCoordinates(this.x - dx, this.y + 75);
            } else {
                this.left.addNode(node);
            }
        } else if (node.value > this.value) {
            if (this.right == null) {
                this.right = node;
                this.right.setCoordinates(this.x + dx, this.y + 75);
            } else {
                this.right.addNode(node);
            }
        }
    }

    visit(parent) {
        if (this.left != null) {
            this.left.visit(this);
        }
        console.log(this.value);
        fill(255);
        noStroke();
        textAlign(CENTER);
        text(this.value, this.x, this.y + 4);
        stroke(255);
        noFill();
        ellipse(this.x, this.y, 32, 32);
        if (parent) {
            line(parent.x, parent.y + 16, this.x, this.y - 16);
        }
        if (this.right != null) {
            this.right.visit(this);
        }
    }

    search(value) {
        if (this.value === value) {
            console.log('found ' + value);
            return this;
        } else if (this.left != null && value < this.value) {
            return this.left.search(value);
        } else if (this.right != null && value > this.value) {
            return this.right.search(value);
        } else {
            console.log('not found');
            return null;
        }
    }

}