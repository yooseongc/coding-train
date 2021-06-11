

// https://en.wikipedia.org/wiki/Self-avoiding_walk


function make2DArray(cols, rows) {
    return Array(cols).fill(0).map(col => Array(rows));
}

function make3DArray(cols, rows, depth) {
    return Array(cols).fill(0).map(col => Array(rows).fill(0).map(row => Array(depth)));
}

const part1Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;

    let x;
    let y;
    let grid;
    const spacing = 10;
    let cols, rows;

    const allOptions = [
        { dx:  1, dy:  0 },
        { dx: -1, dy:  0 },
        { dx:  0, dy:  1 },
        { dx:  0, dy: -1 }
    ];

    function isValid(i, j) {
        return (i < 0 || i >= cols || j < 0 || j >= rows) ? false : !grid[i][j];
    }

    p.setup = () => {
        const container = p.select('#part1-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(container);
        const startButton = p.createButton('START');
        const resetButton = p.createButton('RESET');
        startButton.parent(container);
        resetButton.parent(container);
        startButton.mouseClicked(() => {
            p.loop();
        });
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);
        
        x = cols / 2;
        y = rows / 2;
        p.background(51);
        grid = make2DArray(cols, rows);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = false;
            }
        }
        grid[x][y] = true;

        p.noLoop();
    };

    p.draw = () => {
        
        p.stroke(255);
        p.strokeWeight(1);
        p.point(x * spacing, y * spacing);

        const options = [];
        for (const option of allOptions) {
            const newX = x + option.dx;
            const newY = y + option.dy;
            if (isValid(newX, newY)) {
                options.push(option);
            }
        }

        if (options.length > 0) {
            const step = p.random(options);
            p.beginShape();
            p.vertex(x * spacing, y * spacing);
            x += step.dx;
            y += step.dy;
            p.vertex(x * spacing, y * spacing);
            p.endShape();
            grid[x][y] = true;
        } else {
            console.log('I\'m stuck!');
            p.noLoop();
        }

    };

};

const part2Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;

    let grid;
    const spacing = 40;
    let cols, rows;
    let path;
    let spot;

    p.setup = () => {
        const container = p.select('#part2-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(container);
        const startButton = p.createButton('START');
        const resetButton = p.createButton('RESET');
        startButton.parent(container);
        resetButton.parent(container);
        startButton.mouseClicked(() => {
            p.loop();
        });
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);
        path = [];

        p.background(51);
        grid = make2DArray(cols, rows);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = new Spot(i, j, spacing);
            }
        }
        spot = grid[0][0];
        path.push(spot);
        spot.visited = true;


        p.noLoop();
    };

    p.draw = () => {
        p.background(51);
        p.translate(spacing*0.5, spacing*0.5);

        spot = spot.nextSpot(grid);
        if (!spot) {
            const stuck = path.pop();
            stuck.clear();
            spot = path[path.length - 1];
        } else {
            path.push(spot);
            spot.visited = true;
        }

        if (path.length === cols * rows) {
            console.log('Solved!');
            p.noLoop();
        }

        p.stroke(255);
        p.strokeWeight(spacing * 0.25);
        p.noFill();
        p.beginShape();
        for (const spot of path) {
            p.vertex(spot.x, spot.y);
        }
        p.endShape();
        p.strokeWeight(spacing * 0.5);
        p.point(spot.x, spot.y);

    };

};

