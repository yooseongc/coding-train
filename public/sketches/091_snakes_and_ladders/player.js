
class Player {

    constructor() {
        this.reset();
    }

    reset() {
        this.spot = -1;
        this.next = -1;
        this.roll = -1;
    }

    rollDie() {
        this.roll = floor(random(1, 7));
        this.next = this.spot + this.roll;
    }

    move() {
        this.spot = this.next;
    }

    isSnadder() {
        const tile = tiles[this.spot];
        return (tile && tile.snadder !== 0);
    }

    moveSnadder() {
        const tile = tiles[this.spot];
        this.spot += tile.snadder;
    }

    show() {
        const currentTile = tiles[this.spot];
        if (!currentTile) return;
        fill(255);
        stroke(0);
        const center = currentTile.center();
        ellipse(center.x, center.y, 16);
    }

    showPreview() {
        const start = max(0, this.spot);
        const end = min(this.next, tiles.length - 1);
        for (let i = start; i <= end; i++) {
            tiles[i].highlight();
        }
    }

}