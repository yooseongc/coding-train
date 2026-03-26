
// https://en.wikipedia.org/wiki/Islamic_geometric_patterns
// https://en.wikipedia.org/wiki/Law_of_sines
// https://cs.uwaterloo.ca/~csk/other/starpatterns/
// http://grail.cs.washington.edu/wp-content/uploads/2015/08/kaplan-2004-isp.pdf
// http://paulbourke.net/geometry/pointlineplane/
// https://dl.acm.org/doi/pdf/10.5555/1089508.1089538

/*

    ## Islamic Star Patterns

        E.H. Hankin -> "polygons-in-contact" technique
            an algorithm for turning a tiling into an Islamic star pattern.

        Given a tiling of the plane by polygons (Hankin’s “network”),
            we identify the midpoints of the edges of the tiling as “contact points”
            where the design will be born.
        We place a small X at every contact point and “grow” the
            arms of the X until they encounter lines growing from
            other contact points.
        There is one obvious degree of freedom in this process:
            the angle formed by the arms of the X with the edge from which they emanate. 
        We call this angle the contact angle of the pattern.

        We can regard this process as growing a small arrangement of lines 
            for each unique tile shape in a tiling.
        We grow a pair of rays, forming half an X, inward from the midpoints of the tile’s edges.
        We call the arrangement of lines associated with a single tile its motif.
        An implementation of this construction technique should accept 
            a tiling and a contact angle as input, build a motif for each tile shape,
            and assemble the motifs into a pattern that can then be decorated.


    ## Law of sines

        a / sin A = b / sin B = c / sin C = 2 * R

        or 

        sinA / a = sin B / b = sin C / c = 1 / 2 / R

    ## Part 1.
        visualizing Islamic Star Patterns.
    ## Part 2.
        use the Law of Sines to simplify the tiling pattern calculation.
*/

let angle = 75;
let delta = 10;

let deltaSlider;
let angleSlider;

const polygons = [];

function setup() {
    createCanvas(400, 400);
    deltaSlider = createSlider(0, 25, 10);
    angleSlider = createSlider(0, 90, 75);

    const inc = 100;
    for (let x = 0; x < width; x += inc) {
        for (let y = 0; y < height; y += inc) {
            const polygon = new Polygon();
            polygon.addVertex(x, y);
            polygon.addVertex(x + inc, y);
            polygon.addVertex(x + inc, y + inc);
            polygon.addVertex(x, y + inc);
            polygon.close();
            polygons.push(polygon);
        }
    }
}

function draw() {
    background(51);
    angle = angleSlider.value();
    delta = deltaSlider.value();
    polygons.forEach(polygon => {
        polygon.hankin();
        polygon.show();
    });
}
