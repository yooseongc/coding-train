
// https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC
// https://bost.ocks.org/mike/algorithms/

/*
    거품 정렬(Bubble Sort)

    두 인접한 원소를 검사하여 정렬하는 방법
    시간 복잡도가 O(n^2)로 상당히 느리지만, 코드가 단순함
    원소의 이동이 거품이 수면으로 올라오는 듯한 모습을 보이기 때문에 지어진 이름
    양방향으로 번갈아 수행하면 '칵테일 정렬'이 됨

    예시

    55 07 78 12 42   초기값

    // Step 1
    55 07 78 [12 42] -> OK
    55 07 [78 12] 42 -> 55 07 12 78 42
    55 [07 12] 78 42 -> OK
    [55 07] 12 78 42 -> 07 55 12 78 42

    // Step 2
    07 55 12 [78 42] -> 07 55 12 42 78
    07 55 [12 42] 78 -> OK
    07 [55 12] 42 78 -> 07 12 55 42 78

    // Step 3
    07 12 55 [42 78] -> OK
    07 12 [55 42] 78 -> 07 12 42 55 78

    // Step 4
    07 12 42 [55 78] -> OK
    
    // Finally
    07 12 42 55 78   

    의사코드

    procedure bubbleSort(A : list of sortable items) defined as:
        for each i in 1 to length(A) do:
            for each j in lenght(A) downto i + 1 do:
                if A[j] < A[j-1] then
                    swap(A[j], A[j-1])
                end if
            end for
        end for
    end procedure
*/

const values = [];

let i = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < width; i++) {
        values[i] = random(height);
    }
}

function draw() {
    background(51);
    if (i < values.length) {
        for (let j = 0; j < values.length - 1 - i; j++) {
            const [a, b] = [values[j], values[j + 1]];
            if (a > b) swap(values, j, j + 1);
        }
    } else {
        console.log('finished');
        noLoop();
    }
    i++;

    stroke(255);
    values.forEach((v, i) => line(i, height, i, height - v));
}

function swap(arr, i0, i1) {
    [arr[i0], arr[i1]] = [arr[i1], arr[i0]];
}
