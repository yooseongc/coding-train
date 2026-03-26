function allOptions() {
    return [
        new Step(1, 0), new Step(-1, 0), new Step(0, 1), new Step(0, -1)
    ];
}

class Step {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
        this.tried = false;
    }
}

class Spot {
    constructor(i, j, spacing) {
        this.i = i;
        this.j = j;
        this.x = i * spacing;
        this.y = j * spacing;
        this.options = allOptions();
        this.visited = false;
    }

    clear() {
        this.visited = false;
        this.options = allOptions();
    }

    nextSpot(grid) {
        const validOptions = [];
        const isValid = (i, j) => {
            const cols = grid.length;
            const rows = grid[0].length;
            if (i < 0 || i >= cols || j < 0 || j >= rows) {
                return false;
            }
            return !grid[i][j].visited;
        };
        for (const option of this.options) {
            const newX = this.i + option.dx;
            const newY = this.j + option.dy;
            if (isValid(newX, newY) && !option.tried) {
                validOptions.push(option);
            }
        }

        if (validOptions.length > 0) {
            const step = validOptions[Math.floor(Math.random() * validOptions.length)];
            step.tried = true;
            return grid[this.i + step.dx][this.j + step.dy];
        }
        return null;
    }
}
