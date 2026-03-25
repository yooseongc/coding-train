
class Snake {

    constructor() {
        this.body = [];
        this.body[0] = createVector(floor(w/2), floor(h/2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();  // remove first element of array 
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    endGame() {
        // x, y of head
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {  // out of bound
            return true;
        }
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) { // head meets any part of body
                return true;
            }
        }
        return false;
    }

    eat(pos) { // pos : position of food
        // x, y of head
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x == pos.x && y == pos.y) { // eat food
            this.grow();
            return true;
        }
        return false;
    }

    show() {
        for (let i = 0; i < this.body.length; i++) {
            fill(0);
            noStroke();
            rect(this.body[i].x, this.body[i].y, 1, 1);
        } 
    }
}