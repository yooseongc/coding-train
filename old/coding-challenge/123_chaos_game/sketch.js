

// https://en.wikipedia.org/wiki/Chaos_game
// https://en.wikipedia.org/wiki/Iterated_function_system
// https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
// https://www.algorithm-archive.org/contents/IFS/IFS.html

/*
    1. Chaos game

    In mathematics, the term 'chaos game' originally referred to a method of creating a fractal,
        using a polygon and an initial point selected at random inside it.

    The fractal is created by iteratively creating a sequence of points, starting with the initial random point,
        in which each point in the sequence is a given fraction of the distance between 
        previous point and one of the vertices of the polygon; the vertex is chosen at random 
        in each iteration.

    Repeating this iterative process a large number of times, selecting the vertex at random on each
        iteration, and throwing out the first few points in the sequence, will often (not always) produce
        a fractal shape.
    
    Using a regular triangle and the factor 1/2 will result in Sierpinski triangle, 
        while creating the proper arrangement with four points and a factor 1/2 will create a display of
        a Sierpinski Tetrahedron, the 3-D analogue of the Sierpinski triangle. 

    As the number of points is increased to a number N, 
        the arrangement forms a corresponding (N-1)-dimensional Sierpinski Simplex.

    The term has been generalized to refer to a method of generating the attractor, 
        or the fixed point, of any iterated function system (IFS). 
    The iterations converge to the fixed point of the IFS.

    The "chaos game" method plots points in random order all over the attractor. 
    This is in contrast to other methods of drawing fractals, 
        which test each pixel on the screen to see whether it belongs to the fractal.
    The general shape of a fractal can be plotted quickly with the "chaos game" method, 
        but it may be difficult to plot some areas of the fractal in detail.
    
    The "chaos game" method is mentioned in Tom Stoppard's 1993 play Arcadia.

    With the aid of the "chaos game" a new fractal can be made and while making the new fractal some parameters can be obtained. 
    These parameters are useful for applications of fractal theory such as classification and identification.
    The new fractal is self-similar to the original in some important features such as fractal dimension.


    2. Iterated function system

    In mathematics, IFSs are a method of constructing fractals; the resulting fractals are often self-similar.
    IFS fractals are more related to set theory than fractal geometry. They were introduced in 1981.

    IFS fractals, as they are normally called, can be of any number of dimensions, but are commonly computed
        and drawn in 2D.
    The fractal is made up of the union of several copies of itself, each copy being transformed by a function.
    The canonical example is the Sierpinski triangle.
    The functions are normally contractive, which means they bring points closer together and make shapes smaller.
    Hence, the shape of an IFS fractal is made up of several possibly-overlapping smaller copies of itself,
        each of which is also made up of copies of itself, ad infinitum.
    This is the sorce of its self-similar fractal nature.

    3. Algorithm for Sierpinski trangle

        1. Take three points in a plane to form a triangle, you need not draw it.
        2. Randomly select any point inside the triangle and consider that your current position.
        3. Randomly select any one of the three vertex points.
        4. Move half the distance from your current position to the selected vertex.
        5. Plot the current position.
        6. Repeat from step 3.

*/

const part1Sketch = function(p) {

    let ax, ay, bx, by, cx, cy;
    let x, y;
    const factor = 0.5;
    const margin = 10;

    p.setup = () => {
        
        const canvas = p.createCanvas(400, 400);
        canvas.parent(p.select('#part1-canvas'));
        
        const w = p.width - 2 * margin;
        const h = p.height - 2 * margin;
        p.translate(margin, margin);

        ax = w / 2;
        ay = 0;
        bx = 0;
        by = h;
        cx = w;
        cy = h;

        
        // barycentric method which check the point is in the triangle.
        // https://stackoverflow.com/questions/2049582/how-to-determine-if-a-point-is-in-a-2d-triangle
        let inTriangle = false;
        while (!inTriangle) {
            x = p.random(w);
            y = p.random(h);

            const s = ay * cx - ax * cy + (cy - ay) * x + (ax - cx) * y;
            const t = ax * by - ay * bx + (ay - by) * x + (bx - ax) * y;

            if ((s < 0) !== (t < 0)) {
                inTriangle = false;
                continue;
            }

            const A = - by * cx + ay * (cx - bx) + ax * (by - cy) + bx * cy;
            inTriangle = (A < 0) ? ((s <= 0) && (s + t >= A)) : ((s >= 0) && (s + t <= A)); 

        }
        
        p.background(51);
        p.stroke(255);
        p.strokeWeight(8);
        // p.point(ax, ay);
        // p.point(bx, by);
        // p.point(cx, cy);
        // p.point(x, y);
    }

    p.draw = () => {
        p.translate(margin, margin);
        for (let i = 0; i < 100; i++) {
            p.strokeWeight(1);
            const r = p.floor(p.random(3));
            if (r === 0) {        // select a
                p.stroke(255, 0, 255);
                x = p.lerp(x, ax, factor);
                y = p.lerp(y, ay, factor);
            } else if (r === 1) { // select b
                p.stroke(0, 255, 255);
                x = p.lerp(x, bx, factor);
                y = p.lerp(y, by, factor);
            } else if (r === 2) { // select c
                p.stroke(255, 255, 0);
                x = p.lerp(x, cx, factor);
                y = p.lerp(y, cy, factor);
            }
            p.point(x, y);
        }
    }
}

const part2Sketch = function(p) {

    const margin = 10;
    const points = [];
    const n = 5;
    let current;
    let previous;
    const factor = 0.5;

    const reset = () => {
        const w = p.width - 2 * margin;
        const h = p.height - 2 * margin;
        current = p.createVector(p.random(w), p.random(h));
        p.background(51);
        p.stroke(255);
        p.strokeWeight(8);
        // p.translate(margin, margin);
        // points.forEach(point => p.point(point.x, point.y));
    }

    p.setup = () => {
        const canvas = p.createCanvas(400, 400);
        canvas.parent(p.select('#part2-canvas'));
        const w = p.width - 2 * margin;
        const h = p.height - 2 * margin;
        

        for (let i = 0; i < n; i++) {
            const v = p5.Vector.fromAngle(i * p.TWO_PI / n);
            v.mult(w / 2);
            v.add(w / 2, h / 2);
            points.push(v);
        }

        reset();
    };

    p.draw = () => {
        p.translate(margin, margin);
        for (let i = 0; i < 500; i++) {
            p.stroke(255, 50);
            p.strokeWeight(1);
            const next = p.random(points);
            // restriction : the currently chosen vertex cannot be the same as the previously chosen vertex.
            if (next !== previous) {
                current.x = p.lerp(current.x, next.x, factor);
                current.y = p.lerp(current.y, next.y, factor);
                p.point(current.x, current.y);
            }
            previous = next;
        }
    }

}

const part1 = new p5(part1Sketch);
const part2 = new p5(part2Sketch);

