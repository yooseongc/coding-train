
// https://agar.io/
// https://ko.wikipedia.org/wiki/Agar.io
// https://en.wikipedia.org/wiki/Agar.io

/*
  마우스 커서 : 세포를 움직이게 하는 기본적인 요소이다.
    (마우스의 방향을 움직이면 세포는 그 방향으로 움직이게 된다.) 
    그리고 세포가 커질수록 점점 느리게 움직여서 최대크기가 되면 더이상 움직이지 않는다.
  Space : 커서가 있는 방향으로 일정 시간동안 2등분 해서 다시 하나로 된다. 
    일정크기가 되면 나누어지고 최대 16 등분까지 할 수 있다
    (단, 너무작으면 실행이 불가하다).
  w : 커서가 있는 방향으로 모든 세포에서 작은 크기의 먹이를 쏜다.
    (이 먹이는 다른 사람, 혹은 자신이 먹으면 점수가 올라간다.) 
    (단, 너무작으면 실행이 불가하다)

  The goal of the game is to obtain the largest cell.
  players must restart from a small cell 
    when all their cells are eaten by larger players or fountain viruses
  The more mass a cell has, the slower it will move.
  Cells will gradually lose a small amount of mass over time.

  Viruses are green, spiky circles that split cells that consume it.
  Viruses are normally randomly generated, but can also be generated when receiving enough mass, 
    to the point of splitting into two, hence creating a new virus.

  Players can split their cell into two, 
    and one of the two evenly divided cells
    will be shot in the direction of the cursor when the space bar was pressed.
  This can be used as a ranged attack to shoot a cell in order to 
    swallow other smaller cells or to escape an attack and move quickly around the map.
  Split cells merge back into one cell if a bigger cell of the same player’s consumes it.
  Aside from feeding viruses, players can release a small fraction of their mass to feed other cells, 
    an action commonly recognized as an intention to team with another player.
*/

let blob;
let blobs = [];
let zoom = 1;
let socket;

function setup() {
    createCanvas(600, 600);
    socket = io.connect('http://localhost:3000');
    blob = new Blob(random(width), random(height), random(8, 24));
    
    socket.emit('start', { x: blob.pos.x, y: blob.pos.y, r: blob.pos.r });
    socket.on('heartbeat', (data) => blobs = data);

    // for (let i = 0; i < 200; i++) {
    //     const x = random(-width, width);
    //     const y = random(-height, height);
    //     blobs.push(new Blob(x, y, 16));
    // }
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    zoom = lerp(zoom, 64 / blob.r, 0.1);
    scale(zoom);
    translate(-blob.pos.x, -blob.pos.y);

    for (let i = blobs.length - 1; i >= 0; i--) {
        const { id, x, y, r } = blobs[i];
        if (id !== socket.id) {
            fill(0, 0, 255);
            ellipse(x, y, r * 2, r * 2);
            
            fill(255);
            textAlign(CENTER);
            textSize(4);
            text(id, x, y + r);
        }

        // blobs[i].show();
        // if (blob.eats(blobs[i])) {
        //     blobs.splice(i, 1);
        // }
    }

    blob.show();
    if (mouseIsPressed) {
        blob.update();
    }
    blob.constrain();
    
    socket.emit('update', { x: blob.pos.x, y: blob.pos.y, r: blob.r });
}
