
// https://en.wikipedia.org/wiki/Quadtree

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    contains(point) {
        return (point.x >= (this.x - this.w) &&
                point.x < (this.x + this.w) &&
                point.y >= (this.y - this.h) &&
                point.y < (this.y + this.h));
    }

    intersects(range) {
        return !(range.x - range.w > this.x + this.w || 
            range.x + range.w < this.x - this.w ||
            range.y - range.h > this.y + this.h || 
            range.y + range.h < this.y - this.h);
    }

}

class QuadTree {
    
    constructor(boundary, n) {
        this.boundary = boundary;
        this.capacity = n;
        this.points = [];
        this.divided = false;
    }

    insert(point) {

        if (!this.boundary.contains(point)) {
            return false;
        }

        if (this.points.length < this.capacity && !this.divided) {
            this.points.push(point);
            return true;
        } else {
            if (!this.divided) {
                this.subdivide();
                for (const p of this.points) {
                    this.insert(p);
                }
                this.points.length = 0;

            }
            if      (this.northwest.insert(point)) return true;
            else if (this.northeast.insert(point)) return true;
            else if (this.southwest.insert(point)) return true;
            else if (this.southeast.insert(point)) return true;
            else return false;
        }
    }

    subdivide() {
        const x = this.boundary.x;
        const y = this.boundary.y;
        const w = this.boundary.w;
        const h = this.boundary.h;
        const nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
        const ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
        const sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
        const se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
        this.northwest = new QuadTree(nw, this.capacity);
        this.northeast = new QuadTree(ne, this.capacity);
        this.southwest = new QuadTree(sw, this.capacity);
        this.southeast = new QuadTree(se, this.capacity);
        this.divided = true;
    }

    query(range, found) {
        found = found || [];
        if (!this.boundary.intersects(range)) {
            return;
        } else {
            for (const p of this.points) {
                if (range.contains(p)) {
                    found.push(p);
                }
            }
            if (this.divided) {
                this.northwest.query(range, found);
                this.northeast.query(range, found);
                this.southwest.query(range, found);
                this.southeast.query(range, found);
            }
        }
        return found;
    }

}

function showQuadTree(qt) {
    stroke(255);
    strokeWeight(1);
    noFill();
    rectMode(CENTER);
    rect(qt.boundary.x, qt.boundary.y, qt.boundary.w * 2, qt.boundary.h * 2);
    for (const p of qt.points) {
        strokeWeight(2)
        point(p.x, p.y);
    }
    if (qt.divided) {
        showQuadTree(qt.northwest);
        showQuadTree(qt.northeast);
        showQuadTree(qt.southwest);
        showQuadTree(qt.southeast);
    } 
}