const part3Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;

    let grid;
    const spacing = 50;
    let cols, rows;
    let path;
    let spot;

    p.setup = () => {
        const container = p.select('#part3-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight, p.WEBGL);
        canvas.parent(container);
        const startButton = p.createButton('START');
        const resetButton = p.createButton('RESET');
        startButton.parent(container);
        resetButton.parent(container);
        startButton.mouseClicked(() => {
            p.loop();
        });
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);
        depth = cols;
        path = [];

        p.background(0);
        grid = make3DArray(cols, rows, depth);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                for (let k = 0; k < depth; k++) {
                    grid[i][j][k] = new Spot3D(i, j, k, spacing);
                }
            }
        }
        const cx = p.floor(cols / 2);
        spot = grid[cx][cx][cx];
        path.push(spot);
        spot.visited = true;

        p.noLoop();
    };

    let lerpX = 0;
    let lerpY = 0;
    let lerpZ = 0;

    p.draw = () => {
        p.background(0);
        const center = p.createVector(0, 0, 0);
        const minXYZ = p.createVector(Infinity, Infinity, Infinity);
        const maxXYZ = p.createVector(0, 0, 0);

        for (const v of path) {
            minXYZ.x = p.min(v.x, minXYZ.x);
            minXYZ.y = p.min(v.y, minXYZ.y);
            minXYZ.z = p.min(v.z, minXYZ.z);
            maxXYZ.x = p.max(v.x, maxXYZ.x);
            maxXYZ.y = p.max(v.y, maxXYZ.y);
            maxXYZ.z = p.max(v.z, maxXYZ.z);
        }
        center.x = (maxXYZ.x - minXYZ.x) * 0.5 + minXYZ.x;
        center.y = (maxXYZ.y - minXYZ.y) * 0.5 + minXYZ.y;
        center.z = (maxXYZ.z - minXYZ.z) * 0.5 + minXYZ.z;

        const amt = 0.05;
        lerpX = p.lerp(lerpX, center.x, amt);
        lerpY = p.lerp(lerpY, center.y, amt);
        lerpZ = p.lerp(lerpZ, center.z, amt);

        p.rotateY(p.frameCount * 0.002);
        p.translate(-lerpX, -lerpY, -lerpZ);

        spot = spot.nextSpot(grid);
        if (!spot) {
            const stuck = path.pop();
            stuck.clear();
            spot = path[path.length - 1];
        } else {
            path.push(spot);
            spot.visited = true;
        }

        if (path.length === cols * rows * depth) {
            console.log('Solved!');
            p.noLoop();
        }

        p.stroke(255);
        p.strokeWeight(spacing * 0.1);
        p.noFill();
        p.colorMode(p.HSB);

        p.beginShape();
        for (let i = 0; i < path.length - 1; i++) {
            const spot1 = path[i];
            const spot2 = path[i+1];
            p.stroke((i + p.frameCount) % 360, 100, 100);
            p.line(spot1.x, spot1.y, spot1.z, spot2.x, spot2.y, spot2.z);
        }
        p.endShape();
        p.strokeWeight(spacing * 0.5);
        p.point(spot.x, spot.y, spot.z);

    };

};

const part4Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;

    let grid;
    const spacing = 20;
    let cols, rows;
    let path;
    let spot;

    p.setup = () => {
        const container = p.select('#part4-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(container);
        const startButton = p.createButton('START');
        const resetButton = p.createButton('RESET');
        startButton.parent(container);
        resetButton.parent(container);
        startButton.mouseClicked(() => {
            p.loop();
        });
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);
        path = [];

        p.background(51);
        grid = make2DArray(cols, rows);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = new Spot(i, j, spacing);
            }
        }
        spot = grid[0][0];
        path.push(spot);
        spot.visited = true;


        p.noLoop();
    };

    p.draw = () => {
        p.background(51);
        p.translate(spacing * 0.5, spacing * 0.5);

        spot = spot.nextSpot(grid);
        if (!spot) {
            const stuck = path.pop();
            stuck.clear();
            spot = path[path.length - 1];
        } else {
            path.push(spot);
            spot.visited = true;
        }

        if (path.length === cols * rows) {
            console.log('Solved!');
            p.noLoop();
        }

        p.stroke(255);
        p.strokeWeight(spacing * 0.25);
        p.noFill();
        p.beginShape();
        p.vertex(path[0].x, path[0].y);
        for (let i = 1; i < path.length - 2; i += 3) {
            const control1 = path[i + 0];
            const control2 = path[i + 1];
            const anchor   = path[i + 2];
            p.bezierVertex(
                control1.x,
                control1.y,
                control2.x,
                control2.y,
                anchor.x,
                anchor.y
            );
        }
        p.vertex(path[path.length - 1].x, path[path.length - 1].y);
        p.endShape();
        p.strokeWeight(spacing * 0.5);
        p.point(spot.x, spot.y);

    };

};

