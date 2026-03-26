
// https://web.archive.org/web/20160418004150/http://freespace.virgin.net/hugo.elias/models/m_fire.htm

/*
    The bottom of the screen was constantly seemed with 'hot' pixels.
    On each time step, the image was smoothed, darkened and scrolled up one pixel.
    These three simple operations, combined with the speckled pixels at the bottom, 
      and orangey palette, creates waht undoubtedly looks like a flame.
    Some implementations looked very good, others just looked like a characterless fire effect.
    With a little thought, the fire can be made quite complex, producing those nice toungs on flame
      you get in real fires.
    On this page, I will show you how to make fire with uneven cooling, and convection effects.
    
    1) The heat source : Each frame a few pixels of maximum brightness are placed randomly 
          at the bottom few lines of the screen.
    2) Heat spread : Then the image is smoothed. This makes the fire spread as it ages and
          gives the fire body.
    3) Cooling : The flames are then cooled a little by subtracting a small amount from 
          each pixel.
    4) Convection : The image is scrolled up by one pixel. This makes the flame rise.

    * Heat Spread

    pixel(x,y) = (pixel(x,y-1) + pixel(x,y+1) + pixel(x-1,y) + pixel(x+1,y))
                 -----------------------------------------------------------
                                             4

    * Cooling

    pixel(x,y) = pixel(x,y) - coolingmap(x,y)

    * Uneven cooling => use 2D perlin noise
*/

let buffer1;
let buffer2;
let cooling;
const w = 300;
const h = 200;

let ystart = 0.0;
const increment = 0.2;

function setup() {
    pixelDensity(1);
    createCanvas(2 * w, h);
    buffer1 = createGraphics(w, h);
    buffer2 = createGraphics(w, h);
    cooling = createImage(w, h);
}

function cool() {
    cooling.loadPixels();
    // for every x, y coordinate in a 2D space, 
    //   calculate a noise value and produce a brightness value
    let xoff = 0.0;
    for (let x = 0; x < w; x++) {
        xoff += increment;
        let yoff = ystart; 
        for (let y = 0; y < h; y++) {
            yoff += increment;
            // calculate noise and scale by 255
            const n = noise(xoff, yoff);
            const bright = pow(n, 3) * 255;
            const index = (x + y * w) * 4;
            cooling.pixels[index]     = bright;
            cooling.pixels[index + 1] = bright;
            cooling.pixels[index + 2] = bright;
            cooling.pixels[index + 3] = 255;
        }
    }
    cooling.updatePixels();
    ystart += increment;
}

function fire(rows) {
    buffer1.loadPixels();
    for (let x = 0; x < w; x++) {
        for (let j = 0; j < rows; j++) {
            const y = h - (j + 1); // start from bottom
            const index = (x + y * w) * 4;
            buffer1.pixels[index]     = 255;
            buffer1.pixels[index + 1] = 255;
            buffer1.pixels[index + 2] = 255;
            buffer1.pixels[index + 3] = 255;
        }
    }
    buffer1.updatePixels();
}

function draw() {
    // make heat source
    fire(2); 
    if (mouseIsPressed) {
        buffer1.fill(255);
        buffer1.noStroke();
        buffer1.ellipse(mouseX, mouseY, 100, 100);
    }
     // update cooling map 
    cool(); 

    background(0);
    buffer1.loadPixels();  // buffer1 - the frame before
    buffer2.loadPixels();  // buffer2 - current frame
    for (let x = 1; x < w - 1; x++) {
        for (let y = h - 2; y > 0; y--) {
            const index0 = (x + y * w) * 4;       // x, y
            const index1 = (x + 1 + y * w) * 4;   // (x + 1), y
            const index2 = (x - 1 + y * w) * 4;   // (x - 1), y
            const index3 = (x + (y + 1) * w) * 4; // x, (y + 1)
            const index4 = (x + (y - 1) * w) * 4; // x, (y - 1)

            const c0 = cooling.pixels[index0];
            const c1 = buffer1.pixels[index1];
            const c2 = buffer1.pixels[index2];
            const c3 = buffer1.pixels[index3];
            const c4 = buffer1.pixels[index4];

            // spread, convect, cooling
            // for convection, update y-1 pixel
            const v = (c1 + c2 + c3 + c4) / 4 - c0;
            buffer2.pixels[index4]     = v;
            buffer2.pixels[index4 + 1] = v;
            buffer2.pixels[index4 + 2] = v;
            buffer2.pixels[index4 + 3] = 255;
        }
    }
    buffer2.updatePixels(); 



    // swap
    [buffer1, buffer2] = [buffer2, buffer1];

    image(buffer2, 0, 0);  // draw fire    image at left  panel
    image(cooling, w, 0);  // draw cooling image at right panel
}
