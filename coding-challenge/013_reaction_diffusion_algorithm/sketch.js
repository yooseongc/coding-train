
// http://karlsims.com/rd.html
// https://en.wikipedia.org/wiki/Reaction%E2%80%93diffusion_system
// https://groups.csail.mit.edu/mac/projects/amorphous/GrayScott/

/*
  A' = A + (D_A * laplace(A) - AB^2     + f(1-A))  * dt
  B' = B + (D_B * laplace(B) + AB^2     - (k+f)*B) * dt

 new  prev  'diffusion term' 'reaction'  'feed/kill' 

 typical values
   D_A = 1.0, D_B = 0.5
   f = 0.055, k = 0.062, dt = 1.0

 grid initialization 
   A = 1, B = 0, small area is seeded with B = 1

 laplacian performed with a 3x3 convolution 
  with center weight -1, adjacent neighbors 0.2 
  and diagonals 0.05   
*/

let grid;
let next;

const dA = 1;
const dB = 0.5;
const feed = 0.055;
const kill = 0.062;

function laplaceA(x, y) {
    return (grid[x][y].a) * (-1) + 
           (grid[x-1][y].a + grid[x+1][y].a + grid[x][y-1].a + grid[x][y+1].a) * 0.2 +
           (grid[x-1][y-1].a + grid[x-1][y+1].a + grid[x+1][y-1].a + grid[x+1][y+1].a) * 0.05;
}

function laplaceB(x, y) {
    return (grid[x][y].b) * (-1) + 
           (grid[x-1][y].b + grid[x+1][y].b + grid[x][y-1].b + grid[x][y+1].b) * 0.2 +
           (grid[x-1][y-1].b + grid[x-1][y+1].b + grid[x+1][y-1].b + grid[x+1][y+1].b) * 0.05;
}

function swap() {
    const temp = grid;
    grid = next;
    next = temp;
}

function setup() {
    createCanvas(200, 200);
    pixelDensity(1);
    
    // grid initialization
    grid = [];
    next = [];
    for (let x = 0; x < width; x++) {
        grid[x] = [];
        next[x] = [];
        for (let y = 0; y < height; y++) {
            grid[x][y] = { a: 1, b: 0 };
            next[x][y] = { a: 1, b: 0 };
        }
    }

    // B seeding
    for (let i = 100; i < 110; i++) {
        for (let j = 100; j < 110; j++) {
            grid[i][j].b = 1;
        }
    }
}

function draw() {
    background(51);

    // Calculate formula
    for (let x = 1; x < width - 1; x++) {
        for (let y = 1; y < height - 1; y++) {
            const {a, b} = grid[x][y];
            next[x][y].a = a + (dA * laplaceA(x, y)) - (a * b * b) + (feed * (1 - a));
            next[x][y].b = b + (dB * laplaceB(x, y)) + (a * b * b) - ((kill + feed) * b);

            next[x][y].a = constrain(next[x][y].a, 0, 1);
            next[x][y].b = constrain(next[x][y].b, 0, 1);
        }
    }

    // render
    loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            const pidx = (x + y * width) * 4;
            const {a, b} = next[x][y];
            const c = constrain(floor((a - b) * 255), 0, 255);
            // if b > a, be darker, if a > b, be lighter.
            pixels[pidx + 0] = c;
            pixels[pidx + 1] = c;
            pixels[pidx + 2] = c;
            pixels[pidx + 3] = 255; 
        }
    }
    updatePixels();
    
    // swap grid and next
    swap();


}
