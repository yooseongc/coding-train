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
        return 6 * Math.pow(x, 5) - 15 * Math.pow(x, 4) + 10 * Math.pow(x, 3);
    },
    interp: function(x, a, b) {
        return a + this.smootherstep(x) * (b - a);
    },
    seed: function() {
        this.gradients = {};
        this.memory = {};
    },
    get: function(x, y) {
        if (this.memory[[x, y]]) {
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