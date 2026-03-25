
// https://www.cs.ubc.ca/~rbridson/docs/bridson-siggraph07-poissondisk.pdf
// https://www.jasondavies.com/poisson-disc/
// https://en.wikipedia.org/wiki/Supersampling#Poisson_disc
// https://bost.ocks.org/mike/algorithms/

/*
 - Fast Poisson Disk Sampling in Arbitrary Dimensions (Robert Bridson)
   generate Poisson disk samples in O(N) times in arbitrary dimension.

   R^n : the extent of the sample domain
   r : the minimum distance between samples.
   k : constant, the limit of samples to choose before rejection in the algorithm.
       (typically k = 30)
    
   STEP 0. 
     Initialize an n-dimensional background grid for storing samples
        and accelerating spatial searches.
     Pick the cell size to be bounded by r / sqrt(n), so that
        each grid cell will contain at most one sample,
        and thus the grid can be implemented as a simple n-dimensional array of integers.
     The default -1 indicates no sample, a non-negative integet gives the index of
        the sample located in a cell.
   STEP 1.
     Select the initial sample, x_0, randomly chosen uniformly from the domain.
     Insert it into the background grid, and initialize the 'active list' 
        (an array of sample indicies) with this index (zero).
   STEP 2.
     While the active list is not empty, choose a random index from it (say i).
     Generate up to k points chosen uniformly from the spherical annulus between
         radius r and 2r around x_i.
     For each point in turn, check if it is within distance r of existing samples
         (using the background grid to only test nearby samples).
     If a point is adequately far from existing samples, emit it as the next sample
         and add it to the active list.
     If after k attempts no such point is found, instead remove i from the active list.

 - Poisson disk sampling :
   Poisson disk sample set에서 서로 다른 두 개의 샘플은 
   Poisson dist radius 이상으로 가까워지지 않으며, 이 radius는 
   가장 가까운 두 샘플 사이의 거리의 절반임.
   이를 통해 샘플링 영역(domain) 전체에서 더 많은 균일한 샘플 분포를 제공함.
*/

const r = 4;
const k = 30;
const w = r / Math.sqrt(2);
const grid = [];
const active = [];
const ordered = [];

let cols, rows;

function setup() {
    createCanvas(400, 400);
    background(0);
    strokeWeight(4);
    colorMode(HSB);

    // STEP 0
    cols = floor(width / w);
    rows = floor(height / w);
    for (let i = 0; i < cols * rows; i++) {
        grid[i] = null;
    }

    // STEP 1
    const initial_x = width / 2;
    const initial_y = height / 2;
    const initial_col = floor(initial_x / w);
    const initial_row = floor(initial_y / w);
    const initial_pos = createVector(initial_x, initial_y);
    grid[initial_col + initial_row * cols] = initial_pos;
    active.push(initial_pos);
}

function draw() {
    background(0);

    // STEP 2
    for (let total = 0; total < 25; total++) {
        if (active.length > 0) {
            const randomIdx = floor(random(active.length));
            const pos = active[randomIdx];
            let found = false;
            for (let n = 0; n < k; n++) {
                const sample = p5.Vector.random2D();
                const m = random(r, 2 * r);
                sample.setMag(m);
                sample.add(pos);

                const col = floor(sample.x / w);
                const row = floor(sample.y / w);
                if (col > -1 && row > -1 && col < cols && row < rows && !grid[col + row * cols]) {
                    let ok = true;
                    for (let i = -1; i <= 1; i++) {
                        for (let j = -1; j <= 1; j++) {
                            const index = (col + i) + (row + j) * cols;
                            const neighbor = grid[index];
                            if (neighbor) {
                                const d = p5.Vector.dist(sample, neighbor);
                                if (d < r) {
                                    ok = false;
                                }
                            }
                        }
                    }
                    if (ok) {
                        found = true;
                        grid[col + row * cols] = sample;
                        active.push(sample);
                        ordered.push(sample);
                    }
                }
            }
            if (!found) {
                active.splice(randomIdx, 1);
            }
        }
    }

    let i = 0;
    for (const o of ordered) {
        stroke(floor(i / 10) % 360, 100, 100);
        strokeWeight(r * 0.5);
        point(o.x, o.y);
        i++;
    }
}
