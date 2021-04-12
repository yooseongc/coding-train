
// Algorithm: 
// https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm

/*
A simulation of water ripples on a surface.
If you touch the water at any point, ripples radiate out, and even reflect off the walls.
It's easy to achieve that effect with the sum of sin functions.
The amazing thing is the speed.
The program ran af full speed no matter how many ripples you made.

Given 2 arrays of integers, applying this filter caused ripples to 
propagate outwards from any disturbances made in the arrays.

Firstly, We need 2 arrays of words(integers).
These arrays will hold the state of the water.
One holds the current state, the other holds the state from the previous frame.
It is important that you have 2 arrays, since you need to know 
how the water has changed since the last frame, and the frame before that.

Data from the previous frame (Buffer2) and the frame before that (Buffer1) 
are used together, and the results written into Buffer 1.
Buffer 1 contains the current state of the water.

// Algorithm work
damping = some non-integer between 0 and 1

begin loop 
for every non-edge element:
loop
Buffer2(x, y) = (Buffer1(x-1,y) +
Buffer1(x+1,y) +
Buffer1(x,y+1) +
Buffer1(x,y-1)) / 2 - Buffer2(x,y)

Buffer2(x,y) = Buffer2(x,y) * damping
end loop

Display Buffer2
Swap the buffers 

end loop

To explain how and why this works, imagine a wave traveling across a 1-D surface (wave 0).
This wave is traveling to the left.
The small vertical arrows indicate the rate at which the water level changes with time.
The fainter waves show the wave's position on previous frames.
So how do we achieve the correct changes in height for each part of the wave (vertical arrows)?

You may notice that the height of the wave two frames older (wave 2), is proportional to the size of the arrows.
So as long as the previous two frames are remembered, it is easy to work out the change in height of 
every part of the wave.
So, take a look at the code again.
When the loop starts, Buffer 1 contains the state of the water from the previous frame (wave 1), and
Buffer 2 has the state before that (wave 2).
Buffer 2 therefore has information about the vertical velocity of the wave.
> Velocity(x, y) = - Buffer2(x, y)
It also important for the waves to spread out, so the buffers are smoothed every frame.
> Smoothed(x, y) = (Buffer1(x-1, y) + Buffer1(x+1, y) + Buffer1(x, y-1) + Buffer1(x, y+1)) / 4
Now, to combine the two to calculat the new height of the waver.
The multiplication by two reduces the effect of the velocity.
> NewHeight(x, y) = Smoothed(x, y) * 2 + Velocity(x, y)
Finally, the ripples must lose energy, so they are damped:
> NewHeight(x, y) = NewHeight(x, y) * damping
Note: This can be optimised to:
> NewHeight(x, y) = NewHeight(x, y) - (NewHeight(x, y) / n) where n is some power of 2.

*/

let cols;
let rows;
let current;
let previous;

const dampening = 0.995;

let canvas;
let recording = false;
let gif;

function setupGif() {
    gif = new GIF({workers: 2, quality: 40, workerScript: 'libraries/gif.worker.js'});
    gif.on('finished', (blob) => {
        window.open(URL.createObjectURL(blob));
        setupGif();
    })
}

function setup() {
    frameRate(22);
    pixelDensity(1);
    canvas = createCanvas(600, 400);
    setupGif();

    cols = width;
    rows = height;
    current  = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
    previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));

    const button = createButton('RECORD');
    button.mouseClicked(() => {
        
        recording = !recording;
        console.log('recording?', recording);
        if (recording) {
            button.html('STOP');
        } else {
            gif.render();
            button.html('RECORD');
        }
    });
}


function mouseDragged() {
    const x = floor(mouseX);
    const y = floor(mouseY);
    if (x > 0 && x < width && y > 0 && y < height) {
        previous[x][y] = 500;
    }
}

function draw() {
    background(0);
    
    loadPixels();
    for (let i = 1; i < cols - 1; i++) {
        for (let j = 1; j < rows - 1; j++) {
            
            // simulate ripples
            current[i][j] = (previous[i - 1][j] + previous[i + 1][j] + previous[i][j - 1] + previous[i][j + 1]) / 2 - current[i][j];
            
            // damp by frame
            current[i][j] = current[i][j] * dampening;
            const index = (i + j * cols) * 4;
            pixels[index + 0] = current[i][j];
            pixels[index + 1] = current[i][j];
            pixels[index + 2] = current[i][j];
        }
    }
    updatePixels();
    // swap frame
    [previous, current] = [current, previous];

    // record
    if (recording) {
        gif.addFrame(canvas.elt, {delay: 1, copy: true});
    }
}