const part5Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;
    const spacing = 80;
    let cols, rows;

    function selfAvoidingWalk(desiredLength, rows, cols, start) {
        const visited = Array(cols).fill(0).map(col => Array(rows).fill(false));
        const path = [];
        if (selfAvoidingWalkHelper(path, visited, desiredLength, start.x, start.y)) {
            console.log('found self avoiding walk!');
            return path;
        } else {
            console.log('no self avoiding walk found.');
            return [];
        }
    }

    function selfAvoidingWalkHelper(path, visited, desiredLength, i, j) {
        // base cases
        if (path.length >= desiredLength) {
            return true;
        }
        if (i < 0 || i >= cols || j < 0 || j >= rows || visited[i][j]) {
            return false;
        }

        // add to path
        visited[i][j] = true;
        path.push(p.createVector(i, j));

        // recursively try directions
        if (selfAvoidingWalkHelper(path, visited, desiredLength, i + 1, j)) {
            return true;
        }
        if (selfAvoidingWalkHelper(path, visited, desiredLength, i - 1, j)) {
            return true;
        }
        if (selfAvoidingWalkHelper(path, visited, desiredLength, i, j + 1)) {
            return true;
        }
        if (selfAvoidingWalkHelper(path, visited, desiredLength, i, j - 1)) {
            return true;
        }
        
        // If we reach this point there's no path that worked so we have to remove the spot from the path
        visited[i][j] = false;
        path.pop();

        return false;
    }

    p.setup = () => {
        const container = p.select('#part5-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(container);
        const resetButton = p.createButton('RESET');
        resetButton.parent(container);
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);

        const path = selfAvoidingWalk(
            rows * cols,
            rows,
            cols,
            p.createVector(p.floor(cols / 2), p.floor(rows / 2))
        );
        p.background(51);
        p.translate(spacing * 0.5, spacing * 0.5);
        p.noFill();
        p.stroke(255);
        p.strokeWeight(3);
        p.beginShape();
        for (const loc of path) {
            p.vertex(loc.x * spacing, loc.y * spacing);
        }
        p.endShape();

    };


};

const part6Sketch = function (p) {

    const canvasWidth = 400;
    const canvasHeight = 400;

    let x;
    let y;
    const spacing = 5;
    let cols, rows;

    p.setup = () => {
        const container = p.select('#part6-canvas');
        canvas = p.createCanvas(canvasWidth, canvasHeight);
        canvas.parent(container);
        const startButton = p.createButton('START');
        const resetButton = p.createButton('RESET');
        startButton.parent(container);
        resetButton.parent(container);
        startButton.mouseClicked(() => {
            p.loop();
        });
        resetButton.mouseClicked(() => {
            p.remove();
            p.setup();
        });

        cols = p.floor(p.width / spacing);
        rows = p.floor(p.height / spacing);

        x = cols / 2;
        y = rows / 2;
        p.background(51);

        p.noLoop();
    };

    p.draw = () => {

        p.stroke(255, 100);
        p.strokeWeight(spacing * 0.5);
        p.point(x * spacing, y * spacing);

        const r = p.floor(p.random(4));
        switch (r) {
            case 0: x += 1; break;
            case 1: x -= 1; break;
            case 2: y += 1; break;
            case 3: y -= 1; break;
        }

    };

};


const part1 = new p5(part1Sketch);
const part2 = new p5(part2Sketch);
const part3 = new p5(part3Sketch);
const part4 = new p5(part4Sketch);
const part5 = new p5(part5Sketch);
const part6 = new p5(part6Sketch);
