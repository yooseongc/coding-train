
let tree;

function setup() {

    createCanvas(600, 600);
    background(51);


    tree = new Tree();
    for (let i = 0; i < 10; i++) {
        tree.addValue(floor(random(0, 100)));
    }
    tree.traverse();

    console.log(tree);
    console.log(tree.search(50));

}

