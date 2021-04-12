
// http://algorithmicbotany.org/papers/colonization.egwnp2007.html
// https://github.com/x5115x/play-with-Processing/blob/master/ft3d

/*
    Modeling trees with a space colonization algorithm

    The key idea is an iterative addition of new elements (nodes) 
     to the tree structure formed in previous steps.
    A tree is formed in a natural, base-to-leaves order. 
    Numerical parameters and non-numerical attributes of the method
     provide controls that are consistent with the characteristics
     of plant material used in landscaping and make it possible
     to generate a wide variety of forms.
    
     1) Envelope with attraction points and the initial tree nodes.
     2) Generation of the tree skeleton. -> Space Colonization Algorithm
     3) Node decimation (노드 수를 줄임, 잡음 제거)
     4) Node relocation 
     5) Subdivision
     6) Construction of generalized cylindrs
     7) Addition of organs

    The space colonization algorithm
     -  treats competition for space as the
        key factor determining the branching structure of trees.
  
     (a) Each attraction points (leaf) is associated with the tree node
        that is closest to it, provided that the node is within 
        the radius of influence (max_dist).
     (b) This establishes the set of attraction points that influence each node.
     (c) The normalized vectors from each tree node to each source that influences
        the node are then found.
     (d) These vectors are added and their sum is normalized again, providing the basis
        for locating new tree nodes (branches). 
     (e) The new nodes are incorporated into
        the tree structure, in this case extending the main axis and initiating
        a lateral branch.
     (f) The neighborhoods of the attraction points are now tested for the inclusion
        of (the centers of) tree nodes.
     (g) Remove the affected attraction points (inclusion test failed nodes).
     (h) The tree nodes closest to these points are now identified, 
        beginning the next iteration of the algorithm. 
*/

let tree;
const max_dist = 100;
const min_dist = 20;
let framerate;

function setup() {
    createCanvas(300, 400, WEBGL);
    tree = new Tree();
    framerate = createP('');
}

function draw() {
    background(51);
    orbitControl();
    tree.show();
    tree.grow();
    framerate.html(floor(frameRate()));
}