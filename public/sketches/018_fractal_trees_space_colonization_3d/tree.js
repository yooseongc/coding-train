
class Tree {

    constructor() {
        this.leaves = [];
        this.branches = [];
        // make leaves
        for (let i = 0; i < 300; i++) {
            this.leaves.push(new Leaf());
        }
        const pos = createVector(0, height / 2, 0); // bottom center
        const dir = createVector(0, -1);             // upward unit vector
        const root = new Branch(null, pos, dir);
        this.branches.push(root);

        let current = root;
        let found = false;
        while (!found) { // for while we can find a leaf
            for (const leaf of this.leaves) {
                if (p5.Vector.dist(current.pos, leaf.pos) < max_dist) {
                    found = true;
                }
            }
            current = current.next();
            this.branches.push(current);
        }
    }

    grow() {
        for (const leaf of this.leaves) {
            let closestBranch = null;
            let record = 100000;
            for (const branch of this.branches) {
                const d = p5.Vector.dist(leaf.pos, branch.pos)
                // inclusion test & find nearest branch of current branches
                if (d < min_dist) {
                    leaf.reached = true;
                    closestBranch = null;
                    break;
                } else if (d < record) {
                    closestBranch = branch;
                    record = d;
                }
            }
            if (closestBranch) { // inclusion test passed & found a nearest branch
                const newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
                newDir.normalize();
                closestBranch.dir.add(newDir);
                closestBranch.count++;
                // 각 leaf에 대해서 가장 가까운 가지들의 방향벡터를 가지방향으로
                // 유닛 벡터만큼 더해줌.
            }
        }
        // remove reached leaves
        for (let i = this.leaves.length - 1; i >= 0; i--) {
            if (this.leaves[i].reached) {
                this.leaves.splice(i, 1);
            }
        }
        // check branches, and add child branches
        for (const branch of this.branches) {
            if (branch.count > 0) {
                branch.dir.div(branch.count + 1); // contain original direction vector
                this.branches.push(branch.next());
                branch.reset();
                // 테스트를 통과한 가장 가까운 branch들에 대해
                // 각 영향받은 잎들의 방향벡터를 개수로 나누고, 
                // 그에 대한 새끼 가지를 만든 후 초기화 시킴. 
            }
        }
    }

    show() {
        for (const leaf of this.leaves) {
            leaf.show();
        }
        for (let i = 0; i < this.branches.length; i++) {
            //strokeWeight(map(i, 0, this.branches.length, 6, 0))
            this.branches[i].show();
        }
    }

}