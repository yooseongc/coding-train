
// https://en.wikipedia.org/wiki/Travelling_salesman_problem
// https://ko.wikipedia.org/wiki/%EC%99%B8%ED%8C%90%EC%9B%90_%EB%AC%B8%EC%A0%9C

/* 

Travelling salesman problem (TSP; 외판원 문제)

  "Given a list of cities and the distances between each pair of cities,
    what is the shortest possible route that visits each city exactly once
    and returns to the origin city?"
  
    * 조합 최적화 문제의 일종으로, NP-난해에 속하며, 흔히 계산 복잡도 이론에서
     해를 구하기 어려운 대표적인 예로 많이 다룸.
    * 그래프 이론의 용어로 정의하면, "각 변에 가중치가 주어진 완전그래프(weighted complete graph)에서
     가장 작은 가중치를 가지는 해밀턴 순환을 구하라"라고 표현할 수 있음.
    * 택배 회사 배달 경로, 인쇄회로기판 생산 공정(기판에 구멍 뚫기) 등이 외판원 문제로 모델링 할 수 있음.
    * 다항식 시간 내에 풀 수 있는 알고리즘이 없으므로, 
     담금질 기법(Simulated Annealing, SA)이나 유전 알고리즘(Genetic Algorithm)으로 
     근사 해를 구하는 것이 일반적임.

    * 담금질 기법 - annealing(풀림)의 오역  ref) https://ko.wikipedia.org/wiki/%EB%8B%B4%EA%B8%88%EC%A7%88_%EA%B8%B0%EB%B2%95
    * 풀림 - 금속재료를 가열한 다음 조금씩 냉각해 결정을 성장시켜 그 결함을 줄이는 작업.
    * SA 알고리즘은 해를 반복해 개선함으로써, 현재의 해 근방에 있는 해를 임의로 찾는데,
     그 때에 주어진 함수의 값과 전역 인자 T가 영향을 줌. 그리고 실제 물리과정과 비슷한 원리로,
     T(온도)의 값은 서서히 작아짐. 따라서, 처음에는 T가 크기 때문에 해가 크게 변화하지만,
     T가 0에 가까워짐에 따라 변화가 줄어듬.
    * 처음은 간단하게 비탈을 올라갈 수 있으므로 경사하강법과는 다르게, 
     지역 최적점에 빠졌을 때의 대책을 생각할 필요가 없음.

    * NP-hard 
    * possibility = O(n!)
    * using random only.
*/

const cities = [];
const totalCities = 5;

let recordDistance;
let bestEver;

function swapElements(a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
}

function calcDistance(points) {
    let sum = 0;
    for (let i = 0; i < points.length - 1; i++) {
        sum += dist(points[i].x, points[i].y, points[i+1].x, points[i+1].y);
    }
    return sum;
}

function setup() {
    createCanvas(400, 300);
    for (let i = 0; i < totalCities; i++) {
        cities.push(createVector(random(width), random(height)));
    }
    recordDistance = calcDistance(cities); // total distance of TSP lines
    bestEver = cities.slice();
    frameRate(10);
}

function draw() {
    
    background(0);

    // draw city points
    fill(255);
    for (const city of cities) {
        ellipse(city.x, city.y, 8, 8);
    }

    // draw current TSP lines
    stroke(255);
    strokeWeight(1);
    noFill();
    beginShape();
    for (const city of cities) {
        vertex(city.x, city.y);
    }
    endShape();

    // draw bestever TSP lines
    stroke(255, 0, 255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (const city of bestEver) {
        vertex(city.x, city.y);
    }
    endShape();

    const i = floor(random(cities.length));
    const j = floor(random(cities.length));
    swapElements(cities, i, j);  // it contains the case of i == j

    const d = calcDistance(cities);
    if (d < recordDistance) {
        recordDistance = d;
        bestEver = cities.slice();
    }
}
