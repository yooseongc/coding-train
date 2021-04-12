
// https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
// http://www.ibiblio.org/lifepatterns/october1970.html
// https://en.wikipedia.org/wiki/Cellular_automaton
// https://ko.wikipedia.org/wiki/%EC%84%B8%ED%8F%AC_%EC%9E%90%EB%8F%99%EC%9E%90

/*
Conway's Game of Life 

영국의 수학자 존 호턴 콘웨이가 고안해 낸 Cellular Automata의 일종.
마틴 가드너의 칼럼 <Mathematical Games>란을 통해 처음으로 대중들에게 소개되어
단순한 규칙 몇 가지로 복잡한 패턴을 만들어 낼 수 있다는 점 때문에 많은 관심과 반응을 불러일으킴.

이는 컴퓨터 과학에서도 의미가 있는데, 왜냐하면 이것이 범용 튜링 기계와 동등한 계산 능력을 가진
Cellular Automata이기 때문임. 즉, 어떤 알고리즘에 의해 계산될 수 있는 것이라면 모두 이를 이용해서 
계산할 수 있음.

라이프 게임의 진행은 처음 입력된 초기값만으로 완전히 결정된다.
라이프 게임은 무한히 많은 사각형(혹은 ‘세포’)으로 이루어진 격자 위에서 돌아간다.
각각의 세포 주위에는 인접해 있는 여덟 개의 ‘이웃 세포’가 있으며, 또 각 세포는 ‘죽어’ 있거나 ‘살아’ 있는 두가지 상태 중 한가지 상태를 갖는다.
격자를 이루는 세포의 상태는 연속적이 아니라 이산적으로 변화한다.
즉, 현재 세대의 세포들 전체의 상태가 다음 세대의 세포 전체의 상태를 결정한다.

각각의 세포가 다음 세대에서 갖는 상태는 현재 자신의 상태와 이웃하는 여덟 개의 세포들 중 몇 개가 살아있는 상태인지만을 따져서 결정된다.
* 죽은 세포의 이웃 중 정확히 세 개가 살아있으면 그 세포는 살아난다.
* 살아 있는 세포의 이웃 중 두 개 또는 세 개가 살아 있으면, 그 세포는 계속 살아있는 상태를 유지하고,
이외의 경우는 죽어버린다. (외롭거나 숨이막혀서)

콘웨이는 규칙을 아래와 같이 설정하였다.
* 폭발적인 성장이 있어서는 안됨.
* 예측할 수 없는 혼돈스러운 패턴.
* 규칙은 최대한 간단할 것.
* 폰 노이만의 Cellular Automata를 기반으로 해야 함.

라이프게임에는 아래와 같은 여러 패턴이 존재함.
* 고정된 패턴 (정물, still life) - 주기가 1 세대인 진동자
* 일정한 행동을 주기적으로 반복하는 패턴 (진동자, oscillator)
* 한 쪽 방향으로 계속 전진하는 패턴 (우주선, spaceship) 

살아있는 세포는 검은 색, 죽어 있는 셀은 흰색으로 표현함.


Cellular Automata(세포 자동차)

계산 가능성 이론, 수학, 물리학, 복잡계, 수리생물학, 미세구조 모델링에서 다루는 이산 모형이다. 
여러 개의 세포 자동자를 세포 공간, 테셀레이션 구조라고도 부른다.

세포 자동자는 규칙적인 격자 형태로 배열된 세포 또는 칸(cell)들에서 정의된다.
각 세포는 유한한 수의 "상태"를 가질 수 있는데 예를 들어 "살아 있음/죽음"이 있다. 
격자는 유한한 수의 아무 차원이면 된다. 
각 세포에 대하여, "이웃들"이라 부르는 세포들은 그 세포에 대한 관계로 정의하는데, 
예를 들어 그 세포에 대해 모든 방향으로 한 칸씩 떨어져 있는 세포들이라는 식으로 하면 된다. 

시간 t=0 일 때의 각각의 세포의 상태를 지정해놓고 이를 초기 상태라고 한다.
새로운 "세대"(시간 t가 그 다음 자연수)는 고정된 "규칙"에 의해 이전 세대로부터 만들어지는데,
규칙은 각 세포와 그 이웃들의 상태에 따라 그 세포의 새로운 상태가 지정하는 수학적인 함수이다.
일반적으로 그 규칙은 각 세포에 대해 동일하고 시간에 따라 변하지 않으며 각 세대의 모든 세포에 동시에 적용되는데,
물론 일반적이지 않은 규칙을 적용한 세포 자동자도 있다.(예: 확률론적 세포 자동자, 비동시적 세포 자동자)

*/

let grid;
let cols;
let rows;
let resolution = 10;

function make2DArray(cols, rows) {
    return Array.from(Array(cols), () => new Array(rows));
}

function setup() {
    frameRate(10);
    createCanvas(800, 800);
    cols = width / resolution;
    rows = height / resolution;
    grid = make2DArray(cols, rows);
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function draw() {
    background(0);
    
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * resolution;
            const y = j * resolution;
            if (grid[i][j] === 1) {
                fill(255);
                stroke(0);
                rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }
    
    const next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const state = grid[i][j];
            const neighborStates = countNeighbors(grid, i, j);
            
            
            if (state === 0 && neighborStates === 3) {
                // 1. 죽은 세포의 이웃 중 정확히 세 개가 살아있으면 그 세포는 살아난다.
                next[i][j] = 1;
            } else if (state === 1 && (neighborStates < 2 || neighborStates > 3)) {
                // 2. 살아 있는 세포의 이웃 중 두 개 또는 세 개가 살아 있으면, 
                // 그 세포는 계속 살아있는 상태를 유지하고, 이외의 경우는 죽어버린다.
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }
    }
    
    grid = next;
}
