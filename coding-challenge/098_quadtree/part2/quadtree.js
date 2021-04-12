
// https://en.wikipedia.org/wiki/Quadtree

class Point {
    constructor(x, y, userData) {
        this.x = x;
        this.y = y;
        this.userData = userData;
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

class Circle {

    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rSquared = this.r * this.r;
    }

    contains(point) {
        const d = Math.pow((point.x - this.x), 2) + Math.pow((point.y - this.y), 2);
        return d <= this.rSquared;
    }

    intersects(range) {
        const xDist = Math.abs(range.x - this.x);
        const yDist = Math.abs(range.y - this.y);
        const r = this.r;
        const w = range.w;
        const h = range.h;
        const edges = Math.pow((xDist - w), 2) + Math.pow((yDist - h), 2);

        // no intersection
        if (xDist > (r + w) || yDist > (r + h)) {
            return false;
        }
        // intersection within the circle
        if (xDist <= w || yDist <= h) {
            return true;
        }
        // intersection on the edge of the circle
        return edges <= this.rSquared;
    }

}

class QuadTree {
    
    constructor(boundary, capacity) {

        if (!boundary) {
            throw TypeError('boundary is null or undefined');
        }
        if (!(boundary instanceof Rectangle)) {
            throw TypeError('boundary should be a Rectangle');
        }
        if (typeof capacity !== 'number') {
            throw TypeError(`capacity should be a number but is a ${typeof capacity}`);
        }
        if (capacity < 1) {
            throw RangeError('capacity must be greater than 0');
        }

        this.boundary = boundary;
        this.capacity = capacity;
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
        const w = this.boundary.w / 2;
        const h = this.boundary.h / 2;
        const nw = new Rectangle(x - w, y - h, w, h);
        const ne = new Rectangle(x + w, y - h, w, h);
        const sw = new Rectangle(x - w, y + h, w, h);
        const se = new Rectangle(x + w, y + h, w, h);
        this.northwest = new QuadTree(nw, this.capacity);
        this.northeast = new QuadTree(ne, this.capacity);
        this.southwest = new QuadTree(sw, this.capacity);
        this.southeast = new QuadTree(se, this.capacity);
        this.divided = true;
    }

    query(range, found) {
        found = found || [];
        if (!range.intersects(this.boundary)) {
            return found;
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
