
// lexicographic order => 사전식 순서
// https://en.wikipedia.org/wiki/Lexicographic_order
// https://www.quora.com/How-would-you-explain-an-algorithm-that-generates-permutations-using-lexicographic-ordering

/* 
  How to take any permutation and generate the next one in lexicographic order?

  Suppose that P[1..n] is a permutation of 1 through n.
  We can construct the next permutation in lexicographic order by following these simple steps:

    1. Find the largest x such that P[x] < P[x+1]
         (If there is no such x, P is the last permutation.)
    2. Find the largest y such that P[x] < P[y]
    3. Swap P[x] and P[y]
    4. Reverse P[x+1 ... n]

  
*/

let vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function setup() {
    createCanvas(400, 400);
    textSize(64);
    fill(255);
}


function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

function draw() {

    console.log(vals);

    // Step 1 : find the largest x that P[x] < P[x+1]
    let largestI = -1;
    for (let i = vals.length - 2; i >= 0; i--) {
        if (vals[i] < vals[i+1]) {
            largestI = i;
            break;
        }
    }
    if (largestI === -1) {
        noLoop();
        console.log('finished!');
    }

    // Step 2 : find the largest y such that P[x] < P[y]
    let largestJ = -1;
    for (let j = vals.length - 1; j >= 0; j--) {
        if (vals[largestI] < vals[j]) {
            largestJ = j;
            break;
        }
    }

    // Step 3 : swap P[x] and P[y]
    swap(vals, largestI, largestJ);

    // Step 4 : reverse from largestI + 1 to the end 
    const endArray = vals.splice(largestI + 1);
    endArray.reverse();
    vals = vals.concat(endArray);

    background(0);
    text(vals.reduce((a, c) => a + c , ''), 20, height / 2);

}
