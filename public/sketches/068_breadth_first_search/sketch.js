
// https://en.wikipedia.org/wiki/Breadth-first_search
// https://github.com/nature-of-code/NOC-S17-2-Intelligence-Learning/tree/master/week1-graphs/02_bfs_oop_fdg

/*
    Breadth-first Search (BFS) is an algorithm for traversing or searching tree
        or graph data structures.
    It starts at the tree root (or some arbitrary node of a graph), and explores 
        all of the neighbor nodes at the present depth prior to moving on to the nodes 
        at the next depth level.
    It uses the opposite strategy of depth-first search, which instead explores the
        node branch as far as possible before being forced to backtrack and expand
        other nodes.

    - Pseudocode

    G: graph, root: root node

    procedure BFS(G, root) is
        let Q be a queue
        label root as discovered
        Q.enqueue(root)
        while Q is not empty do
            v := Q.dequeue()
            if v is the goal then
                return v
            for all edges from v to w in G.adjacentEdges(v) do
                if w is not labeled as discovered then
                    label w as discovered
                    Q.enqueue(w)

*/

let data;
let graph;
let dropdown;

let x = 0;  // pan X
let y = 0;  // pan Y
let sf = 1; // Sclae Factor 

function preload() {
    data = loadJSON('kevinbacon.json');
}

function setup() {
    createCanvas(800, 800);
    console.log(data);
    graph = new Graph();
    dropdown = createSelect();
    
    for (const movie of data.movies) {
        const { title, cast } = movie;
        const movieNode = new Node(title);
        graph.addNode(movieNode);
        for (const actor of cast) {
            let actorNode = graph.getNode(actor);
            if (!actorNode) {
                actorNode = new Node(actor);
                dropdown.option(actor);
            }
            graph.addNode(actorNode);
            movieNode.addEdge(actorNode);
        }
    }
    console.log(graph);
    
    const bfs = () => {
        graph.reset();
        const start = graph.setStart(dropdown.value());
        const end = graph.setEnd('Kevin Bacon');

        const queue = [];
        start.searched = true;
        queue.push(start);

        while (queue.length > 0) {
            const current = queue.shift();
            if (current === end) {
                console.log(`Found ${current.value}.`);
                break;
            }
            for (const neighbor of current.edges) {
                if (!neighbor.searched) {
                    neighbor.searched = true;
                    neighbor.parent = current;
                    queue.push(neighbor);
                }
            }
        }

        const path = [];
        path.push(end);
        let next = end.parent;
        while (next != null) {
            path.push(next);
            next = next.parent;
        }

        let txt = path.pop().value;
        for (const node of path.reverse()) {
            txt += ` --> ${node.value}`;
        }

        createP(txt);
    };
    dropdown.changed(bfs);
}

function draw() {
    const mx = mouseX;
    const my = mouseY;
    background(51);
    translate(x, y);
    scale(sf);
    translate(-x, -y);

    graph.simulate();
    graph.show();

}

function mouseDragged() {
    x += mouseX-pmouseX;
    y += mouseY-pmouseY;
}

function mouseWheel(e) {
    if (e.deltaY > 0) {
        sf *= 0.95;
    } else {
        sf *= 1.05;
    }
}
