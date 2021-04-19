
// Fractal Spirograph
// http://benice-equation.blogspot.com/2012/01/fractal-spirograph.html

/*
    - n개의 원에 의해 그려지는 Fractal Spirograph
    - 주어진 정수 k에 대해 n번째 원이 회전하는 속도는 k^n에 비례함
    - k값이 양수일 경우 모든 원이 같은 방향으로, 음수일 경우 각각의 원이 인접원과 반대로 회전함
    - 원의 수 n이 증가함에 따라 점점 프랙탈 형상이 생김
    - 프레임 마다 n번째 원의 중앙에 점을 찍음
*/

const path = [];

let angle = 0;
const resolution = 50;

const k = -4;
const n = 10;

let sun;
let end;

function setup() {
    createCanvas(600, 600);
    sun = new Orbit(width / 2, height / 2, width / 6, 0);
    let next = sun;
    for (let i = 0; i < n; i++) {
        next = next.addChild();
    }
    end = next;
}

function draw() {
    background(51);
    for (let i = 0; i < resolution; i++) {
        let next = sun;
        while (next != null) {
            next.update();
            next = next.child;
        }
        path.push(createVector(end.x, end.y));
    }

    let next = sun;
    while (next != null) {
        next.show();
        next = next.child;
    }

    beginShape();
    stroke(255, 0, 255);
    noFill();
    for (const pos of path) {
        vertex(pos.x, pos.y);
    }
    endShape();

    if (path.length > 20000) {
        path.splice(0, resolution);
    }
}
