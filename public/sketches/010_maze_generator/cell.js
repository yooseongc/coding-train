

class Cell {
    
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true]; // TRDL
        this.visited = false;
    }

    checkNeighbors() {
        const neighbors = [];
        const top = grid[index(this.i, this.j - 1)];
        const right = grid[index(this.i + 1, this.j)];
        const bottom = grid[index(this.i, this.j + 1)];
        const left = grid[index(this.i - 1, this.j)];
        
        if (top && !top.visited) neighbors.push(top);
        if (right && !right.visited) neighbors.push(right);
        if (bottom && !bottom.visited) neighbors.push(bottom);        
        if (left && !left.visited) neighbors.push(left);

        return neighbors;
    }
    
    
    highlight() {
        const x = this.i * w;
        const y = this.j * w;
        noStroke();
        fill(0, 0, 255, 100);
        rect(x, y, w, w);
    }
    
    show() {
        const x = this.i * w;
        const y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }
        
        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }
    }
    
}