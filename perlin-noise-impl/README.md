
## Creating Perin Noise in Javascript

> reference: https://joeiddon.github.io/projects/javascript/perlin.html   


Perlin noise is a term for a particular smooth, natural-looking randomness and associate algorithm used to generate it.
The output is particularly useful in Computer Graphics where it can be employed in textures, flames, smoke, and terrain.

Followings are the steps:
 1. Define an n-dimensional grid.
 2. For each node of the grid, assign a random gradient vector of unit length in n-dimension.
 3. Given an n-dimensional argument for the noise function.
 4. Determine its cell in the grid.
 5. For each corner node of that cell, calculate the distance vector between the point and the node.
 6. Compute the dot product between gradient vector and the distance vector.
 7. Interpolate the 2^n dot products to get the value.

The result is [here](./sketch.html)

---

### Step 1

We need a two-dimensional grid. The size of this grid determines roughly how zoomed in our noise is going to be.

```javascript
const grid = [];
const nodes = 8;
```

### Step 2

Assign a random gradient vector of unit length to each node of the grid.
A random gradient vector of unit length is simply a pair of numbers `[x, y]` where the length of them is equal to 1. (i.e. `x^2 + y^2 = 1`)
To generate a pair of numbers like these, it is easiest to use the sine and cosine functions with a random angle.

```javascript
function createRandomUnitVector() {
    const theta = Math.random() * 2 * Math.PI;
    return {
        x: Math.cos(theta), y: Math.sin(theta)
    };
}

for (let i = 0; i < nodes; i++) {
    const row = [];
    for (let j = 0; j < nodes; j++) {
        row.push(createRandomUnitVector());
    }
    grid.push(row);
}
```

### Step 3

We need to accept the input to the function a two-dimensional argument.
The Perlin noise algorithm describes a function. This takes an input of a coordinate, and returns a number. The number determines the height/intensity of the noise at that coordinate.

But how can a function that returns an intensity be used to create the smooth image shown at above result? The answer - the image is not continuous, but discrete or 'pixelated'. So the image is created by iterating over each pixel coordinates, running the Perlin function for that coordinate, and assigning the intensity of that pixel.

```javascript
function perlinNoise(x, y) {
    ...
    return intensity;
}
```

### Step 4

Determine its cell in the grid, where the 'cell' is the square of nodes around our x and y. For example, if x = 1.4 and y = 3.6, then the cell is from x = 1 to 2 and y = 3 to 4.

```javascript
const x0 = Math.floor(x);
const x1 = x0 + 1;
const y0 = Math.floor(y);
const y1 = y0 + 1;
```

Having found the cell nodes, we can calculate the dot product between the distance vector between the point and the node and the random gradient vector from our array. Calculating the distance vector and the dot product can be condensed together into one function.

```javascript
function dotProductGrid(x, y, vertX, vertY) {
    const gradientVector = grid[vertX][vertY];
    const dinstanceVector = { x: x - vertX, y: y - vertY };
    return gradientVector.x * distanceVector.x + gradientVector.y * distanceVector.y;
}
```

Finally, we need to interpolate between the four cell node dot-products. Interpolation is a way of constructing new data points within a range of others. To do this, a function is used, the simplest being linear.

```javascript
function linearInterpolation(x, a, b) {
    return a + x * (b - a);
}
```

So if we run `linearInterpolation(0, 56, 98)` we will get 56 and if we run with `linearInterpolation(1, 56, 98)` we get 98 in this case. The point of the interpolation is that now, any value of x will map between the two outer values. So running `linearInterpolation(0.5, 24, 64)` will give us the value exactly in the middle, so 44. However, linear interpolation produces slight 'ridges' inbetween each cell as there is no curves, just straight lines. To add a very rounded and smooth looking curve/fade inbetween the cells, we can use Perlin's smootherstep function (a quintic polynomial).

```javascript
{
    smootherstep: function(x) {
        return 6 * Math.pow(x, 5) - 15 * Math.pow(x, 4) + 10 * Math.pow(x, 3); 
    },
    interp: function(x, a, b) {
        return a + smootherstep(x) * (b - a);
    },
    ...
}
```

To interpolate between the four cell nodes with this function, we must do so in three steps (bilinear interpolation). First by interpolating how far the x distance of the inputis into the cell (between 0 and 1) between the top two dot-products and then interpolating the inputs x value into the cell again between the bottom two dot-products of the cell. Finally, interpolate between the two previous values to get the final value for that noise which will be returned from the library. Note that as the function returns a value between -1 and 1, and I would like it to return a value between 0 and 1, the final value is mapped to my range by incrementing and dividing by 2. 

---

## Final Code

```javascript

// reference: https://github.com/joeiddon/perlin

'use strict';

const Perlin2d = {
    randomVector: function() {
        const theta = Math.random() * 2 * Math.PI;
        return { x: Math.cos(theta), y: Math.sin(theta) };
    },
    dotProductGrid: function(x, y, vx, vy) {
        let gVect;
        const dVect = { x: x - vx, y: y - vy };
        if (this.gradients[[vx, vy]]) {
            gVect = this.gradients[[vx, vy]];
        } else {
            gVect = this.randomVector();
            this.gradients[[vx, vy]] = gVect;
        }
        return dVect.x * gVect.x + dVect.y * gVect.y;
    },
    smootherstep: function(x) {
        return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
    },
    interp: function(x, a, b) {
        a + this.smootherstep(x) * (b - a);
    },
    seed: function() {
        this.gradients = {};
        this.memory = {};
    },
    get: function(x, y) {
        if (this.memory.hasOwnProperty([x, y])) {
            return this.memory[[x, y]];
        }
        const xf = Math.floor(x);
        const yf = Math.floor(y);

        // dot product
        const tl = this.dotProductGrid(x, y, xf, yf);
        const tr = this.dotProductGrid(x, y, xf + 1, yf);
        const bl = this.dotProductGrid(x, y, xf, yf + 1);
        const br = this.dotProductGrid(x, y, xf + 1, yf + 1);

        // interpolate
        const xt = this.interp(x - xf, tl, tr);
        const xb = this.interp(x - xf, bl, br);
        const v = this.interp(y - yf, xt, xb);

        this.memory[[x, y]] = v;
        return v;
    }
}

Perlin2d.seed();
```
